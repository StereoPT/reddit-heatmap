import React from 'react'
import styled from 'styled-components'

function NavBar() {
  return (
    <Navbar>
      <div className="nav-link inline">
        Hello
      </div>
      <div className="nav-link inline">
        Search
      </div>
      <div className="nav-link inline">
        How it Works
      </div>
      <div className="nav-link inline">
        About
      </div>
    </Navbar>
  )
}

const Navbar = styled.nav `
  background: rgb(191,49,49);
  display: flex;
  justify-content: space-around;
  .nav-link{
    color: white;
    cursor: pointer;
    //margin: 0 0 0 5rem;
  }
`;


export default NavBar
