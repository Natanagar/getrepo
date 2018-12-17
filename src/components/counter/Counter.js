import React, { Component } from 'react';
import Star from "./Star";
import Store from './Redux'

class Counter extends Component{
    constructor(props){
        super(props)
        this.changeColor = this.changeColor.bind(this);
        this.updateState = this.updateState.bind(this);
    }
    state={
        counter: 0,
        changeStarColor: false
    }
    changeColor = event => {
        if(!this.state.changeStarColor){
            this.setState({
                changeStarColor : true
            })
        }   else {
            this.setState({
                changeStarColor : false
            })
        }
    }
    updateState = (actions)=> {
        if(actions = 'incrementAction'){
            {Store('incrementAction')}
        } else {
            {Store('decrementAction')}
        }
    }
    render(){
        const { changeStarColor, counter } = this.state
        return(
            <div className="Counter">
            <Star
            changeStarColor={changeStarColor}
            changeColor={this.changeColor} 
            />
            <label>
                <button
                onClick={this.updateState}//{Store('incrementAction')}
                >
                    <i style={{
                        fontSize: "10px",
                        paddingLeft: '10px'
                    }}
                    className="material-icons"
                    
                    >add</i>
                </button>
            </label>
            <label>
                <button
                    onClick={this.updateState}//Store('decrementAction')}
                    ><i style={{
                        fontSize: "10px"
                    }}
                    className="material-icons"
                    >remove</i>
                    </button>
            </label>
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