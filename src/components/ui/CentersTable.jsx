import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
//Llamada al frontend de la informacion de los puntos de donacion.
import { getCenters } from "../../services/api";

export default function CentersTable(){
    //Las opciones para que las renderice la tabla.
    const options = ["CENTRO", "UBICACION", "HORARIO", "NECESITA", "ACCIONES"];

    //La data se almacena aqui:
    const [mockData, setMockData] = useState([]);

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
    <Container fluid className="mt-2 mb-2 p-3 card rounded">
        {/*console.log(mockData[1])*/}
        <Row className="mt-3 mb-3">
            <p className="card-title fw-bold">Centros registrados</p>
        </Row>
        <Row>
        <Table responsive>
        <thead>
            <tr>
            {
            options.map((option, index) => (
                <th key={index} className="fw-bold" style={{color: 'var(--text-2)'}}>{option}</th>
            ))}
            </tr>
        </thead>
        <tbody>
           {mockData.map((center) => (
            <tr key={center.id}>
                <td className="table-primary-text">{center.hospital}</td>
                <td className="table-secondary-text">{center.direccion}</td>
                <td className="table-secondary-text">{center.horario}</td>
                <td className="table-secondary-text">{center.tipoSangre}</td>
                <td><div className="d-flex gap-1">
                    <Button className="secondary-buttons"><i class="bi bi-pencil-fill table-icons"></i></Button>
                    <Button className="secondary-buttons"><i class="bi bi-trash-fill table-icons"></i></Button>
                </div></td>
            </tr>
           ))}
        </tbody>
        </Table>
        </Row>
    </Container>    
    );
}