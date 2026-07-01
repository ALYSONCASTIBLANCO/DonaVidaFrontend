//Este archivo contiene el context, es decir, la columna vertebral de credenciales
//que nos permite validar que acciones puede hacer el usuario registrado y sus privilegios.
import { createContext, useState, useContext } from "react";
//El contexto en este caso es un canal de comunicacion que consume toda la plataforma
//y llega a cualquier componente sin pasar por props.
const AuthContext = createContext(null);

//Ahora, viene el provider. es el componente que contiene la informacion y todos los elementos
//pueden acceder a el.
export function AuthProvider({children}){
    //Estado real de autenticacion vive aqui
    const [token, setToken] = useState(null);

    //Cuando se inicia la sesion, guarda el token
    function login(tokenReceived){
        setToken(tokenReceived);
    }

    //Cuando cierro sesion:
    function logout(){
        setToken(null);
    }

    //Lo que el provider comparte con todos sus hijos o componentes que la contienen:
    const value = {
        token,
        isAuthenticated: token !==null,
        login,
        logout
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

//Usamos esta funcion adicional para evitar hacer multiples llamados a cada rato del Context.
export function useAuth(){
    return useContext(AuthContext);
}