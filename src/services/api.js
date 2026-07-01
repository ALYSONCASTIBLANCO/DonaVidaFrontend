import axios from 'axios'

const BASE_URL = 'https://donavida-vzla-production.up.railway.app';

//Los datos que van a la visualizacion publica se exportan aqui:
export const getCenters = () => axios.get(`${BASE_URL}/centers`)