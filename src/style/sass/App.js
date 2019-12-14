import React from 'react';
import './App.scss';
import Button from './Button';

export default function App() {
    return (
        <div className="App">
            <div className="buttons">
                <Button size="large">BUTTON</Button>
                <Button>BUTTON</Button>
                <Button size="small">BUTTON</Button>
            </div>
        </div>
    );
}