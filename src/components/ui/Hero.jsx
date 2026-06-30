import { Container, Row, Col, Button} from "react-bootstrap";
import Searchbarhero from "./Searchbarhero";
import logo from '../../assets/droplet.png'

export default function Hero({onBuscar, onVerCampanas, campanasActivas}){
    return(
        <Container className="hero pt-4 pb-4">
            <Row>
                <Col className="fw-bold text-brand-red"><img src={logo} alt="DonaVida" width="24" height="24" className="me-2" />ENCUENTRA DÓNDE DONAR</Col>
            </Row>
            <Row>
               <Col><p className="hero-text-size text-brand-dark fw-bold">
                        Dona sangre, <span className="text-brand-red">salva vidas</span>
                        </p></Col>
            </Row>
            <Row>
                <Col><p className="text-brand-dark">
                    Consulta los bancos de sangre y puntos de donación cercanos: <br/> dirección, horario y qué tipos necesitan ahora mismo.
                </p></Col>
            </Row>
            <Row>
                <Searchbarhero onBuscar={onBuscar}/>
            </Row>
            <Row>
                <Col>
                    <div className="hero-campaigns-div mt-2 align-items-center">
                        <div className="d-flex gap-1">
                            <img src={logo} alt="DonaVida" width="24" height="24" className="me-2" />
                            <p>Tenemos <strong>{campanasActivas}</strong> campañas activas </p>
                        </div>
                        <Button className='main-buttons text-md-end' onClick={onVerCampanas}>
                            Consúltalas <i className="bi bi-arrow-right-circle-fill"></i>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}