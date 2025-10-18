import { Button, Row, Col, Container } from "react-bootstrap";
import NavbarHeader from "./NavbarHeader/NavbarHeader";
import Footer from "../Footer/Footer";

function Home() {
    const tours = [
        { date: "JUL 16", city: "DETROIT, MI", venue: "DTE ENERGY MUSIC THEATRE" },
        { date: "JUL 19", city: "TORONTO, ON", venue: "BUDWEISER STAGE" },
        { date: "JUL 22", city: "BRISTOW, VA", venue: "JIGGY LUBE LIVE" },
        { date: "JUL 29", city: "PHOENIX, AZ", venue: "AK-CHIN PAVILION" },
        { date: "AUG 2", city: "LAS VEGAS, NV", venue: "T-MOBILE ARENA" },
        { date: "AUG 7", city: "CONCORD, CA", venue: "CONCORD PAVILION" },
    ];
    return (
        <>
            <NavbarHeader />
            <Container className="my-5 px-3">
                <div className="mx-auto" style={{ maxWidth: "800px" }}>
                    <h2 className="justify-content-center text-center" >TOURS</h2>
                    {tours.map((tour, index) => (
                        <Row key={index} className="align-items-center py-2 border-bottom justify-content-center text-center text-md-start g-2">
                            <Col xs={12} md={2} className="fw-bold">
                                {tour.date}
                            </Col>
                            <Col xs={12} md={3}>
                                {tour.city}
                            </Col>
                            <Col xs={12} md={4}>
                                {tour.venue}
                            </Col>
                            <Col xs={4} md={3} className="text-md-end mt-2 mt-md-0 pt-2">
                                <Button variant="info" className="fw-semibold text-white w-100">
                                    BUY TICKETS
                                </Button>
                            </Col>
                        </Row>
                    ))}
                </div>
            </Container>
            <Footer /> 
        </>
    );
}

export default Home;