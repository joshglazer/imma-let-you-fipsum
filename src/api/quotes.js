import { kanyeWestQuotes } from "../data/kanye-west";
import { taylorSwiftQuotes } from "../data/taylor-swift";

const TAYLOR_REST_API_ENDPOINT = "https://api.taylor.rest/";
const KANYE_REST_API_ENDPOINT = "https://api.kanye.rest/";

const typeApiMap = {
  "taylor swift": {
    endpoint: TAYLOR_REST_API_ENDPOINT,
    useEndpoint: false,
    fallbackData: taylorSwiftQuotes,
  },
  "kanye west": {
    endpoint: KANYE_REST_API_ENDPOINT,
    useEndpoint: true,
    fallbackData: kanyeWestQuotes,
  },
};

const KANYE_QUOTE_PREFIX = "Imma let you finish but";
const KANYE_QUOTE_SKIP_TRANSFORMATION = ["I", "I'm", "I'd", "George"];
const QUOTE_ENDING_PUNCTUATION = [".", "!", "?"];

function _getFallbackData(type) {
  try {
    const fallbackData = typeApiMap[type].fallbackData;
    const fallbackQuote = {
      quote: fallbackData[Math.floor(Math.random() * fallbackData.length)],
      type,
    };
    return fallbackQuote;
  } catch {
    console.error(`API Endpoint failed and no fallback Data setup for ${type}`);
  }
}

// getQuote returns one quote that can be used in a paragraph
function _getQuote(type) {
  let apiEndpointUrl;
  try {
    apiEndpointUrl = typeApiMap[type].endpoint;
  } catch (e) {
    console.error("getQuote()", `No API endpoint defined for ${type}`);
  }

  // if an endpoint was found, make an api call and return a promise for that call, with the type appended to the result
  if (apiEndpointUrl && type.useEndpoint) {
    const quote = fetch(apiEndpointUrl)
      .then((response) => response.json())
      .then((data) => ({
        ...data,
        type,
      }))
      // If the api call failed for any reason, pull one of the hardcoded quotes from the locally stored list
      // and transform it to match the api response
      .catch(() => {
        return _getFallbackData(type);
      });
    return quote;
  } else {
    return _getFallbackData(type);
  }
}

// generateParagraph retrieves all quotes needed for one paragraph and sorts them appropriately
export async function generateParagraph() {
  // each paragraph consists of 5 taylor swift quotes, with one interruption from kanye
  const apiCalls = [];
  const taylorSwiftQuoteCount = 5;
  const kanyeQuoteCount = 1;

  // build an array of api calls for quotes
  for (let i = 0; i < taylorSwiftQuoteCount; i++) {
    apiCalls.push(_getQuote("taylor swift"));
  }
  for (let i = 0; i < kanyeQuoteCount; i++) {
    apiCalls.push(_getQuote("kanye west"));
  }

  // Wait until all api calls finish
  return await Promise.all(apiCalls).then((quotes) => {
    // Since there will always only be one kanye quote, and it will be the last quote in the list,
    // remove it from the array and place it back in at a random spot.
    const quoteKanye = quotes.pop();
    quoteKanye.quote = transformKanyeQuote(quoteKanye.quote);

    const newKanyeQuoteIndex = getRandomNumber(1, quotes.length - 1);
    // Kanye's quote should never be the first or last quote, since he has to interrupt
    // Taylor Swift but he also has to let her finish
    quotes.splice(newKanyeQuoteIndex, 0, quoteKanye);

    // Add a space to the end of all quotes except for the last one
    return quotes.map((quote, index) => {
      if (index < quotes.length - 1) {
        if (
          !QUOTE_ENDING_PUNCTUATION.includes(
            quote.quote[quote.quote.length - 1]
          )
        ) {
          quote.quote += ".";
        }
        quote.quote += " ";
      }
      return quote;
    });
  });
}

function transformKanyeQuote(quote) {
  let quoteTransformed = "";
  const words = quote.split(" ");
  // Transform the first character to lowercase unless the first word is I
  if (!KANYE_QUOTE_SKIP_TRANSFORMATION.includes(words[0])) {
    quoteTransformed = `${quote[0].toLowerCase()}${quote.slice(1)}`;
  } else {
    quoteTransformed = quote;
  }
  quoteTransformed = `${KANYE_QUOTE_PREFIX} ${quoteTransformed}`;
  return quoteTransformed;
}

// getRandomNumber returns a random number between the start and stop values
function getRandomNumber(start, stop) {
  return Math.floor(Math.random() * stop) + start;
}
