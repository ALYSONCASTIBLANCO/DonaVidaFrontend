import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//Insertamos el hook y lo necesario para usar el Context y la asignacion de roles.
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login(){
    //Variables de prueba, se reemplazaran cuando sea el momento.
    const ADMIN_EMAIL = 'admin@donavida.com'
    const ADMIN_PASSWORD = 'admin123' 

    //Insercion de bootstrap para validacion de formulario.
    const [validated, setValidated] = useState(false);

    //Verificacion de credenciales
    const [credentials, setCredentials]=useState({
        email: '',
        password: ''
    })

    //Creacion de estados y variables para el manejo de tokens de sesion.
    const { login } = useAuth();
    const navigate = useNavigate();

    //Uso de estado para el error cuando hay credenciales incorrectas.
    const[loginError, setLoginError] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
    event.preventDefault();
    setValidated(true);

    //Validacion de las credenciales:
    if(credentials.email === ADMIN_EMAIL && credentials.password === ADMIN_PASSWORD){
        setLoginError(false);
        //Manda token al context
        login('fake-token');
        //Redirige a admin.
        navigate('/admin');
    }
    else{
        setLoginError(true);
    }
  };

    return(
    <Container className='d-flex flex-column justify-content-center align-items-center m-3'>
    <h5 className='mb-3 login-container card-text'>Ingresa tus credenciales para acceso completo a la plataforma</h5>
    <Form className='p-3 login-container border rounded' noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className='fw-bold'>Correo Electrónico</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="ejemplo@mail.com"
            value={credentials.email}
            onChange={(e)=>setCredentials(prev=>({...prev, email: e.target.value}))} 
            required/>
            <Form.Control.Feedback type='invalid'>Verifica tu email.</Form.Control.Feedback>
        </Form.Group>    
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className='fw-bold'>Contraseña</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Digita tu contraseña" 
            value={credentials.password}
            onChange={(e)=>setCredentials(prev=>({...prev, password: e.target.value}))}            
            required/>
            <Form.Control.Feedback type='invalid'>Verifica tu contraseña.</Form.Control.Feedback>
        </Form.Group>
        <Button className='main-buttons' type="submit">
            Ingresar
        </Button>
    </Form>
    {//Enlazar mensaje de error con el formularo en caso de ser necesario.
    loginError &&(
        <p className='text-danger-mt-2'>Credenciales incorrectas. Verifica la información e intenta nuevamente.</p>
    )}
    </Container>
    );
}