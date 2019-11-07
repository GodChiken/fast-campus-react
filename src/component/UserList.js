import React, {useEffect} from 'react';

function User({ user, onRemove, onToggle}) {
    useEffect(() =>{
        console.log("컴포넌트 마운트!");
        console.log(user);
        return () => {
            console.log("컴포넌트가 화면에서 사라짐");
            console.log(user);
        }
    },[user]);
    // useEffect(() =>{
    //     console.log(user);
    // });
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.username}
            </b>
            &nbsp;
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제하기</button>
        </div>
    );
}

export default function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user => (
                <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle}/>
            ))}
        </div>
    );
}