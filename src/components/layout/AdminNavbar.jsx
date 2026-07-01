import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/droplet.png'

export default function AdminNavbar(){
    const location = useLocation()
    const [activeItem, setActiveItem] = useState(null)

    //Cuando hace clic en el boton, cierra sesion.
    const { logout } = useAuth()
    const navigate = useNavigate()
    function handleLogout() {
        logout()
        navigate('/')
    }
    return(
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/" className='fw-bold'><img src={logo} alt="DonaVida" width="24" height="24" className="me-2" />DonaVida</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="end"
            >
            <Offcanvas.Header  className='justify-content-between' closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                  Tus opciones
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>     
                <Nav className="justify-content-end flex-grow-1 pe-3 gap-1">
                    <Nav.Item><Nav.Link onClick={() => setActiveItem('donacion')} className={activeItem === 'donacion' ? 'donation-buttons-active' : ''}> <i className="bi bi-geo-alt-fill"></i> Puntos de donación</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link onClick={() => setActiveItem('usuarios')} className={activeItem === 'usuarios' ? 'donation-buttons-active' : ''}> <i className="bi bi-person-circle"></i> Usuarios</Nav.Link></Nav.Item>
                    <Button onClick={handleLogout} className='admin-header-button'> <i className="bi bi-person-lock"></i> Cerrar Sesión</Button>
                </Nav>
            </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </>
    );
}