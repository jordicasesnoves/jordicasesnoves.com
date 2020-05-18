import React from "react";
import { TextLink } from "./Link";
import { Link } from "gatsby";
import { NewsletterSection } from "../sections/NewsletterSection";
import { Icon } from "./Icon";
import socialMediaLinks from "../../content/socialmedialinks.json";
import getExternalLink from "../utils/getExternalLink";

const Footer = () => {
  return (
    <footer className="relative z-10 mt-32 border-t border-gray-200">
      {/* <NewsletterSection/>*/}
      <nav className="flex flex-col text-gray-600 justify-center items-center max-w-6xl p-4 mx-auto">
        <div className="my-3">
          <nav
            className={`
             flex flex-1 font-medium items-center w-full `}
          >
            {[
              {
                route: `#portfolio`,
                title: `Portfolio`,
              },
              {
                route: `#specialized`,
                title: `Specialized In`,
              },
              {
                route: `#about`,
                title: `About Me`,
              },
            ].map((link) => (
              <a
                className="transition-all duration-200 text-gray-600 hover:text-gray-900 block mx-8 no-underline"
                key={link.title}
                href={link.route}
              >
                {link.title}
              </a>
            ))}
          </nav>
        </div>
        <div className="my-3">
          {socialMediaLinks.map((link, index, array) => (
            <a
              className={
                `transition-all duration-200 text-gray-600 hover:text-gray-900 block mt-4 no-underline inline-flex md:inline-block md:mt-0 ` +
                (index + 1 < array.length ? `mr-6` : "")
              }
              key={link.name}
              href={link.href}
            >
              <Icon icon={link.icon} className="w-6 h-6" />
            </a>
          ))}
        </div>
        <div className="my-3 text-center">
          © {new Date().getFullYear()} — Web designed & coded by Jordi
          Casesnoves using{" "}
          <TextLink href={getExternalLink("React.js")}>React.js</TextLink> +{" "}
          <TextLink href={getExternalLink("Gatsby.js")}>Gatsby.js</TextLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
