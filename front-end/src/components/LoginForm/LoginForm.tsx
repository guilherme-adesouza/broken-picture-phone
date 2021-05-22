import './LoginForm.css';
import React from 'react';
import Input from "../Input/Input";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

export type LoginFormProps = {
}

export const LoginForm: React.FC<LoginFormProps> = () => {
    return (
        <div id="LoginFormWrapper">
            <div id="LoginForm">
                <Logo width="9em"/>
                <Input type="text" />
                <Button onClick={() => alert('Login')} description="JOGAR"/>
            </div>
            <div id="LoginFormAddContent">
                HELLO
            </div>
        </div>
    )
};

export default LoginForm;