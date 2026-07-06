//Este archivo contiene el context, es decir, la columna vertebral de credenciales
//que nos permite validar que acciones puede hacer el usuario registrado y sus privilegios.
import { createContext, useState, useContext, useEffect } from "react";
//El contexto en este caso es un canal de comunicacion que consume toda la plataforma
//y llega a cualquier componente sin pasar por props.
const AuthContext = createContext(null);

//Ahora, viene el provider. es el componente que contiene la informacion y todos los elementos
//pueden acceder a el.
export function AuthProvider({children}){
    //Estado real de autenticacion vive aqui
    const [token, setToken] = useState(null);

    //Necesitamos un estado intermedio para que el sistema alcance
    //a verificar y pueda capturar cuando aun esta en sesion o 
    //necesita hacer verificaciones adicionales.
    const [loading, setLoading] = useState(true);

    //Cuando se inicia la sesion, guarda el token
    function login(tokenReceived){
        //Le damos  el token de sesion para que sobreviva en toda.
        //la app hasta que expire.
        localStorage.setItem("token", tokenReceived);
        setToken(tokenReceived);
    }

    //Cuando cierro sesion:
    function logout(){
        //Remuevo el token cuando ya no se usa
        localStorage.removeItem("token");
        setToken(null);
    }

    //Lo que el provider comparte con todos sus hijos o componentes que la contienen:
    const value = {
        token,
        isAuthenticated: token !==null,
        loading,
        login,
        logout
    }
    //Usamos un useEffect para que verifique si esta autenticado y con ello, verifique el token y renderice
    //a donde tiene que renderizar.
    useEffect(() => {
    const savedToken = localStorage.getItem("token");

    if (savedToken) {
        setToken(savedToken);
    }
    //La pongo en falso para que el sistema alcance a verificar primero.
    setLoading(false);
    }, []);
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