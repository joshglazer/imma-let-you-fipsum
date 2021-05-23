import React from "react";

const headingStyles = {
  margin: 0,
  maxWidth: 400,
  fontWeight: "200",
  textTransform: "uppercase",
  fontSize: "5em",
  padding: 10,
};

const Header = ({ siteTitle }) => <h1 style={headingStyles}>{siteTitle}</h1>;

export default Header;
