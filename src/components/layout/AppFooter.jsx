import { Container, Row, Col } from "react-bootstrap";
import logo from '../../assets/droplet.png'

export default function AppFooter(){
    return(
        <footer className="pt-5 pb-5">
            <Container>
                <Row xs={1} md={4} className="mb-5">
                    <Col>
                        <h5 className="text-center donavida-footer-text text-md-start"><img src={logo} alt="DonaVida" width="48" height="48" className="me-2" />DonaVida</h5>
                        <p className="footer-extra-text text-center text-md-start">Encuentra dónde donar sangre cerca de ti y ayudar a quienes más lo necesitan.</p>
                    </Col>
                    <Col>
                        <h6 className="text-uppercase fw-bold mb-3 footer-text-titles text-center text-md-start">DONAR</h6>
                        <ul className="list-unstyled">
                            <li className="text-center text-md-start"><a href="#" className="footertext">Puntos de donación</a></li>
                            <li className="text-center text-md-start"><a href="#" className="footertext">Campañas</a></li>
                            <li className="text-center text-md-start"><a href="#" className="footertext">Requisitos</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h6 className="text-uppercase fw-bold mb-3 footer-text-titles text-center text-md-start">INFORMACIÓN</h6>
                        <ul className="list-unstyled">
                            <li className="text-center text-md-start"><a href="#" className="footertext">Cómo donar</a></li>
                            <li className="text-center text-md-start"><a href="#" className="footertext">Tipos de sangre</a></li>
                            <li className="text-center text-md-start"><a href="#" className="footertext">Preguntas frecuentes</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h6 className="text-uppercase fw-bold mb-3 footer-text-titles text-center text-md-start">GESTIÓN</h6>
                        <ul className="list-unstyled">
                            <li className="text-center text-md-start"><a href="#" className="footertext">Soy un administrador</a></li>
                            <li className="text-center text-md-start"><a href="#" className="footertext">Registrar un punto</a></li>
                            <li className="text-center text-md-start"><a href="#" className="footertext">Contacto</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="mt-auto py-4 border-top footer-divider justify-content-between">
                    <Col md={6} className="footer-extra-text text-center text-md-start">© DonaVida - Build4Venezuela</Col>
                    <Col md={6} className="footer-extra-text text-center text-md-end">Cada donación puede salvar hasta tres vidas</Col>
                </Row>
            </Container>
        </footer>
    );
}