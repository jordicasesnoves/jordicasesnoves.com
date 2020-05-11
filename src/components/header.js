import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import {
  GithubIcon,
  TwitterIcon,
  LinkedinIcon,
  HamburguerIcon,
  CrossIcon,
} from "../icons";

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
        " top-0 relative bg-white z-1000" + (isExpanded ? "border-b " : "")
      }
    >
      <div
        className={`flex flex-wrap justify-start items-center max-w-6xl px-4 py-8 mx-auto md:px-8`}
      >
        <Link to="/" className="mr-8">
          <h1 className="flex items-center no-underline">
            <span className="text-3xl font-medium tracking-tight">JC</span>
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
              className="text-gray-600 hover:text-gray-900 block mt-4 no-underline md:inline-block md:mt-0 md:ml-6"
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
          {[
            {
              href: `https://www.twitter.com`,
              name: `Twitter`,
              icon: <TwitterIcon className="w-6 h-6" />,
            },
            {
              href: `https://www.github.com`,
              name: `GitHub`,
              icon: <GithubIcon className="w-6 h-6" />,
            },
            {
              href: `https://www.linkedin.com`,
              name: `Linkedin`,
              icon: <LinkedinIcon className="w-6 h-6" />,
            },
          ].map((link, index, array) => (
            <a
              className={
                `text-gray-600 hover:text-gray-900 block mt-4 no-underline inline-flex md:inline-block md:mt-0 ` +
                (index + 1 < array.length ? `mr-6` : "")
              }
              key={link.name}
              href={link.href}
            >
              {link.icon}
            </a>
          ))}
        </div>
        <button
          className="flex items-center block px-3 py-2 rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            {isExpanded ? <CrossIcon /> : <HamburguerIcon />}
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
