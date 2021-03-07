import React, { Component } from 'react'
import { NavLink,Navbar, Image } from 'react-bootstrap';
import mypic from '../assets/images/elmahdibenbrahim.jpg'
export default class Layout extends Component {
  render() {
    return (
      <Navbar bg="dark" className="navbar navbar-expand-lg navbar-dark" variant="dark">
          <Navbar.Brand href="/">
            <Image
              alt=""
              src= { mypic }
              width="50"
              height="50"
              className="d-inline-block align-center"
              roundedCircle 
            />{' '}
            El Mahdi Benbrahim
          </Navbar.Brand>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/#">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/#">
                  Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/#">
                  Education
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/#">
                  Certifications 
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/#">
                  Skills 
                </NavLink>
              </li>
            </ul>
          </div>
        </Navbar>
    )
  }
}