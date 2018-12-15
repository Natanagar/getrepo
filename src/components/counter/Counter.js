import React, { Component } from 'react';
import Star from "./Star";
import Store from './Redux'

class Counter extends Component{

    state={
        counter: 0
    }
    render(){
       return(
            <div className="Counter">
            <Star 
            onClick={()=>(console.log('Stars'))}
            />
            <button
            onClick={()=>(console.log("plus"))}
            >
                <i style={{
                    fontSize: "10px",
                    paddingLeft: '10px'
                }}
                className="material-icons"
                
                >add</i>
            </button>
            <button
            onClick={()=>{console.log('minus')}}
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
            >0</div>
            </div>
        )
    }
}
export default Counter;