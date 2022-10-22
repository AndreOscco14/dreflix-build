import React , { useState , useEffect } from 'react';
import axios from '../../services/axios';
import './Row.css';

//GUARDAMOS EN TITLE (SE LO ENVIAMOS A "HOMESCREEN" Y en "HS" lo relacionamos con el FETCH)
function Row({ title, fetchUrl , isLargeRow = false }) {

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]);

console.log(movies);

  return (
    // IMPRIME LAS IMAGENES DE LA API , PARA LAS COLUMNAS 
    <div className='row'>
        <h2>{title}</h2>

            {/* row_posters: es el padre de row_poster, se puede modificar (agrandar o más pequeño la fila completa) */}
        <div className='row__posters'>

            {/*  ORDENAMOS LAS IMAGENES (FUNCION DE EXTRAER IMAGENES DE LA API)
            **** CONDICION POR SI HAY ALGUNA IMAGEN MAL CARGADA */}
            {movies.map((movie) => (
                (isLargeRow && movie.poster_path) || 
                (!isLargeRow && movie.backdrop_path)) && (

                <img 
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
                }`} 
                alt={movie.name}
                />
               )
            )}
            {/* En row_poster se puede modificar las columnas unicamente de las imagenes(altura,ancho,margen) */}
        </div>
    </div>
  );
}

export default Row