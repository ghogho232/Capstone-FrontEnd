import React from "react";
import "../CSS/Register.css";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Toolbar from "../ui/Toolbar";
import { useEffect } from "react";
import UploadButton from "../ui/FileInput";

function RegisterPage() {
    const navigate = useNavigate();
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `Register`;
    }, []);

    const duplicatecheck = () => {
    
        
    }

    const pwcheck = () => {
    
    }


    return (
        <div className="registerPage">
            <Toolbar />
            <div className="register-wrapper">
                <h1>Sign Up</h1>
                <UploadButton />
            </div>
            <form>
                <form method="post" action="서버의url" id="register-form">
                    <table>
                        <tr>
                            <th>
                                <label htmlfor="email" className="register-label">이메일</label> </th>
                            <td><input type="email" id="email" name="email" /> @
                                <select id="emailselect">
                                    <option value="first">선택</option>
                                    <option value="gmail">gmail.com</option>
                                    <option value="naver">naver.com</option>
                                    <option value="daum">daum.net</option>
                                    <option value="nate">nate.com</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="userid" className="register-label">아이디</label></th>
                            <td><input type="text" id="Id" className="Id" /></td>
                            <input type="button" id="duplicate" name="중복확인" value="중복확인" onClick={duplicatecheck}></input>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="name" className="register-label">이름</label></th>
                            <td><input type="text" id="Name" name="name" /></td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="password" className="register-label">비밀번호</label></th>
                            <td><input type="password" id="pw" name="pw" /></td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="passwordcheck" className="register-label">비밀번호 확인</label></th>
                            <td><input type="password" id="PwCheck" name="pwcheck" /></td>
                            <input type="button" id="checkpw" name="확인" value="확인" onClick={pwcheck}></input>
                        </tr>

                    </table>
                    <input type="submit" value="Sign" className="Sign" />
                </form>
            </form>
        </div>
    );
}

export default RegisterPage;
