import React,{useState} from 'react';

export default function InputSample() {
    const [inputs, setInputs] = useState({
       name: '',
       nickname: ''
    });

    const {name, nickname} = inputs; // 비 구조화 할당으로 값 추출 : {name: "", nickname: ""}
    console.log();
    console.log(inputs);
    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
           ...inputs, // 기존 객체를 복사후
           [name]: value //name 키를 가진 값을 value 로 변경
        });
    };
    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
    };

    return (
        <div>
            <input name="name" onChange={onChange} value={name} placeholder="이름" />
            <input name="nickname" onChange={onChange} value={nickname} placeholder="닉네임" />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}