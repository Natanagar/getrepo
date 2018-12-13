import React, { Component } from 'react';
import Star from "./Star"
class Counter extends Component{
    constructor(props){
        super(props)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    state = {
        increment : {
            amout : 1
        },
        decrement : {
            amount : 1
        },
        counter: 0 
    }
    increment = () => {
        console.log("Plus")
    }
    decrement = () => {
        console.log("Minus")
    }

    render(){
        console.log(this.decrement)
        const { counter } = this.state
        
        return(
            <div className="Counter">
            <Star 
            onClick={()=>(console.log('Stars'))}
            />
            <button
            onClick={this.increment}
            >
                <i style={{
                    fontSize: "10px",
                    paddingLeft: '10px'
                }}
                className="material-icons"
                
                >add</i>
            </button>
            <button
            onClick={this.decrement}
            ><i style={{
                fontSize: "10px"
            }}
            className="material-icons"
            >remove</i>
            </button>
            <div
            style={{
                fontSize: "16px",
                color: 'grey',
                fontFamily: 'Noto Serif TC',
                fontWeight: 'bold',
                fontStyle: 'oblique'
            }}
            >{counter}</div>
            </div>
        )
    }
}
export default Counter;