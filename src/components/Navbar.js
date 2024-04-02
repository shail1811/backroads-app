import React from "react";
import logo from "../images/logo.svg";
import { pagelinks, socialLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pagelinks.map((listItem) => {
            return (
              <li key={listItem.id}>
                <a href={listItem.href} className="nav-link">
                  {listItem.text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((socials) => {
            const { id, href, icon } = socials;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  className="nav-icon"
                  rel="noreferrer"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
