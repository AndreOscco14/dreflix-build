import React from 'react';
//Importamos Nav en HomeScreen.
import Nav from './Nav';
//IMPORTAMOS EL CSS DE HOMESCREEN (pagina de inicio)
import './HomeScreen.css';
//Importamos el Banner.js a HomeScreen
import Banner from './Banner';
import requests from './Request';
import Row from './Row';



function HomeScreen() {
  return (
    <div class="homeScreen">
        {/*BARRA DE NAVEGACION NAV BAR.*/}
        <Nav />
            
        {/*BANNER*/}
        <Banner />

        {/*ROW*/}
        <Row 
          title="Netflix Originals"
          fetchUrl={requests.fetchNetflix0riginals}
          isLargeRow
        />

        <Row title="Tendencia Ahora" fetchUrl={requests.fetchTrending} />
        <Row title="Mas valorados" fetchUrl={requests.fetchTopRated} />
        <Row title="Acción" fetchUrl={requests.fetchActionMovies} />
        <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Románticas" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentales" fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen;