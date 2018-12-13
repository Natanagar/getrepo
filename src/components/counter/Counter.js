import React, { Component } from 'react';
import Star from "./Star"
class Counter extends Component{
    constructor(props){
        super(props)
    }
    state = {
        addRating : 0,
        minusRating : 0 
    }
    addRating = event => {
        console.log("Plus")
    }
    minusRating = event => {
        console.log("Minus")
    }

    render(){
        return(
            <div className="Counter">
            <Star 
            onclick={()=>(console.log('Stars'))}
            />
            <div className="Buttons">
            <button><i 
            style={{
                fontSize: "10px",
                paddingLeft: '10px'
            }}
            className="material-icons">add</i></button>
            <button>
                <i 
                style={{
                    fontSize: "10px"
                }}
                className="material-icons">remove</i></button>
            <button><i 
            style={{
                fontSize: "10px"
            }}
            className="material-icons">clear</i></button>
            </div>
            </div>
        )
    }
}
export default Counter;