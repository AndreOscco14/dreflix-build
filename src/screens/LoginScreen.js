import React, { useState } from "react";
import './LoginScreen.css';
import SignupScreen from "./SignupScreen";


function LoginScreen() {

    const [signIn, setSignIn] = useState(false);

  return (
    <div className='loginScreen'>
        <div className='loginScreen__background'>
            <img
            className='loginScreen__logo'
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""
            />
            <button onClick={() => setSignIn(true)} 
            className='loginScreen__button' >
                Iniciar Sesión
            </button>
            <div className='loginScreen__gradient'/>
        </div>
    
        <div className='loginScreen__body'>

                {signIn ? (
                    <SignupScreen/>
                ) : ( 
                <>
                <h1>Todas las películas y series que desees, y mucho más. </h1>
                <h2>Disfruta donde quieras. Cancela cuando quieras.</h2>
                <h3>¿Quieres ver algo ya? Escribe tu dirección de correo para crear una suscripción a Netflix o reactivarla.</h3>

                <div className='loginScreen__input'>
                    <form>
                        {/* <input type="email" placeholder='Dirección de correo'/>  */}
                        <button onClick={() => setSignIn(true)} 
                        className='loginScreen__getStarted'>
                            Empezar
                        </button>
                    </form>
                </div>
                </>
                )}
        </div>
    </div>
  );
}

export default LoginScreen