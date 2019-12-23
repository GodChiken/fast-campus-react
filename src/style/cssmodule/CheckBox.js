import React from 'react';

export default function CheckBox({ children, checked, ...rest }) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} {...rest} />
                <div>{checked ? '체크됨' : '체크 안됨'}</div>
            </label>
            <span>{children}</span>
        </div>
    );
}

