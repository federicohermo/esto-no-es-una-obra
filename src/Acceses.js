import React, { useState, useEffect, createContext } from "react";
import {Route, Routes, Navigate} from 'react-router-dom';
import Home from "./pages/Home.js"
import Contact from "./pages/Contact.js"
import Content from "./pages/Content.js"
import Nav from "./components/Navigator.jsx"
import Foot from "./components/Footer.jsx"
import "./styles/App.css"

export function ApplicationAccessRoutes(props){
    const AvailableRoutes =()=>{
        return(
                <Routes>
                    <Route exact path="/" element={
                            <Home year={props.year}/>}/>
                    <Route exact path="/contacto" element={
                            <Contact year={props.year}/>}/>
                    <Route exact path="/programacion" element={
                            <Content year={props.year}/>}/>
                </Routes>
        )
    }
    return(
    <>
        <header className="App-header">
            <Nav />
        </header>
        <body className="App-body">
            <AvailableRoutes />
        </body>
        <footer className="App-footer">
            <Foot year={props.year}/>
        </footer>
    </>
    ) 
}