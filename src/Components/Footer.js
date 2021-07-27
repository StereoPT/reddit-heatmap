import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../Images/Reddit-icon.png'


function Footer() {
  return (
    <FooterBar className="mt-4 p-2 text-white">
      <div className="w-full mx-auto px-2">
        <div className="flex flex-wrap items-center justify-evenly">
          <div>
            © Reddit Heatmap
          </div>
          <Link to="/" className="logo mr-0 md:mr-4">
            <img src={ logo } alt="logo"/>
          </Link>
          <div>
            Created by: <strong>FDGP</strong>
          </div> 
        </div>
      </div>
    </FooterBar>
  );
}

const FooterBar = styled.footer`
  background-color: #212529;

  .logo{
    width: 24px;
  };
`;

export default Footer;