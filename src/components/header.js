import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import links from "../../content/links.json";
import * as icons from "../icons";

import { HamburguerIcon, CrossIcon } from "../icons";
import { Icon } from "./Icon";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header
      className={
        " top-0 bg-background relative z-1000" + (isExpanded ? "border-b " : "")
      }
    >
      <div
        className={`flex flex-wrap justify-start items-center max-w-6xl px-4 py-8 mx-auto md:px-8`}
      >
        <Link to="/" className="mr-8">
          <h1 className="flex items-center no-underline">
            <span className="text-xl font-medium tracking-tight">
              Jordi Casesnoves
            </span>
          </h1>
        </Link>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } flex-1 font-medium md:block md:flex md:items-center w-full md:w-auto`}
        >
          {[
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/contact`,
              title: `Contact`,
            },
            {
              route: `/contact`,
              title: `Blog`,
            },
          ].map((link) => (
            <Link
              className="text-secondary-text hover:text-hover-text block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } ml-16 md:block md:flex md:items-center w-full md:w-auto`}
        >
          {links.map((link, index, array) => (
            <a
              className={
                `text-secondary-text hover:text-hover-text block mt-4 no-underline inline-flex md:inline-block md:mt-0 ` +
                (index + 1 < array.length ? `mr-6` : "")
              }
              key={link.name}
              href={link.href}
            >
              <Icon icon={link.icon} className="w-6 h-6" />
            </a>
          ))}
        </div>
        <button
          className="flex items-center block px-3 py-2 rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu</title>
            {isExpanded ? (
              <Icon icon="CrossIcon" className="w-6 h-6" />
            ) : (
              <Icon icon="HamburguerIcon" className="w-6 h-6" />
            )}
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
