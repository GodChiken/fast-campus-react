import {useReducer, useCallback} from 'react';

function reducer(state, action) {
    const { name, value } = action;
    switch (action.type) {
        case 'FORM_CHANGE':
            return { ...state, [name] : value };
        case 'FORM_RESET':
            const resetObject = {...state};
            resetObject.username = '';
            resetObject.email = '';
            return resetObject;
        default : throw new Error("DO NOT ANYTHING");
    }
}

export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({ type : 'FORM_CHANGE', name, value});
    },[]);

    const reset = useCallback(() => {
        dispatch({ type : 'FORM_RESET'});
    },[]);

    return [state, onChange, reset];
}
