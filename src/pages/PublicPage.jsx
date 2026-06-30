import { Col, Row } from "react-bootstrap";
import SiteCard from "../components/ui/SiteCard";
import mockData from "../data/mockData";
export default function PublicPage(){
    return(
        <Row xs={1}>
            {
                mockData.map((banco)=>(
                    <Col className="d-flex justify-content-center mt-1 mb-1" key={banco.id}>
                        <SiteCard data={banco}/>
                    </Col>
                ))
            }
        </Row>
    );
}