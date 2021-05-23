import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { colors } from "../styles/colors";

const footerStyles = {
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: colors.light,
  padding: 10,
};

const Footer = () => (
  <footer style={footerStyles}>
    <div>
      A{" "}
      <a
        href="https://www.linkedin.com/in/joshglazer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Josh Glazer
      </a>{" "}
      Project
    </div>
    <div>
      <a
        href="https://github.com/joshglazer/imma-let-you-fipsum"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
        Source Code on GitHub
      </a>
    </div>
  </footer>
);

export default Footer;
