import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
//Llamada al frontend de la informacion de los puntos de donacion.
import { getCenters } from "../../services/api";

export default function DashboardStats(){
    //La data se almacena aqui:
    const [mockData, setMockData] = useState([]);
    //Se cuentan los puntos registrados.
    const puntosActivos=mockData.length;
    //Se cuentan las campanas activas a traves del campo campanas.
    const campanasActivas=mockData.filter(banco =>banco.campana !==null).length;

    //Se hace la llamada y se obtienen los datos.
    useEffect(() => {
        async function loadCenters() {
            try {
                const response = await getCenters();
                setMockData(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        loadCenters();
    }, []);
    return(
      <Container fluid>
        <Row xs={1} sm={2} md={2} lg={2}>
            <Col>
                <h2 className="fw-bold" style={{color: 'var(--text)'}}>Puntos de donación</h2>
                <p style={{color: 'var(--text-2)'}}>Gestiona los centros y bancos que ven las personas en la app</p>
            </Col>
            <Col className="d-flex justify-content-end flex-grow-1 gap-1 align-items-center">
                <Button className='main-buttons'> <i className="bi bi-droplet-fill"></i> Agregar punto</Button>
            </Col>
        </Row>
        <Row className="d-grid d-sm-flex gap-2 mt-3">
            <Col className="p-4 card">
                <div className="d-flex justify-content-between"><p className="card-text fw-bold">TOTAL DE PUNTOS</p><i className="bi bi-geo-alt-fill card-icons"></i></div>
                <div><h2 className="card-title fw-bold">{puntosActivos}</h2></div>
            </Col>
            <Col className="p-4 card">
                <div className="d-flex justify-content-between"><p className="card-text fw-bold">CAMPAÑAS ACTIVAS</p><i class="bi bi-calendar-fill card-icons"></i></div>
                <div><h2 className="card-title fw-bold">{campanasActivas}</h2></div>
            </Col>
        </Row>
      </Container>  
    );
}