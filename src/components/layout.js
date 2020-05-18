import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";
import "typeface-work-sans";
import "../css/layout.css";

function Layout({ children }) {
  return (
    <div className="relative flex flex-col min-h-screen font-sans theme-light bg-background text-main-text">
      <Header />

      <main className="flex-1 w-full">{children}</main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
