//Este archivo se usa para proteger las rutas que no son de acceso publico como el panel de admins.
import{ Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'
import Spinner from 'react-bootstrap/Spinner';

export default function ProtectedRoute({ children }){
    //Verificamos el estado de sesion. Aqui, le compartimos si esta autenticado
    //y de paso le decimos si esta cargando o no antes de que tome una decision de navegacion.
    const { loading, isAuthenticated } = useAuth();

    //Le damos espera al sistema antes que decida
    if(loading){
        return <Spinner animation="grow" />;
    }
    //Si la persona no ha iniciado sesion y desea entrar a cualquier pagina privilegiada entonces...
    if(!isAuthenticated){
        //El replace evita que cuando vaya atras, o consultar el historial del navegador, pueda acceder a la ruta.
        return <Navigate to="/login" replace />
    }

    return children;
}