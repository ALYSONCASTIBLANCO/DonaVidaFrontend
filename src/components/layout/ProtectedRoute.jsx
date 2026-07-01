//Este archivo se usa para proteger las rutas que no son de acceso publico como el panel de admins.
import{ Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext'

export default function ProtectedRoute({ children }){
    //Verificamos el estado de sesion.
    const { isAuthenticated } = useAuth();

    //Si la persona no ha iniciado sesion y desea entrar a cualquier pagina privilegiada entonces...
    if(!isAuthenticated){
        //El replace evita que cuando vaya atras, o consultar el historial del navegador, pueda acceder a la ruta.
        return <Navigate to="/login" replace />
    }

    return children;
}