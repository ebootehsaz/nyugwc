import React from 'react';
import { Link } from 'gatsby';


export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle">
            <span></span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <button  id="specialButton">
                    <span class="actual-text">&nbsp;Home&nbsp;</span>
                    <span class="hover-text" aria-hidden="true"><Link to="/">&nbsp;Home&nbsp;</Link></span>
                </button>
              </li>
              <li>
                <button  id="specialButton">
                    <span class="actual-text">&nbsp;E-Board&nbsp;</span>
                    <span class="hover-text" aria-hidden="true"><Link to="/eboard">&nbsp;E-Board&nbsp;</Link></span>
                </button>
              </li>
              <li>
                <button  id="specialButton">
                    <span class="actual-text">&nbsp;Events&nbsp;</span>
                    <span class="hover-text" aria-hidden="true"><Link to="/events">&nbsp;Events&nbsp;</Link></span>
                </button>
              </li>

              {/* <li>
                <Link to="/Elements">Extra Elements</Link>
              </li> */}

            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
