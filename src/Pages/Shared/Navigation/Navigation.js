import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Navigation.css'
import swal from "sweetalert";

const Navigation = () => {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="nav-bg">
          <Container>
            <Navbar.Brand href="/home" className="d-inline w-50">
              <h2>Hero Ride</h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="nav-link" as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-link" as={Link} to="/register">
                  Register
                </Nav.Link>
                {/* {user?.email ? (
                  <>
                    <span className="fw-bold user-name text-info mx-auto d-flex justify-content-center align-items-center">
                      {user?.displayName}
                    </span>
                    <Nav.Link className="nav-link login-btn">
                      <Button onClick={handleLogOut} variant="danger">
                        Logout
                      </Button>
                    </Nav.Link>
                  </>
                ) : (
                  <>
                    <Nav.Link
                      className="nav-link login-btn"
                      as={Link}
                      to="/login"
                    >
                      <Button variant="success">Login</Button>
                    </Nav.Link>
                  </>
                )} */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default Navigation;