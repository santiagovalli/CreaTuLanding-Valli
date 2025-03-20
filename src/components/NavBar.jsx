import CartWidget from "./CartWidget";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router";

function Navigationbar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">SmartShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/category/phones">
                Phones
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/laptops">
                Laptops
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/watches ">
                Watches
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/tablets">
                Tablets
              </NavDropdown.Item>

            </NavDropdown>

            <Nav.Link href="#pricing"> <CartWidget />   </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigationbar