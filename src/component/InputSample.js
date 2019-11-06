import React, {useState, useRef} from 'react'

export default function InputSample() {
    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });
    const nameInputs = useRef();
    const {name, nickname} = inputs;

    const onChange = e => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    };

    const onReset = () => {
        setInputs({
            name : '',
            nickname: ''
        });
        nameInputs.current.focus();
    };

    return (
        <div>
            <input
                name='name'
                placeholder='이름'
                onChange={onChange}
                value={name}
                ref={nameInputs}
            />
            <input
                name='nickname'
                placeholder='별명'
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name}({nickname})
            </div>
        </div>
    );
}