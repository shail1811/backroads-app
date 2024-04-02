import React from "react";
import { pagelinks, socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pagelinks.map((links) => {
          const { id, href, text } = links;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((socials) => {
          const { id, href, icon } = socials;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tDate.gours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
