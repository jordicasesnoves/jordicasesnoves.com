import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState, useEffect, useRef } from "react";
import links from "../../content/socialmedialinks.json";
import * as icons from "../icons";

import { HamburguerIcon, CrossIcon } from "../icons";
import { Icon } from "./Icon";

function Header() {
  const headerEl = useRef(null);
  const [showShadow, setShowShadow] = useState(false);
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

  const handleResponsiveLink = (e) => {
    toggleExpansion(false);
  };

  const handleScroll = (e) => {
    if (headerEl.current.offsetTop > 0) {
      setShowShadow(true);
    } else {
      setShowShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerEl}
      className={
        "sticky top-0 bg-background z-50 transition-all duration-200 " +
        (isExpanded ? " " : " ") +
        (showShadow ? " shadow-xl " : " ")
      }
    >
      <div
        className={`flex flex-wrap relative justify-start items-center max-w-6xl px-4 py-6 mx-auto md:px-8`}
      >
        <div className="flex flex-1 items-center ">
          <nav
            className={`flex-1 inline-flex justify-between font-medium   md:items-center w-full `}
          >
            <Link to="/" className="mr-8">
              <h1 className="flex items-center no-underline">
                <span className="text-xl font-medium tracking-tight">
                  Jordi Casesnoves
                </span>
              </h1>
            </Link>
            <div className="hidden md:block md:flex">
              {[
                {
                  route: `#portfolio`,
                  title: `Portfolio`,
                },
                {
                  route: `#about`,
                  title: `About`,
                },
              ].map((link) => (
                <a
                  className="transition-all duration-200 text-secondary-text hover:text-hover-text block mt-4 no-underline md:inline-block md:mt-0 mx-8"
                  key={link.title}
                  href={link.route}
                >
                  {link.title}
                </a>
              ))}
            </div>
            <div className="hidden md:block md:flex">
              {links.map((link, index, array) => (
                <a
                  className={
                    `transition-all duration-200 text-secondary-text hover:text-hover-text block mt-4 no-underline inline-flex md:inline-block md:mt-0 ` +
                    (index + 1 < array.length ? `mr-6` : "")
                  }
                  key={link.name}
                  href={link.href}
                >
                  <Icon icon={link.icon} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </nav>

          <button
            className="absolute right-0 flex items-center block px-4 py-2 rounded md:hidden"
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
        <div
          className={
            (showShadow ? "shadow-xl " : " ") +
            (isExpanded
              ? "border-b absolute overlay mt-16 pb-6 h-auto items-center left-0 top-0 w-full bg-white "
              : " hidden ")
          }
        >
          <div className="flex flex-col font-medium">
            {[
              {
                route: `#portfolio`,
                title: `Portfolio`,
              },
              {
                route: `#about`,
                title: `About`,
              },
            ].map((link) => (
              <a
                className="transition-all duration-200 text-secondary-text hover:text-hover-text block mt-4 no-underline md:inline-block md:mt-0 mx-4"
                key={link.title}
                href={link.route}
                onClick={handleResponsiveLink}
              >
                {link.title}
              </a>
            ))}
            <div className="ml-4">
              {links.map((link, index, array) => (
                <a
                  className={
                    `transition-all duration-200  text-secondary-text hover:text-hover-text block mt-4 no-underline inline-block md:mt-0 ` +
                    (index + 1 !== array.length ? `mr-6` : "")
                  }
                  key={link.name}
                  href={link.href}
                  onClick={handleResponsiveLink}
                >
                  <Icon icon={link.icon} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
