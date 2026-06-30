import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function SiteCard({data}){
  /*Notas de aprendizaje importantes: El Card.Text es solo para cuando
  se tiene un solo parrafo, si hay mas, usar un div adicional.
  */  
  return(
    <Card className='w-75 p-3'>
      <Card.Header>Si esta abierto o cerrado (esperar backend)</Card.Header>
      <Card.Body>
        <Card.Title className='fw-bold fs-3'>{data.hospital}</Card.Title>
        <div>
          <p className='mt-2 mb-2'>Tipo de Banco (pendiente de backend)</p>
          <p className='mt-2 mb-2'><i className="bi bi-geo-alt-fill card-icons"></i> {data.direccion}</p>
          <p className='mt-2 mb-2'><i className="bi bi-clock-fill card-icons"></i> {data.horario}</p>
          <p className='mt-2 mb-2'><i className="bi bi-droplet-fill card-icons"></i> Necesita con urgencia: {data.tipoSangre}</p>
        </div>
        <Card.Footer className='d-grid d-sm-flex gap-2'>
            <Button href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.direccion)}`} target="_blank" rel="noreferrer" className='ms-1 p-2 main-buttons' size="sm"><i className="bi bi-send-arrow-down-fill"></i> Cómo llegar</Button>
            <Button  href={data.telefono ? `tel:${data.telefono}` : undefined} disabled={!data.telefono} className='ms-1 secondary-buttons' size="sm"><i className="bi bi-telephone-forward-fill"></i> Llamar</Button>
            <Button href={data.url || undefined} disabled={!data.url} target='_blank' className='ms-1 secondary-buttons' size="sm"  style={!data.url ? { pointerEvents: 'none', opacity: 0.5 } : {}}><i className="bi bi-arrow-right-circle-fill"></i> Ver detalle</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
    );
}