import React, { useState, useEffect } from 'react'
import './Banner.css';
import axios from '../../services/axios';
import requests from '../../../Request';

function Banner() {

    const[movie, setMovie] =useState([]);


    //CON ESTA FUNCION SE MOSTRARA LAS IMAGENES EN EL BANNER EN ALEATIORIO
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflix0riginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();

    }, []);

    console.log(movie);

 //Funcion que trunca o pone un limite de palabras.
    function truncate(string, n){
        return string?.length > n  ? string.substr(0, n-1) + '....':string;
    }


    
  return (

    //USAMOS EL URL DE LA PAGINA Y PODEMOS (IGUALAMOS) EN LA CONDICION "?" ,
    //La variable en la que se almacena "backdrop_path"
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.
        backdrop_path}")`,
        backgroundPosition: "center center",
    }}>
 {/*//////////////////////////////////////////////////////////////////////////////*/}
  {/*//////////////////////////////////////////////////////////////////////////////*/}


        <div className='banner__contents'>
            {/*===============Nombre de la película===============*/}
            <h1 className='banner__title'>
                {movie?.title || movie?.name ||movie?.original_name}
            </h1>
            {/*=======Botones del banner.=========*/}
            <div className='banner__buttons'>
                <button className='banner__button'>Reproducir</button>
                <button className='banner__button'>Mi lista</button>
            </div>
                 {/*===========Descripcion del banner.===========*/}
                <h1 className='banner__description'>
                 {truncate(movie?.overview,150)}
                 </h1>
        </div>

        <div className='banner--fadeBottom'/>

    </header>
  )
}

export default Banner