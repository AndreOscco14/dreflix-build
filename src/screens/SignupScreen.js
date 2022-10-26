import React , { useRef } from "react";
import { auth } from "../firebase";
import "./SignupScreen.css";

function SignupScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

// registrarse
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            )
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    // Iniciar sesion 
    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then ((authUser) => {
            console.log(authUser);
        }).catch((error) => alert(error.message));
    };


  return (
    <div className='signupScreen'>
        <form>
            <h1>Iniciar Sesión</h1>
            <input ref={emailRef} placeholder="Email" type="email" />
            <input ref={passwordRef}  placeholder="Contraseña" type="password" />
            <button type='submit' onClick={signIn}>Iniciar Sesión</button>

            <h4>
                <span className='signupScreen__gray'>¿Nuevo en Dreflix? </span>
                <span className='signupScreen__link' onClick={register}>Regístrate ahora</span>
            </h4>
        </form>
    </div>
  )
}

export default SignupScreen;