import React from "react";
import { redirect, useNavigate } from "react-router-dom";
import "../CSS/LogIn.css";
import Button from "../ui/Button";
import Toolbar from "../ui/Toolbar";
import { useEffect, useState } from "react";
import axios from 'axios'

function LogInPage() {
    const navigate = useNavigate();
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `Login`;
    }, []);

    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);

    const handleemail = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    };

    const handlepw = (event) => {
        event.preventDefault();
        setPassword(event.target.value);
    };
    
    const LogIN = () => {
        const input = {
            email: email,
            password: password
        }
        axios({
            method: "POST",
            url: 'http://15.165.131.15:8080/api/login',
            data: input,
        }).then(response => {
            JSON.stringify(response);
            console.log(response);
            if (response.headers.hasAuthorization) {
                var token = response.headers.getAuthorization();
                localStorage.setItem('token', token); //로컬스토리지에 저장
            }
            window.location.href = '/'; //로그인 성공시 메인페이지로 이동
        }).catch(error => {
            console.log(error);
            alert("아이디 또는 비밀번호가 틀렸습니다.");
        });
    }


    return (
        <div className="LogInBody">
            <Toolbar />
            <div className="login-wrapper">
                <h1>Login</h1>
                <table id="loginform">
                    <input type="text" id="email" onChange={handleemail} placeholder="Email" />
                    <input type="password" id="pw" onChange={handlepw} placeholder="Password" />
                    <input type="submit" onClick={LogIN} value="Login" />
                </table>

                <div className="sign-up">
                    <hr />
                    <Button
                        title="회원가입"
                        onClick={() => {
                            navigate('/RegisterPage');
                        }}
                        style={{ fontSize: "15pt", backgroundColor: "transparent", color: "black", border: "none", cursor: "pointer" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default LogInPage;