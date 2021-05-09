import './LoginForm.css';
import React from 'react';
import Input from "../Input/Input";
import Button from "../Button/Button";

export type LoginFormProps = {
}

export const LoginForm: React.FC<LoginFormProps> = () => {
    return (
        <div className="LoginForm">
            <Input type="text" />
            <Button onClick={() => alert('Login')} description="JOGAR"/>
        </div>
    )
};

export default LoginForm;