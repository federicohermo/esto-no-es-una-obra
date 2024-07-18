/* eslint-disable */
import React from "react"
import "../styles/App.css"
import "../styles/Home.css"
import "../styles/Header.css"
import {NavLink} from 'react-router-dom';


export default function Nav(props){
    return(
        <div  className="centralized flex-row jBtwn" id="app-header" style={{height:'4rem', maxHeight:'8vh', display: "flex", justifyContent: "space-between", width: "100vw"}}>
          <NavLink className="nav-text" style={{marginLeft: "3rem"}} to="/">Esto no es una obra</NavLink>
          <span>   
            <NavLink className="nav-text" to="/programacion">Programación</NavLink> 
            <NavLink className="nav-button nav-text" to="/contacto">Contactanos</NavLink>
          </span>
        </div>)
}
        