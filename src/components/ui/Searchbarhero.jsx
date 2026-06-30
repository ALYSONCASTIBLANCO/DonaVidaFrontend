import { useState } from 'react';
import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Recibe la funcion setTextoBusqueda porque esa es la que va
//a capturar alla en el Public Page.
export default function Searchbarhero({onBuscar}){
    //Usa useState para actualizar la busqueda cuando el
    //usuario da clic en buscar.
    const [textInput, setTextInput]=useState('');

    //Funcion que se ejecuta cuando hace clic en Submit
    function handleSubmit(e) {
        e.preventDefault();
        //Le envia el texto a la funcion del padre para que lo 
        //procese.
        onBuscar(textInput);
    }
    //Dentro del FormControl, colocamos value como el texto que digita
    //para usarlo luego y el onChange para que capture constantemente que
    //se digito, actualizando la variable de estado.
    return(
    <Form className='d-flex gap-1 flex-wrap align-items-center mt-3' onSubmit={handleSubmit}>
      <InputGroup className="w-50">
        <InputGroup.Text className='border border-0'>
        <i className="bi bi-geo-alt-fill card-icons"></i>
        </InputGroup.Text>
        <Form.Control type="text" 
        placeholder="Ciudad, Zona o nombre del banco..."
        value={textInput}
        onChange={(e)=>setTextInput(e.target.value)}  
        required/>
      </InputGroup>
      <Button className='main-buttons flex-shrink-0' type="submit">
        <i className="bi bi-search"></i>Buscar
      </Button>
    </Form>
    );
}