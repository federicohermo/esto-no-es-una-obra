import React, { useState, useEffect, useContext } from 'react';
import "../styles/Home.css"
import logo from "../pictures/logo_alpha.png"

export default function Home(props){
    let bubbles = [0,1,2]
    let mult = 9

    const renderBubble = (num) => {
        return num.map((i) =>{
            return (
            <div className="flex-column" style={{zIndex: '0', position:'absolute'}}>
                {bubbles.map((val) =>
                    {return <span className='bubble' style={{backgroundColor:`rgb(84, ${val*20+i*20}, 255)`,transform: `translate(${(i*(num.length-1)-num.length)*1.5-num.length}rem, ${(val*mult)-bubbles.length+5}rem)`, position: 'absolute'}}></span>}
                )}
            </div>
            )
        })
    }
    return(
        <div className='flex-row jBtwn' style={{}}>
            {/* {renderBubble([0,1,2,3,4,5,6,7])} */}
            <div className='flex-column aCenter' style={{zIndex: '1'}}>
                {/* <img src={logo} alt='logo' style={{width: "20rem"}}/> */}
                <h1 >Traicionando a las imágenes</h1>
            </div>
        </div>
    )
}