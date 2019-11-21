import React from 'react'
import {render} from 'react-dom'
import './index.css';
import App from "./component/function/App";
import Hello from "./component/class/Hello";

//render(<App/>,document.getElementById('root'));
render(<Hello/>,document.getElementById('root'));