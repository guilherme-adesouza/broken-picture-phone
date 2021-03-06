import './Input.css';
import React from 'react';

export type InputProps = {
    type: string,
}

const Input: React.FC<InputProps> = ({type}) => {
    return (
        <input className="Input" type={type}/>
    )
};

export default Input;