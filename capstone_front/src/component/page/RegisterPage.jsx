import React from "react";
import "../CSS/Register.css";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Toolbar from "../ui/Toolbar";
import { useEffect } from "react";

function RegisterPage() {
    const navigate = useNavigate();
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `Register`;
    }, []);
    return (
        <div className="registerPage">
            <Toolbar />
            <div className="register-wrapper">
                <h1>Sign Up</h1>
                <a href=" "><img src="logo2.png" width={150} height={150} /></a>
            </div>
            <form>

                <form method="post" action="서버의url" id="register-form">
                    <label for="email">이메일</label>
                    <input type="email" id="email" name="email" /> @
                    <select id="emailselect">
                        <option value="first">선택</option>
                        <option value="gmail">gmail.com</option>
                        <option value="naver">naver.com</option>
                        <option value="daum">daum.net</option>
                        <option value="nate">nate.com</option>
                    </select>
                    <label htmlFor="userid" className="register-label">아이디</label>
                    <input type="text" id="Id" />
                    <label htmlFor="password" className="register-label">비밀번호</label>
                    <input type="password" id="pw" name="pw" />
                    <label htmlFor="passwordcheck" className="register-label">비밀번호 확인</label>
                    <input type="password" id="PwCheck" name="pwcheck" />
                    <label htmlFor="name" className="register-label">이름</label>
                    <input type="text" id="Name" name="name" />
                    <input type="submit" value="Sign" />
                </form>

                
            </form>
        </div>
    );
}

export default RegisterPage;
