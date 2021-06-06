import './Button.css';
import React from 'react';

export type ButtonProps = {
    description?: string,
    onClick: () => void,
}

const Button: React.FC<ButtonProps> = ({description, onClick}) => {
    return (
        <button className="Button" onClick={onClick}>{description}</button>
    )
};

export default Button;