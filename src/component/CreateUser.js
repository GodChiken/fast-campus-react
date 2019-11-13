import React, {useContext, useRef} from 'react';
import {UserDispatch} from "./App";
import useInputs from "../hooks/useInputs";

const CreateUser = () => {
    const [{username, email}, change, reset] = useInputs(initialState.inputs);
    const dispatch = useContext(UserDispatch);
    const nextId = useRef(4);
    const onCreate = () => {
        dispatch(createDispatcherProperty(nextId,username,email));
        reset();
        nextId.current++;
    };

    return (
        <div>
            <input name="username"  placeholder="계정명" onChange={change} value={username} />
            <input name="email"     placeholder="이메일" onChange={change} value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    );
};

export default React.memo(CreateUser);

const initialState = { inputs: {username: '', email: ''} };
const createDispatcherProperty = (nextId, username, email) => {
    return {
        type: 'CREATE_USER',
        user: { id: nextId.current, username, email }
    };
};