import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";

function Header() {
  return (
    <Navbar className="header-gradient">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src="./src/assets/logo.png"
            height="30"
            className="d-inline-block align-top"
          />
          {""}
          <Navbar.Text className="text-white header-text fs-4 ms-2">
            Todo List
          </Navbar.Text>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
