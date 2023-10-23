import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./SiteNav.css";

const SiteNav = () => {
  return (
    <Navbar expand="lg" className="bg-dark position-fixed w-100 shadow z-1 ">
      <Container className="d-flex align-items-center">
        <Link className="text-warning" to="/">
          <h2>Shopify</h2>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto py-3 d-flex align-items-center">
            <Link className="fs-6 fw-bold" to="/Home">
              Home
            </Link>
            <Link className="ms-5 fs-6 fw-bold" to="/About">
              About
            </Link>
            <Link className="ms-5 fs-6 fw-bold" to="/Contactus">
              Contact Us
            </Link>
            <Link className="ms-5 fs-6 fw-bold" to="/Register">
              Register
            </Link>
            <Link className="ms-5 fs-6 fw-bold" to="/Cart">
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-bag-plus ms-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                    />
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                  </svg>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNav;
