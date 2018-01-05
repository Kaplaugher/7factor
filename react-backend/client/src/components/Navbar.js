import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <header>
        <h2>
          <a href="/">7factor Stuff</a>
        </h2>
        <nav>
          <li>
            <Link to='/'>Random</Link>
          </li>
          <li>
            <Link to='/animals'>Animals</Link>
          </li>
          <li>
            <Link to='/tech'>Tech</Link>
          </li>
        </nav>
      </header>
    );
  }
}

export default Navbar;
