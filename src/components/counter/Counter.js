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
        changeStarColor: false,
        buttonText : 'Star',
        oneTap : 'false'
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
    updateState = () => {
        console.log(this.state.oneTap)
        if(this.state.oneTap){
            this.setState({
                counter : `${Number(this.state.counter) + 1}`,
                buttonText : "Unstar",
                oneTap : false
            })
        } else {
            this.setState({
                counter : `${Number(this.state.counter) - 1}`,
                buttonText : 'Star',
                oneTap : true
            })
        }
        
    }
    render(){
        const { getStar } = this.props
        const { changeStarColor, counter, buttonText } = this.state
        return(
            <div className="Counter">
                
                <label>
                    <button
                    style={{
                        fontFamily: 'Noto Serif TC',
                        fontSize : '13px',
                        fontWeight: 'bold',
                        backgroundColor : '#e6e6ff',
                        fontStyle : 'italic',
                        height: '40px',
                        width : '80px'
                    }}
                    onClick={()=>this.updateState()}//{Store('incrementAction')}
                    >
                    {buttonText}
                    </button>
                </label>
            <label>
                <button
                    onClick={()=>this.updateState()}//Store('decrementAction')}
                    >
                    <div className="Star">
                        <Star
                        changeStarColor={changeStarColor}
                        changeColor={this.changeColor} 
                        />
                    </div>
                    </button>
            </label>
            <div
            style={{
                fontSize: "16px",
                color: 'grey',
                fontFamily: 'Noto Serif TC',
                fontWeight: 'bold',
                fontStyle: 'oblique',
                height: '50px'
            }}
            >{counter}</div>
            </div>
        )
    }
}
export default Counter;