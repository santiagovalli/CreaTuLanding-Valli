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
        <Navbar.Brand as={Link} to="/">BeatuyShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >

            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/category/womens-dresses">
                Dresses
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/womens-bags">
                Bags
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/womens-jewellery">
                Jewellery
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/womens-shoes">
                Shoes
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/category/womens-watches">
                Watches
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#pricing"> <CartWidget/>   </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigationbar