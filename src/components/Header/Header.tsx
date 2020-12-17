import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Header.css'


function Header() {
    return (
        <div>
            <Navbar className='navBar_color' bg="dark" expand="lg">
  <Link to='/'><Navbar.Brand href="#home"><h1 style={{color:'white'}}>SPACEX</h1></Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse  id="basic-navbar-nav">
    <Nav id='heder_menue' className="ml-auto">
      <Link id="home_menue" to="/">Home</Link>
      <Link id="launches_menue" to="launch">Launches</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Header
