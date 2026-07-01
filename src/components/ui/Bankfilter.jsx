import { Container, Row, Col, Button, Dropdown, DropdownButton } from "react-bootstrap";

export default function Bankfilter({tiposSangre, 
    estados, 
    ciudades,
    filters, 
    onFiltrarTipoSangre, 
    onFiltrarEstado, 
    onFiltrarCiudad,
    onFiltrarTipoCentro
    }){
    return(
        <Container>
            <Row className="filter-container d-grid d-sm-flex gap-2">
                <Col>
                    <p className="footer-text-titles fw-bold">TIPO DE SANGRE</p>
                    <div className="d-flex flex-wrap gap-2">
                        {tiposSangre.map((tipo)=>(
                            <Button
                                key={tipo} 
                                className={`secondary-buttons ${filters.tipoSangre === tipo ? 'active' : ''}`}
                                onClick={()=>onFiltrarTipoSangre(tipo)}
                            >{tipo}</Button>
                        ))
                        }

                    </div>
                </Col>
                <Col>
                    <p className="footer-text-titles fw-bold">UBICACIÓN</p>
                    <div className="d-grid d-sm-flex gap-2">
                        <Dropdown drop="down" flip="false">
                        <Dropdown.Toggle className="secondary-buttons" id="dropdown-estados">
                            {filters.estado === 'Todos' ? 'Todos los estados' : filters.estado}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {estados.map((estado)=>(
                                <Dropdown.Item key={estado} onClick={() => onFiltrarEstado(estado)}>{estado}</Dropdown.Item>
                            ))
                            }
                        </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown drop="down" flip="false">
                        <Dropdown.Toggle className="secondary-buttons" id="dropdown-ciudades">
                            {filters.ciudad === 'Todas' ? 'Todas las ciudades' : filters.ciudad}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {ciudades.map((ciudad)=>(
                                <Dropdown.Item key={ciudad}onClick={() => onFiltrarCiudad(ciudad)}>{ciudad}</Dropdown.Item>
                            ))
                            }
                        </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </Col>
            </Row>
            <Row className="gap-2">
                <div className="d-grid d-sm-flex mt-3 mb-3">
                {['Todos', 'Bancos de sangre', 'Hospitales', 'Campañas móviles'].map((tipo) => (
                <Button
                    key={tipo}
                    className={`secondary-buttons rounded-pill ${filters.tipoCentro === tipo ? 'active' : ''}`}
                    onClick={() => onFiltrarTipoCentro(tipo)}
                >
                    {tipo === 'Campañas móviles' && <i className="bi bi-calendar-fill"></i>} {tipo}
                </Button>
                ))}
                </div>
            </Row>
        </Container>
    );
}