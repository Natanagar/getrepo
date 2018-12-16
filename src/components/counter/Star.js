import React, { Component } from 'react';
const Star = (props) =>{
    const hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return(
        (props.changeStarColor) ?
        <div
        onClick={props.changeColor}
        style={{
            backgroundColor : hue,
            borderRadius : '50%'
        }}
        >
            <i 
            style={{
                justifyContent: "center",
            }}
            className="material-icons">stars</i>
        </div>
        :
        <div
        onClick={props.changeColor}
        >
            <i 
            style={{
                justifyContent: "center",
                
            }}
            className="material-icons">stars</i>
        </div>
    )
}
export default Star;