import { useReducer, useCallback } from 'react';

function reducer(state, action) {
    const { name, value } = action;
    switch (action.type) {
        case 'FORM_CHANGE':
            return { ...state, [name]: value };
        case 'FORM_RESET':
            return Object.keys(state).reduce((accumulator, currentValue) => {
                accumulator[currentValue] = '';
                return accumulator;
            }, {});
        default :
            throw new Error('DO NOT ANYTHING');
    }
}

export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        dispatch({ type: 'FORM_CHANGE', name, value });
    }, []);

    const reset = useCallback(() => {
        dispatch({ type: 'FORM_RESET' });
    }, []);

    return [state, onChange, reset];
}
