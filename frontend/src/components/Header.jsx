import { Container, Navbar, Nav } from 'react-bootstrap';
import { BiArrowFromLeft } from 'react-icons/bi';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Twitter Clone</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/login">
                <BiArrowFromLeft /> Sign In
              </Nav.Link>
              <Nav.Link href="/register">
                <BiArrowFromLeft /> Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
