import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SiteCard({data}){
    return(
    <Card className='w-75 p-3'>
      <Card.Header>Si esta abierto o cerrado (esperar backend)</Card.Header>
      <Card.Body>
        <Card.Title>{data.hospital}</Card.Title>
        <Card.Text>
          <p>Tipo de Banco (pendiente de backend)</p>
          <p><i className="bi bi-geo-alt-fill"></i> {data.direccion}</p>
          <p><i className="bi bi-clock-fill"></i> {data.horario}</p>
          <p><i className="bi bi-droplet-fill"></i> Necesita con urgencia: {data.tipoSangre}</p>
        </Card.Text>
        <Card.Footer className='d-grid d-sm-flex gap-2'>
            <Button href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.direccion)}`} target="_blank" rel="noreferrer" className='ms-1' variant="primary" size="sm"><i className="bi bi-send-arrow-down-fill"></i> Cómo llegar</Button>
            <Button  href={data.telefono ? `tel:${data.telefono}` : undefined} disabled={!data.telefono} className='ms-1' variant="primary" size="sm"><i className="bi bi-telephone-forward-fill"></i> Llamar</Button>
            <Button href={data.url || undefined} disabled={!data.url} target='_blank' className='ms-1' variant="primary" size="sm"  style={!data.url ? { pointerEvents: 'none', opacity: 0.5 } : {}}><i className="bi bi-arrow-right-circle-fill"></i> Ver detalle</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
    );
}