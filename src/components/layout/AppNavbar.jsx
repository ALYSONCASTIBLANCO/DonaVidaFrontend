import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/droplet.png'

export default function AppNavbar(){
    return(
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className='fw-bold'><img src={logo} alt="DonaVida" width="24" height="24" className="me-2" />DonaVida</Navbar.Brand>
          <Nav className="ms-auto">
              <Button href='/login' className='admin-header-button'> <i className="bi bi-person-lock"></i> Soy administrador</Button>
          </Nav>
      </Container>
    </Navbar>
    </>
    );
}