import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { colors } from "../styles/colors";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

const footerStyles = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: colors.light,
  padding: 10,
};

const footerStylesMobile = {
  ...footerStyles,
  flexDirection: "column",
  textAlign: "center",
};

const footerItemStylesMobile = {
  marginTop: "1em",
};

const footerLinkStyles = {
  color: colors.darkest,
  fontWeight: 900,
};

const Footer = () => {
  const breakpoints = useBreakpoint();

  return (
    <footer style={breakpoints.sm ? footerStylesMobile : footerStyles}>
      <div>
        A{" "}
        <a
          href="https://www.linkedin.com/in/joshglazer/"
          target="_blank"
          rel="noopener noreferrer"
          style={footerLinkStyles}
        >
          Josh Glazer
        </a>{" "}
        Project
      </div>
      <div style={breakpoints.sm ? footerItemStylesMobile : {}}>
        <a
          href="https://github.com/joshglazer/imma-let-you-fipsum"
          target="_blank"
          rel="noopener noreferrer"
          style={footerLinkStyles}
        >
          <FontAwesomeIcon icon={faGithub} /> Source Code on GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
