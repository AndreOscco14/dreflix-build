import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {

    const [show, handleShow] = useState(false);

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
            <img className='nav__logo'
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' 
            alt=''/>

            {/*Imagen para los usuarios registrados (AVATARES)*/}
            <img className='nav__avatar'
            src='http://zoeice.com/assets/img/uploads/profile.png' 
            alt=''/>
        </div>


    </div>
  )
}

export default Nav