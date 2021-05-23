import React, { useState } from "react";
import { generateParagraph } from "../api/quotes";
import Layout from "../components/layout";
import { colors } from "../styles/colors";

const buttonStyles = {
  backgroundColor: colors.light,
  borderColor: colors.dark,
  fontFamily: "'Inconsolata', monospace",
};
const placeholderTextStyles = {
  borderTop: `1px solid ${colors.dark}`,
  marginTop: "1em",
};
const quoteKanyeWestStyles = {
  color: colors.dark,
};
const quoteTaylorSwiftStyles = {};

const quoteStyleMap = {
  "kanye west": quoteKanyeWestStyles,
  "taylor swift": quoteTaylorSwiftStyles,
};

const IndexPage = () => {
  const [paragraphs, setParagraphs] = useState([]);
  const [paragraphsCount, setParagraphsCount] = useState(3);

  async function generateText() {
    const paragraphs = [];
    for (let i = 0; i < paragraphsCount; i++) {
      const paragraph = await generateParagraph();
      paragraphs.push(paragraph);
    }
    setParagraphs(paragraphs);
  }

  return (
    <Layout>
      <p>
        On September 13, 2009, the world changed forever. Everyone was tuned
        into the <strong>MTV Video Music Awards</strong>, and was anxiously
        awaiting to hear who would win the award for{" "}
        <strong>Best Video by a Female Artist</strong>. As we all waited on the
        edge of our seats for Shakira and Taylor Lautner to announce the winner,
        we had no idea what was about to happen. <strong>Taylor Swift</strong>{" "}
        was announced as the winner, and the crowd went crazy. But not everyone
        was happy. As soon as <strong>Taylor Swift</strong> started her
        acceptance speech, <strong>Kanye West</strong> ran onto the stage and
        said{" "}
        <span style={quoteKanyeWestStyles}>
          "Yo Taylor, I'm really happy for you, I’mma let you finish, but
          Beyoncé had one of the best videos of all time! One of the best videos
          of all time!"
        </span>{" "}
        Then, true to his word, Kanye left the stage and let Taylor finish her
        speech.
      </p>
      <p>
        Now you can relive the infamous time in pop culture history while
        generating <strong>"Lorem Ipsum Style"</strong> placeholder text for
        your website, advertisement, or anything else you may be working on by
        clicking the button below. The placeholder text will contain a few
        quotes by <strong>Taylor Swift</strong>, but one{" "}
        <strong>Kanye West quote</strong> will interrupt each paragraph.
      </p>
      <button
        style={buttonStyles}
        onClick={() => {
          generateText();
        }}
      >
        Generate Placeholder Text
      </button>
      {paragraphs.length > 0 && (
        <div style={placeholderTextStyles}>
          {paragraphs.map((paragraphQuotes, i) => {
            return (
              <p key={i}>
                {paragraphQuotes.map((paragraphQuote, i) => {
                  return (
                    <span key={i} style={quoteStyleMap[paragraphQuote.type]}>
                      {paragraphQuote.quote}
                    </span>
                  );
                })}
              </p>
            );
          })}
        </div>
      )}
    </Layout>
  );
};

export default IndexPage;