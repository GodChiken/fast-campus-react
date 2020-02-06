import React from 'react';
import ReactDOM from 'react-dom';
//import emotionExample from './style/emotion/emotionExample';

//ReactDOM.render(<emotionExample/>,document.getElementById('root'));


const color = 'darkgreen';

ReactDOM.render(
    <div
        className={css`
      background-color: hotpink;
      &:hover {
        color: ${color};
      }
    `}
    >
        This has a hotpink background.
    </div>
,document.getElementById('root'));