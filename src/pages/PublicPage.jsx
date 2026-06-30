import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SiteCard from "../components/ui/SiteCard";
import Hero from "../components/ui/Hero";
import mockData from "../data/mockData";
export default function PublicPage(){
    const [textSearch, setTextSearch] = useState('')
    const[campaigns, setCampaigns]=useState('')
    const campanasActivas=mockData.filter(banco =>banco.campana !==null).length;
    //Verificacion de que el filtro en el Hero funciona y actualizar valor para filtrado:
    function handleSearch(value){
        setTextSearch(value)
    }

    //Realizamos filtrado de acuerdo con lo escrito, normalizando los textos para coincidir.
    const results=mockData.filter((banco)=>{
        const text=textSearch.toLowerCase()
        return(
            banco.hospital.toLowerCase().includes(text) ||
            banco.ciudad.toLowerCase().includes(text) ||
            banco.estado.toLowerCase().includes(text)
        )
    })
    return(
        <Container>
            <Row><Hero onBuscar={handleSearch}
                campanasActivas={campanasActivas}
            /></Row>
            <Row xs={1}>
                {
                    results.map((banco)=>(
                        <Col className="d-flex justify-content-center mt-1 mb-1" key={banco.id}>
                            <SiteCard data={banco}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
}