import React, { useState, useEffect, useContext } from 'react';
import "../styles/Home.css"

export default function Content(props){
    return(
        <div style={{ alignContent: "center", margin: "15vh 0 5vh 0"}}>
            <div>
                <iframe style={{borderRadius:"12px", backgroundColor: "white", color:"black"}} src="https://open.spotify.com/embed/episode/3zHa2JDb9X6ZbgTM3QM7nv?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/episode/23WXf4lTazbMXMx32KSCr8?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </div>
    )
}