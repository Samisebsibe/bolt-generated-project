import React from 'react';
    import { Link } from 'react-router-dom';

    function Header() {
      return (
        <header>
          <div className="container">
            <Link to="/">
              <h1>LINAWEAR</h1>
            </Link>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/category/all">Shop</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="icons">
                  <Link to="/cart">
                    <span role="img" aria-label="cart">
                      🛒
                    </span>
                  </Link>
                  <Link to="/login">
                    <span role="img" aria-label="user">
                      👤
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      );
    }

    export default Header;
