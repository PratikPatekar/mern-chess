import React from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  const obj = {
    Board: "/",
    UserInfo: "/userinfo",
    Login: "/login",
    Logout: "/logout",
  };
  return (
    <Navbar bg="light" expand="lg" variant="light">
      <Navbar.Brand href="/">MERN-Chess</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" variant="tabs" defaultActiveKey="/">
          {Object.keys(obj).map((key, index) => {
            return (
              <Navbar.Text key={index}>
                <NavLink eventKey={index}>
                  <Link to={obj[key]}>{key}</Link>
                </NavLink>
              </Navbar.Text>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
