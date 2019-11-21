import React from 'react'
import {render} from 'react-dom'
import './index.css';
import App from "./component/function/App";
import Hello from "./component/class/Hello";
import Counter from "./component/class/Counter";

//render(<App/>,document.getElementById('root'));
render(<Hello/>,document.getElementById('root'));
render(<Counter/>,document.getElementById('root'));
