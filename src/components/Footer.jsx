/* eslint-disable */
import React from "react"
import "../styles/App.css"
import {NavLink} from 'react-router-dom';
import spotify from "../icons/spotify.svg"


export default function Foot(props){
    return(
        <div  className="centralized flex-row jBtwn" id="app-footer" style={{}}>
            <div className="flex-column">
                <a style={{marginTop: '1rem', textDecoration: "None"}} href="https://open.spotify.com" target="_blank"><img style={{filter: "invert(1)", height: "2rem"}} src={spotify}/></a>
                <p style={{marginTop: "0.5rem"}}>©{props.year} by Esto no es una obra podcast</p>
            </div>
        </div>)
}