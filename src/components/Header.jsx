import React from "react";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1><NavLink to={"/"}>Markdown editor</NavLink></h1>

        <ul>
          <li>
            <NavLink to={"/edit"}>Edit</NavLink>
          </li>
          <li>
            <NavLink to={"/markdown"}>MarkDown</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
