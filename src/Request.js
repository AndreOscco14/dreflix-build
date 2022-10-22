//Podremos almacenar en {process.env.API_KEY}
const API_KEY = "711f051088e570013ab30bed477fe8f3";

/* HACER UNA SOLICITUD PARA EXTRAER INFORMACION DE LA API DE OTRA WEB */
const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=es-ES`,
    fetchNetflix0riginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=es-ES`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,    
};

export default requests;

//https://api.themoviedb.org/3/trending/all/week?api_key=711f051088e570013ab30bed477fe8f3&language=es-ES