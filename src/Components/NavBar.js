import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logo from '../images/Reddit-icon.png'

function NavBar() {
  return (
    <Navbar>
      <ul>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo"/>
          </Link>
        </div>
        <li>
          <Link to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/search">
            Search
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
          </Link>
        </li>
        <li>
          <Link to="/howitworks">
            How It Works
          </Link>
        </li>
        <li className="mr-16">
          <Link to="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </Navbar>
  )
}

const Navbar = styled.nav `
  background: #3492AE;
  color: white;
  .logo{
    width: 5%;
  }
  ul{
    display: flex;
    justify-content: space-around;
  }
  li{
    display: flex;
    justify-content: center ;
    align-items: center;
  }
`;


export default NavBar
