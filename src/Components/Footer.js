import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../images/Reddit-icon.png'


export default class Footer extends Component {
  render() {
    return (
      <MyFooter className="p-2">
        <div className="w-full mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start">
            <Link to="/" className="logo mr-4">
              <img src={ logo } alt="logo"/>
            </Link>
            <ul className="flex flex-wrap justify-center text-center">
              <li>
              © Reddit Heatmap
              </li>
              <li className="text-right">
                Created by FDGP
              </li> 
            </ul>
          </div>
        </div>
          {/* <ul className="flex flex-wrap justify-center text-center"> */}
      </MyFooter>
    )
  }
}

const MyFooter = styled.footer`
  background-color: #212529;
  color: white;
  width: 100%;
  .logo{
    width: 50px;
  };

  ul li{
    padding: 0.5rem 1rem;
  }
  //text-align: center;
`