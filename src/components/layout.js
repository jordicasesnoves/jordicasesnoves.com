import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer";
import "typeface-work-sans";
import "../css/layout.css";

function Layout({ children }) {
  return (
    <div className="relative flex flex-col min-h-screen font-sans text-gray-900">
      <Header />

      <main className="flex-1 w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main>

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
