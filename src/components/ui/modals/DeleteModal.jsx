import { Button, Modal } from "react-bootstrap";
import { deleteCenter } from "../../../services/api";

//Este componente contiene el modal que elimina el centro seleccionado tomando el ID como referencia.
export default function CenterFormModal({show, center, onHide, onDelete}){
    async function handleDelete(id) {
        try {
            const response = await deleteCenter(id);
            onDelete(id)
            onHide()
        } catch (error) {
            console.error(error);
        }
    }

    return(
    <Modal show={show} onHide={onHide} contentClassName="delete-modal" centered>
        <Modal.Header className="justify-content-between" closeButton>
        <Modal.Title className="delete-modal-title">Eliminar centro</Modal.Title>
        </Modal.Header>
        <Modal.Body className="delete-modal-body">¿Estás seguro de querer eliminar este centro?</Modal.Body>
        <Modal.Footer className="d-flex gap-1">
            <Button className="secondary-buttons" onClick={onHide}>
            Cancelar
        </Button>
        {/*Necesito envolver handleDelete primero para que no haga la accion antes de hacer clic en el icono.*/}
        <Button variant="danger" onClick={() => handleDelete(center)}>
            Eliminar
        </Button>
        </Modal.Footer>
    </Modal>
    )
}
