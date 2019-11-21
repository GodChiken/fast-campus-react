import React, {Component} from 'react'

export default class Counter extends Component{

    constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }

    handleIncrease() {
        console.log('increase');
        console.log(this);                 // 컴포넌트 인스턴스를 가르키지 않음.
    }

    handleDecrease() {
        console.log('decrease');
    }

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