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
    updateState = action => {
        if(action == 'increment'){
            this.setState({
                counter : this.state.counter+1
            })
        } else if(action == 'decrement' && this.state.counter > 0){
           this.setState({
               counter : this.state.counter-1
           })
        }
        
    }
    render(){
        const { getStar } = this.props
        const { changeStarColor, counter } = this.state
        return(
            <div className="Counter">
                <div className="Star">
                    <Star
                    changeStarColor={changeStarColor}
                    changeColor={this.changeColor} 
                    />
                </div>
                <label>
                    <button
                    style={{
                        fontFamily: 'Noto Serif TC',
                        fontSize : '13px',
                        fontWeight: 'bold',
                        backgroundColor : '#e6e6ff',
                        fontStyle : 'italic'
                    }}
                    onClick={()=>this.updateState('increment')}//{Store('incrementAction')}
                    >
                    Star
                    </button>
                </label>
            <label>
                <button
                    onClick={()=>this.updateState('decrement')}//Store('decrementAction')}
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