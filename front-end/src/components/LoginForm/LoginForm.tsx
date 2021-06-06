import './LoginForm.css';
import React from 'react';
import {useHistory} from "react-router-dom";

import Button from "components/Button/Button";
import Logo from "components/Logo/Logo";
import Input from "components/Input/Input";

export type LoginFormProps = {
}

const LoginForm: React.FC<LoginFormProps> = () => {
    let history = useHistory();

    const loginAttempt = () => {
        history.push("/lobby");
    }

    return (
        <div id="LoginForm">
            <Logo width="9em"/>
            <Input type="text" />
            <Button onClick={loginAttempt} description="JOGAR"/>
        </div>
    )
};

export default LoginForm;