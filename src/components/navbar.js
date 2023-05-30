import logo from "../images/logo.svg";
import React from "react";
import { pageLinks, socialLinks } from "../pagelinks";

function navbar() {
  return (
    <>
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
            {pageLinks.map((links) => {
              const { href, id, text } = links;
              return (
                <li key={id}>
                  <a href={href} className="nav-link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* navIcons */}

          <ul className="nav-icons">
            {socialLinks.map((address) => {
              return (
                <li key={address.id}>
                  <a
                    href={address.href}
                    rel="noreferrer"
                    target="_blank"
                    className="nav-icon"
                  >
                    <i className={address.icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default navbar;
