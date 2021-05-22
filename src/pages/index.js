import React, { useState } from "react";
import { generateParagraph } from "../api/quotes";

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const paragraphStyles = {
  marginBottom: 48,
};
const quoteKanyeWestStyles = {
  color: "blue",
};
const quoteTaylorSwiftStyles = {};

const quoteStyleMap = {
  "kanye west": quoteKanyeWestStyles,
  "taylor swift": quoteTaylorSwiftStyles,
};

// markup
const IndexPage = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [paragraphsCount, setParagraphsCount] = useState(3);

  async function generateText() {
    const paragraphs = [];
    for (let i = 0; i < paragraphsCount; i++) {
      const paragraph = await generateParagraph();
      console.log("Paragraph", paragraph);
      // const quote = await getQuote("taylor swift");
      // const quote2 = await getQuote("kanye west");
      paragraphs.push(paragraph);
    }
    setParagraphs(paragraphs);
  }

  return (
    <main style={pageStyles}>
      <title>Imma Let You Fipsum</title>
      <h1 style={headingStyles}>Imma Let You Fipsum</h1>
      <p style={paragraphStyles}>
        In 2009, Kanye West interrupted Taylor Swift's acceptance speech to let
        everyone know that he disagreed with the award. Relive that infamous
        moment here.
      </p>
      <button
        onClick={() => {
          generateText();
        }}
      >
        Get Started
      </button>

      {paragraphs.map((paragraphQuotes, i) => {
        return (
          <p key={i}>
            {paragraphQuotes.map((paragraphQuote, i) => {
              console.log("quote", quoteStyleMap[paragraphQuote.type]);

              return (
                <span key={i} style={quoteStyleMap[paragraphQuote.type]}>
                  {paragraphQuote.quote}
                </span>
              );
            })}
          </p>
        );
      })}
    </main>
  );
};

export default IndexPage;
