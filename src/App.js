import React , { useEffect } from "react";
import "./App.css";
//IMPORTAMOS HOMESCREEN de HomeScreen.js a App.js
import HomeScreen from "./screens/HomeScreen";
//IMPORTAMOS REACT ROUTER , PARA HACER EL ENRUTAMIENTO
import { BrowserRouter as Router,  Route , Switch } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";


function App() {
    //   ("SI NO HAY USUARIO REGISTRADO NO ENTRA");
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
            dispatch(
              login({
              uid: userAuth.uid,
              email: userAuth.email,
            }));
        }else {
            dispatch(logout());
        }
    });

    return unsubscribe;
  }, [dispatch]);



    // const user = {
    //   name: "andre",
    // };
  return (
    <div className="app">
            <Router>
              {!user ? (
                <LoginScreen/>
              ): (
                <Switch>
                  <Route path="/profile">
                      <ProfileScreen />
                  </Route>
                  <Route exact path="/">
                      <HomeScreen />
                  </Route>
                </Switch>
              )}
            </Router>
    </div>
  );
}

export default App;
