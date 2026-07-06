import axios from 'axios'

const BASE_URL = 'https://donavida-vzla-production.up.railway.app';
const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000
})

//Interceptor de respuestas incorrectas o fuera del 200 (pendiente para entender toda la arquitectura
// del sistema de tokens.):
/*
api.interceptors.response.use(
    response => response,
    error => {
        if(error.response.status == 401){

        }
        return Promise.reject(error);
    }
);*/

//Interceptor para cuando se necesite token de autenticacion (accesos a dashboards.)
api.interceptors.response.use((config) => {
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