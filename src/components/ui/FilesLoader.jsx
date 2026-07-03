import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

export default function FilesLoader(){
    return(
        <Container fluid className="mt-2 mb-2 p-3 card rounded">
            <Row className="mt-3 mb-3">
                <div className="d-flex gap-2">
                    <i className="bi bi-upload card-icons"></i>
                    <p className="card-title fw-bold">Importa puntos desde archivo</p>
                </div>
            </Row>
            {/*Aqui se usa un evento onDragOver y onDrop para trabajar el arrastre de archivos*/}
            <Row 
            className="admin-loader p-3"
            onDragOver={(e)=>e.preventDefault()}
            onDrop={(e)=>{
                   e.preventDefault();
                const file=e.dataTransfer.files[0];
                //Verificando tamano de archivo
                if(file && file.size > 5*1024*1024)
                {
                    alert("El archivo excede el límite de 5MB");
                    return
                }
                console.log(file);
            }}
            >
                <i className="bi bi-upload card-icons fs-1"></i>
                <h5>Arrastra tu archivo CSV o XLSX aquí</h5>
                <p className="admin-loader-secondary-text">o selecciónalo desde tu computadora · máx. 5 MB</p>
                <div className="d-grid justify-content-center d-sm-flex gap-2 mt-3">
                <input 
                    type="file" 
                    id="fileInput" 
                    accept=".csv,.xlsx" 
                    style={{display: 'none'}}
                    onChange={(e)=>{
                    const file=e.target.files[0];
                    //Verificando tamano de archivo
                    if(file && file.size > 5*1024*1024)
                    {
                        alert("El archivo excede el límite de 5MB");
                        return
                    }
                    console.log(file);}}/>
                    <Button className="main-buttons" onClick={()=> document.getElementById('fileInput').click()}><i className="bi bi-upload"></i> Subir archivo</Button>
                    <Button className="secondary-buttons"><i className="bi bi-download"></i> Descargar plantilla</Button>
                </div>
            </Row>
        </Container>
    );
}