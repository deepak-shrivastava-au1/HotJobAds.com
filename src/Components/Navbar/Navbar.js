import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Navbar, Nav } from "react-bootstrap";



export default class Navibar extends React.Component {
      constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
      }
  
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  render() {
    return (
      <Navbar
      className = "navbar"
      collapseOnSelect
      expand='lg'
      // bg='dark'
      // variant='dark'
      style={{ marginBottom: '0px', background: 'white' }}
  >
    <div className="container-fluid">
      <Link to="/" class="HomeNav">
      HOME      
        <span class="sr-only">Home</span>
      </Link>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
      <Nav  className='mr-auto'>
   

        {/* Menu Left Aligned */}    
        <Link className = "menu" to='/myAccount' >
        MY ACCOUNT
        </Link> 
        <Link className = "menu" to='/users' >
        FIND JOB
        </Link> 
        <Link className = "menu" to='/users' >
        POST RESUME
        </Link> 
        <Link className = "menu" to='/users' >
        POST JOB FREE
        </Link> 

        {/* Menu Left Aligned */}
        <Link className = "Register" to='/registration' >
        Register
        </Link> 
        <Link className = "dash" to='#' >
        |
        </Link> 
        <Link className = "SignIn" to='/signIn' >
        Sign In
        </Link> 

        {/* Language Dropdown */}

        <NavDropdown
        title={<span className="Language" >Select Language</span>}
        className="d-inline-block"
          >
        <NavDropdown.Item
          as={Link}
          className="English"
          to="#"
          style={{ color: "black" }}
        >
          English
        </NavDropdown.Item>
        <NavDropdown.Item
          as={Link}
          className="Spanish"
          to="#"
          style={{ color: "black" }}
        >
          Spanish
        </NavDropdown.Item>
      </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
    );
  }
}
