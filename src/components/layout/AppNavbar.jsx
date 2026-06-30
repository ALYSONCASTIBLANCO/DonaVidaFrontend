import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function AppNavbar(){
    return(
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">DonaVida</Navbar.Brand>
          <Nav className="ms-auto">
              <Button href='/login' variant="info"> <i className="bi bi-person-lock"></i> Soy administrador</Button>
          </Nav>
      </Container>
    </Navbar>
    </>
    );
}