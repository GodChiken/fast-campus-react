import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "../hooks/useInputs";

const initialState = {
    inputs: {username: '', email: ''},
    users: [
        {id: 1, username: 'godchiken', email: 'godchiken@naver.com', active: true},
        {id: 2, username: 'tester', email: 'tester@example.com', active: false},
        {id: 3, username: 'liz', email: 'liz@example.com', active: false}
    ]
};

function reducer(state, action) {
    switch (action.type) {
        case 'CREATE_USER' :
            return {
                inputs: initialState.inputs,
                users: state.users.concat(action.user)
            };
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id ? {...user, active: !user.active} : user
                )
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id)
            };
        default :
            return state;
    }
}

export default function App() {
    const [{username, email}, onChange, reset] = useInputs(initialState.inputs);
    const [state, dispatch] = useReducer(reducer, initialState);
    const nextId = useRef(4);
    const {users} = state;

    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        });
    }, []);

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email
            }
        });
        reset();
        nextId.current++;
    }, [username, email, reset]);

    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_USER',
            id
        })
    }, []);
    const count = useMemo(() => users.filter(user => user.active).length, [users]);

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
            <div>활성사용자 수 : {count}</div>
        </>
    );
}