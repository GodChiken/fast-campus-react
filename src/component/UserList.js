import React,{useRef} from 'react';

function User({user}) {
    return (
        <div>
            {user.username}({user.email})
        </div>
    );
}

export default function UserList() {
    const users = [
        {
            id: 1,
            username: 'godchiken',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ];
    const nextId = useRef(4);
    const onCreate = () => {
        nextId.current+=1;
    };
    return (
        <div>
            {
                users.map(user =>(
                    <User user={user} key={user.id}/>
                ))
            }
        </div>
    );
}