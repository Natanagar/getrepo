import React, { Component } from 'react';
import Star from "./Star";
import Store from './Redux';
import ls from 'local-storage';

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
        if(!this.state.changeStarColor){ // ternary
            this.setState({
                changeStarColor : true
            })
        }   else {
            this.setState({
                changeStarColor : false
            })
        }
    }
    componentDidMount(){
            let newCounter = localStorage.getItem('counter');
            if(newCounter == 0){
                this.setState({counter: Number(newCounter),
                    oneTap : true
                })
            } else if (newCounter == 1)
            this.setState({counter: Number(newCounter),
                oneTap : false
            })
    }
    updateState = () => {
        console.log(this.state.oneTap)
            if(this.state.oneTap){
            
                this.setState({
                    counter : `${Number(this.state.counter) + 1}`,
                    buttonText : "Unstar",
                    oneTap : false
                })
                console.log(this.state.counter)
                localStorage.setItem('counter', JSON.stringify(1)) 
                
            } else {
                
                this.setState({
                    counter : `${Number(this.state.counter) - 1}`,
                    buttonText : 'Star',
                    oneTap : true
                })
                localStorage.setItem('counter', JSON.stringify(0))
            
            }
        
        
    }
    
    render(){
        const { getStar } = this.props
        const { changeStarColor, counter, buttonText } = this.state
        if(counter === 0 ){
            let newCounter = localStorage.getItem('counter')
        }
        return(
            <div className="Counter">
                
                <label className="buttons">
                    <button
                    className="rating"
                    onClick={()=>this.updateState()}//{Store('incrementAction')}//this.update.state
                    >
                    {buttonText}
                    </button>
                </label>
            <label style={{
                marginTop: "10px"
            }}>
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
            <div className="number"
            >{counter}</div>
            </div>
        )
    }
}
export default Counter;