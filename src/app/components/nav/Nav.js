import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    const history = useHistory();

    const transitionNavBar = () => {
        if(window.scrollY > 100) {
           handleShow(true);
        }else {
            handleShow(false)
        }
    }

    useEffect(() => {
      window.addEventListener("scroll", transitionNavBar);
      return () => window.removeEventListener('scroll',transitionNavBar);
    }, []);


  return (
    <div className={`nav ${show && "nav__black"}`}>

        {/*CONTENIDO EN BARRA DE NAVEGACIÓN*/}
        <div className='nav__contents'>

            {/*Imagen para la barra de inicio*/}
            <img 
            onClick={() => history.push("/")}
            className='nav__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
            alt=''/>

            {/*Imagen para los usuarios registrados (AVATARES)*/}
            {/* CUANDO DEMOS CLICK EN EL AVATAR TE REDIRIGE A "PROFILE" */}
            <img 
            onClick={() => history.push("/profile")}
            className="nav__avatar"
            src="http://zoeice.com/assets/img/uploads/profile.png" 
            alt=''/>
        </div>
    </div>
  )
}

export default Nav