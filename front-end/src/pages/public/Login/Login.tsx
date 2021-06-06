import "./Login.css";
import React from "react";
import LoginForm from "components/LoginForm/LoginForm";
import Banner from "components/Banner/Banner";

type LoginProps = {
}

const LoginPage: React.FC<LoginProps> = () => {
    return (
        <div id="LoginPage" className="SplitPage">
            <LoginForm/>
            <Banner>
                Hello
            </Banner>
        </div>
    )
};

export default LoginPage;