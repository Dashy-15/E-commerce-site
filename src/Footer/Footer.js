import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaYoutube, FaSpotify, FaFacebook } from "react-icons/fa";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer bg-info text-white py-5">
            <Container fluid>
                <Row className="align-items-center justify-content-between text-center text-md-start flex-nowrap">
                    <Col xs="auto">
                        <h3 className="fw-bold mb-0">The Generics</h3>
                    </Col>
                    <Col xs="auto" className="d-flex justify-content-center justify-content-md-end">
                        <div className="social-icons">
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white mx-3 fs-1"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="https://www.spotify.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white mx-3 fs-2"
                            >
                                <FaSpotify />
                            </a>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white mx-3 fs-2"
                            >
                                <FaFacebook />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
