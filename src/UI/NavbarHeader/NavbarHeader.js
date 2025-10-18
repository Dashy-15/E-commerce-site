import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import "./NavbarHeader.css";
import playBtn from "../../Assets/play.png";
import CartButton from "./CartButton";
import { useState } from "react";
import CartSidepanel from "../SidePanel/CartSidepanel";

function NavbarHeader() {
  const location = useLocation();

  // Check if the current path is Home ("/")
  const isHomePage = location.pathname === "/";
  const [showCart, setShowCart] = useState(false);
  const handleShow = () => {
    setShowCart(true);
  }
  const handleClose = () => {
    setShowCart(false);
  }


  return (
    <>
      <Navbar bg="dark" variant="dark" className="custom-navbar" fixed="top">
        <Container className="justify-content-center">
          <Nav className="gap-5 flex-nowrap">
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/store">STORE</Nav.Link>
            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
          </Nav>
          <CartButton onClick={handleShow}/>
        </Container>
      </Navbar>
      <CartSidepanel show={showCart} handleClose={handleClose}/>
      <div className="banner text-center text-white py-5 mt-5">
        <h1 className="display-3 fw-bold">The Generics</h1>

        {isHomePage && (
          <div className="d-flex flex-column align-items-center mt-4">
            <Button className="btn-transparent-sky mb-3">Get Our Latest Album</Button>
            <img
              src={playBtn}
              alt="Play"
              className="play-image"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default NavbarHeader;
