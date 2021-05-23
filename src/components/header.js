import { useBreakpoint } from "gatsby-plugin-breakpoints";
import React from "react";

const headingStyles = {
  margin: 0,
  maxWidth: 400,
  fontWeight: "200",
  textTransform: "uppercase",
  fontSize: "5em",
  padding: 10,
};

const headingStylesMobile = {
  ...headingStyles,
  fontSize: "2em",
};

const Header = ({ siteTitle }) => {
  const breakpoints = useBreakpoint();

  return (
    <h1 style={breakpoints.sm ? headingStylesMobile : headingStyles}>
      {siteTitle}
    </h1>
  );
};

export default Header;
