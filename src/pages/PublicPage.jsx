import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SiteCard from "../components/ui/SiteCard";
import Hero from "../components/ui/Hero";
import Bankfilter from "../components/ui/Bankfilter";
import mockData from "../data/mockData";
export default function PublicPage(){
    const[campaigns, setCampaigns]=useState('')

    //Se filtran los tipos de sangre para que puedan ser renderizados en los botones (DEBEN TENER + o - PARA QUE SEAN DATOS NORMALIZADOS).
    //Se hace un array con Todos como parametro inicial y luego se crea una copia de los datos
    //solo con los tipos de sangre.
    const tiposValidos = ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-']
    function extraerTiposSangre(texto) {
    if (!texto || texto === 'No especificado') return []
    return tiposValidos.filter(tipo => texto.includes(tipo))
    }
    const tiposSangre = ['Todos', ...new Set(
        mockData.flatMap(banco => extraerTiposSangre(banco.tipoSangre))
    )]
    //Se establecen ciudades y estados para los dropdowns
    const estados = ['Todos', ...new Set(mockData.map(banco => banco.estado))]
    const ciudades = ['Todas', ...new Set(mockData.map(banco => banco.ciudad))]

    //Se cuentan las campanas activas a traves del campo campanas.
    const campanasActivas=mockData.filter(banco =>banco.campana !==null).length;

    //Establecemos variable de estado que contiene y actualiza los filtros que vienen desde el componente de filtros
    const [filters, setFilters]=useState({
        text: '',
        onlyCampaign: false,
        tipoSangre: 'Todos',
        estado: 'Todos',
        ciudad: 'Todas',
        tipoCentro: 'Todos'
    })

    //Funciones para actualizar filtros con los que vaya ingresando el
    //usuario.
    function handleFiltrarEstado(valor) {
    setFilters(prev => ({ ...prev, estado: valor }))
    }

    function handleFiltrarCiudad(valor) {
        setFilters(prev => ({ ...prev, ciudad: valor }))
    }

    function handleFiltrarTipoSangre(valor) {
        setFilters(prev => ({ ...prev, tipoSangre: valor }))
    }

    function handleFiltrarTipoCentro(valor) {
        setFilters(prev => ({ ...prev, tipoCentro: valor }))
    }
    function handleVerCampanas() {
    setFilters(prev => ({ ...prev, onlyCampaign: !prev.onlyCampaign }))
    }
    //Verificacion de que el filtro en el Hero funciona y actualizar valor para filtrado:
    function handleSearch(value){
        setFilters(prev => ({ ...prev, text: value }))
    }

    //Realizamos filtrado de acuerdo con lo escrito, normalizando los textos para coincidir.
    const results = mockData.filter((banco) => {
        const text = filters.text.toLowerCase()
        
        const coincideTexto =
            banco.hospital.toLowerCase().includes(text) ||
            banco.ciudad.toLowerCase().includes(text) ||
            banco.estado.toLowerCase().includes(text)

        const coincideEstado = filters.estado === 'Todos' || 
                            banco.estado === filters.estado

        const coincideCiudad = filters.ciudad === 'Todas' || 
                            banco.ciudad === filters.ciudad

        const coincideTipoSangre = filters.tipoSangre === 'Todos' || 
                            banco.tipoSangre === filters.tipoSangre ||
                            banco.tipoSangre?.includes(filters.tipoSangre)

        const coincideCampana = !filters.onlyCampaign || banco.campana !== null

        const coincideTipoCentro = filters.tipoCentro === 'Todos' ||
                                (filters.tipoCentro === 'Bancos de sangre' && banco.hospital.toLowerCase().includes('banco')) ||
                                (filters.tipoCentro === 'Hospitales' && banco.hospital.toLowerCase().includes('hospital')) ||
                                (filters.tipoCentro === 'Campañas móviles' && banco.campana !== null)

        return coincideTexto && coincideEstado && coincideCiudad && coincideTipoSangre && coincideCampana && coincideTipoCentro
    })
    return(
        <Container>
            <Row><Hero onBuscar={handleSearch}
                campanasActivas={campanasActivas}
                onVerCampanas={handleVerCampanas}
            /></Row>
            <Row>
                <Bankfilter 
                tiposSangre={tiposSangre}
                estados={estados}
                ciudades={ciudades}
                filters={filters}
                onFiltrarTipoSangre={handleFiltrarTipoSangre}
                onFiltrarEstado={handleFiltrarEstado}
                onFiltrarCiudad={handleFiltrarCiudad}
                onFiltrarTipoCentro={handleFiltrarTipoCentro}/>
            </Row>
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