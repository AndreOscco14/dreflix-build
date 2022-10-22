import axios from 'axios' 

//Creamos e instanciamos axios, sirve para extraer API de otra web
 const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
 });

 export default instance;