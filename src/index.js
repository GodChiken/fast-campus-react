import React from 'react'
import {render} from 'react-dom'
import './index.css';
import App from "./component/App";
import Counter from "./component/Counter";

render(<Counter/>,document.getElementById('root'));
//render(<App/>,document.getElementById('root'));