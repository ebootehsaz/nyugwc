import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';

// icons @ https://fontawesome.com/icons

export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
      <h1 id="logo">
      <span className="icon fa-gem minor style4"></span>
      {/* <span className="icon fa-lock style3"></span> */}
        <Link to="/">&nbsp;NYU GWC</Link>
        {/* <span style={{display: 'flex'}} className="icon fa-gem minor style5"></span> */}
      </h1>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </header>
  );
}











