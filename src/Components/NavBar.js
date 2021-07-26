import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../images/Reddit-icon.png'

function NavBar() {
  return (
    <Navbar className="p-2 text-white">
      <div className="w-full mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-start">
          <Link to="/" className="logo mr-0 md:mr-4">
            <img src={ logo } alt="logo"/>
          </Link>
          <ul className="flex flex-wrap justify-center text-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/howitworks">How It Works</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </Navbar>
  )
}

const Navbar = styled.nav `
  background-color: #212529;

  .logo{
    width: 40px;
  };

  ul li {
    padding: 0.5rem 1rem;
  }
`;

export default NavBar;