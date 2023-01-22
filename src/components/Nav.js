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
          <h3>
            <ul>
              <li>
                
                <div id="specialButton">
                    <span class="actual-text">&nbsp;Home&nbsp;</span>
                    <span class="hover-text" aria-hidden="true"><Link to="/">&nbsp;Home&nbsp;</Link></span>
                </div>
              </li>

              <li>
                <div id="specialButton" class="color1">
                    <span class="actual-text">&nbsp;E-Board&nbsp;</span>
                    <span class="hover-text" aria-hidden="true"><Link to="/eboard">&nbsp;E-Board&nbsp;</Link></span>
                </div>
              </li>

              <li>
                <div id="specialButton" class="color2">
                    <span class="actual-text">&nbsp;Events&nbsp;</span>
                    <span class="hover-text" aria-hidden="true"><Link to="/events">&nbsp;Events&nbsp;</Link></span>
                </div>
              </li>

              <li>
                <div id="specialButton" class="color3">
                    <span class="actual-text">&nbsp;Get Involved&nbsp;</span>
                    <span class="hover-text" aria-hidden="true"><Link to="/involved">&nbsp;Get Involved&nbsp;</Link></span>
                </div>
              </li>


              {/* <li>
                <Link to="/Elements">Extra Elements</Link>
              </li> */}

            </ul>
            </h3>
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
