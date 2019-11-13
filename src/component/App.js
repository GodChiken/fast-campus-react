import React, {useReducer, useMemo} from 'react';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

const initialState = {
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

export const UserDispatch = React.createContext(null);

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {users} = state;

    const count = useMemo(() => users.filter(user => user.active).length, [users]);

    return (
        <UserDispatch.Provider value={dispatch}>
            <CreateUser/>
            <UserList users={users}/>
            <div>활성사용자 수 : {count}</div>
        </UserDispatch.Provider>
    );
}