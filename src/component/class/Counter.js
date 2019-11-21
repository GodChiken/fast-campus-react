import React, {Component} from 'react'

export default class Counter extends Component{

    handleIncrease = () => {
        console.log('increase');
        console.log(this);
    };

    handleDecrease = () => {
        console.log('decrease');
    };

    render() {
        return (
            <div>
                <h1>0</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
            </div>
        );
    }
}