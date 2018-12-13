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
            <button><i className="material-icons">add</i></button>
            <button><i class="material-icons">remove</i></button>
            </div>
        )
    }
}
export default Counter;