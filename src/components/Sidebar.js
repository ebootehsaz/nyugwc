import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';

// icons @ https://fontawesome.com/icons

export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
      <h3 id="logo">
      <button  id="specialButton">
    <span class="actual-text">&nbsp;NYU GWC&nbsp;</span>
    <span class="hover-text" aria-hidden="true"><Link to="/">&nbsp;NYU GWC&nbsp;</Link></span>
</button>
        {/* <Link to="/">&nbsp;NYU GWC</Link> */}
        {/* <span style={{display: 'flex'}} className="icon fa-gem minor style5"></span> */}
      </h3>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </header>
  );
}











