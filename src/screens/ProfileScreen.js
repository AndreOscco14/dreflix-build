import React from "react";
import { useSelector } from "react-redux";
import Nav from "../app/components/nav/Nav";
import { auth } from "../firebase";
import { selectUser } from "../features/userSlice";
import "./ProfileScreen.css";

function ProfileScreen() {

        const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
           <Nav/>
           <div className="profileScreen__body">
                <h1>Editar Perfil</h1>
                <div className="profileScreen__info">
                    <img 
                    src="http://zoeice.com/assets/img/uploads/profile.png"
                    alt="" 
                    />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                            {/* <h3>Planes</h3> */}
                            <button onClick={() => auth.signOut()}  className="profileScreen__signOut">Cerrar Sesión</button>
                        </div>
                    </div>
                </div>
           </div>
    </div>
  );
}

export default ProfileScreen