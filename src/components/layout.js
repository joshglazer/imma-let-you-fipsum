import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { colors } from "../styles/colors";
import Footer from "./footer";
import Header from "./header";

const pageStyles = {
  color: colors.darkest,
  backgroundColor: colors.lightest,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  fontFamily: "'Inconsolata', monospace",
  padding: 0,
};

const contentStyles = {
  flex: 1,
  padding: 10,
};

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => (
      <main style={pageStyles}>
        <title>{data.site.siteMetadata.title}</title>
        {/* <SEO /> */}
        <Header siteTitle={data.site.siteMetadata.title} />
        <div style={contentStyles}>{children}</div>
        <Footer />
      </main>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
