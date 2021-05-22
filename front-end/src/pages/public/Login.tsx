import React from "react";
import LoginForm from "components/LoginForm/LoginForm";

type LoginProps = {
}

export const LoginPage: React.FC<LoginProps> = () => {
    return (
        <LoginForm/>
    )
};

export default LoginPage;