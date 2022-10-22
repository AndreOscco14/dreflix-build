import React from "react";
import './App.css';

//IMPORTAMOS HOMESCREEN de HomeScreen.js a App.js
import HomeScreen from "./HomeScreen";

//IMPORTAMOS REACT ROUTER , PARA HACER EL ENRUTAMIENTO
import { BrowserRouter as Router,  Route , Switch } from "react-router-dom";


function App() {
  return (

    <div className="app">
            <Router>
                <Switch>
                {/* NUEVA RUTA CREADA: /test , http://localhost:3000/test */}
                  <Route path="/test">
                    <h1>Jaaaaaa perros</h1>
                  </Route>

                  <Route path="/">
                      <HomeScreen />
                  </Route>
                </Switch>
            </Router>
    </div>
  );
}

export default App;
