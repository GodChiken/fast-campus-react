import React, { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT' :
            return state + 1;
        case 'DECREMENT' :
            return state - 1;
        default :
            return state;
    }
}

export default function Counter() {
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({ type: 'INCREMENT' });
    };
    const onDecrease = () => {
        dispatch({ type: 'DECREMENT' });
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
}