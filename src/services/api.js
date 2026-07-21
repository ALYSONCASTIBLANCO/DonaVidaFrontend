import axios from 'axios'

const BASE_URL = 'https://donavida-vzla-production.up.railway.app';
const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
})

//Para poder manejar los errores y decirle a React que hacer cuando aparezcan
//(por ejemplo, cuando el token expira), se va a crear una funcion transmisora
//que le va a decir a React que cuando detecte un 401 producto de un vencimiento
//de token, haga logout. Pero se lo transmitimos como valor al Context para que 
//el Context actue cuando se le pida.

let unauthorizedHandler = null;

export function setUnauthorizedHandler(handler){
    unauthorizedHandler = handler;
}


//Interceptor de respuestas incorrectas o fuera del 200 (pendiente para entender toda la arquitectura
// del sistema de tokens.):
api.interceptors.response.use(
    response => response,
    error => {
        // Si el backend responde con un 401, significa que el token
    // ya no es válido (expiró o fue revocado). Si existe un
    // manejador registrado por el AuthContext, lo ejecutamos
    // para cerrar la sesión del usuario.
        if(error.response?.status === 401){
            if(unauthorizedHandler){
                unauthorizedHandler();
            }
        }
        return Promise.reject(error);
    }
);

//Interceptor para cuando se necesite token de autenticacion (accesos a dashboards.)
api.interceptors.request.use((config) => {
    //Capturamos el token (si hay) y lo dejamos en localStorage para que sobreviva al
    //refresh de la pagina.
    const token = localStorage.getItem("token");

    //Si existe el token, lo interceptamos y axios siempre lo mandara en los headers.
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

//Los datos que van a la visualizacion publica se exportan aqui:
export const getCenters = () => api.get("/centers");

//Request para el login de usuarios se encuentra aqui:
export const loginRequest = async ({ email, password }) =>{
    const { data } = await api.post("/auth/login",
        {
            email,
            password
        })
    return data.access_token;
}

//Endpoint para eliminar un centro (soft delete)
export const deleteCenter = async (id)=>{
    const { data } = await api.delete(`/centers/${id}`);
    return data;
}