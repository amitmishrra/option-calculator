// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
  return (
    <header className="bg-gray-800 p-4 header">
      <nav>
        <ul className="flex space-x-8 justify-start">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300"
            >
              NIFTY-FIFTY
            </Link>
          </li>
          <li>
            <Link
              to="/banknifty"
              className="text-white hover:text-gray-300"
            >
              BANK-NIFTY
            </Link>
          </li>
          <li>
            <Link
              to="/sensex"
              className="text-white hover:text-gray-300"
            >
              SENSEX
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
