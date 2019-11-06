import React from 'react';

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
            email: 'godchiken@naver.com'
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
    return (
        <div>
            <User user={users[0]}/>
            <User user={users[1]}/>
            <User user={users[2]}/>
        </div>
    );
}