import React from 'react'
import Wrapper from './Wrapper'
import Hello from './Hello'

export default function App() {
    return (
        <Wrapper>
            <Hello name="react" color="red" isSpecial></Hello>
            <Hello color="pink"></Hello>
        </Wrapper>
    );
}