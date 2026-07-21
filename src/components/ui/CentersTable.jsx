import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
//Llamada al modal de eliminar centros
import DeleteModal from "./modals/DeleteModal"
//Llamada al frontend de la informacion de los puntos de donacion.
import { getCenters } from "../../services/api";


export default function CentersTable(){
    //Las opciones para que las renderice la tabla.
    const options = ["CENTRO", "UBICACION", "HORARIO", "NECESITA", "ACCIONES"];

    //La data se almacena aqui:
    const [mockData, setMockData] = useState([]);

    //Variables de estado para los modales de verificacion o de muestra.
    const [showDelete, setShowDelete] = useState(false);

    const handleDeleteClose = () => setShowDelete(false);
    const handleDeleteShow = () => setShowDelete(true);

    //Variable que se transfiere, ya sea si va a eliminar el centro o editarlo.
    const [selectedCenter, setSelectedCenter] = useState(null)


    //Se hace la llamada y se obtienen los datos.
    async function loadCenters() {
        try {
            const response = await getCenters();
            setMockData(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {loadCenters();}, []);

    // En CentersTable, defines qué hace cuando se confirma el delete:
    function handleDeleteConfirm(id) {
        setMockData(prev => prev.filter(center => center.id !== id));
        window.location.reload();
    }

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
                    <Button className="secondary-buttons" onClick={()=>{
                        setSelectedCenter(center.id)
                        handleDeleteShow()}}><i class="bi bi-trash-fill table-icons"></i></Button>
                </div></td>
            </tr>
           ))}
        </tbody>
        </Table>
        </Row>
        {/* Modal que aparece a la hora de eliminar: */}
        <DeleteModal show={showDelete} center={selectedCenter} onHide={handleDeleteClose} onDelete={handleDeleteConfirm}/>
    </Container>    
    );
}