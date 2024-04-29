import React from "react";
import { useNavigate } from "react-router-dom"; 
import "../CSS/LogIn.css";
import Button from "../ui/Button";
import Toolbar from "../ui/Toolbar";
import { useEffect } from "react";

function LogInPage() {
    const navigate = useNavigate(); 
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `Login`;
    }, []);
    return (
        <div className="LogInBody">
            <Toolbar />
            <div className="login-wrapper">
                <h1>Login</h1>
                <form method="post" action="서버의url" id="login-form">
                    <input type="text" name="userName" placeholder="Email" />
                    <input type="password" name="userPassword" placeholder="Password" />

                    <input type="submit" value="Login" />
                </form>
                <div className="sign-up">
                    <hr />
                    <Button
                        title = "회원가입" 
                        onClick={() => {
                            navigate('/RegisterPage');
                        }}
                        style={{ fontSize: "15pt", backgroundColor: "transparent", color: "black", border: "none", cursor: "pointer"}}
                    />
                    
                </div>
            </div>
        </div>
    );
}

export default LogInPage;