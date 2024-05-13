import React from "react";
import "../CSS/Register.css";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import Toolbar from "../ui/Toolbar";
import { useEffect } from "react";
import UploadButton from "../ui/FileInput";
import axios from 'axios';
import { useState } from "react";

const Register = () => {
    const navigate = useNavigate();


}

function RegisterPage() {
    const navigate = useNavigate();
    const [emailinput, setEmailinput] = useState("");    
    const [usernameinput, setUsernameinput] = useState("");
    const [passwordinput, setPasswordinput] = useState("");
    const [passwordcheck, setPasswordcheck] = useState("");
    const [message, setMessage] = useState("");

    const registeraxios = () => {
        axios.post(
            "http://15.165.131.15:8080/api/signup",
            {
                email: emailinput,
                nickname: usernameinput,
                password: passwordinput
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "accept": "*/*"
                }
            }
        ).then((res) => {
            console.log(res);
            alert("회원가입이 완료되었습니다. 로그인해주세요.");
            if (res.status === 200) {
                navigate("/");
            }
        }).catch((err) => {
            setMessage(err.response.data.message);
            console.log(err);
        });
    };

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
                <form id="register-form">
                    <table>
                        <tr>
                            <th>
                                <label htmlfor="email" className="register-label">이메일</label> </th>
                            <td><input type="email" id="email" name="email" 
                                onChange={(e) => {
                                        setEmailinput(e.target.value);
                                }}/> @
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
                                <label htmlFor="name" className="register-label">이름</label></th>
                            <td><input type="text" id="Name" name="name" 
                            onChange={(e) => {
                                setUsernameinput(e.target.value);
                            }}/>
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label htmlFor="password" className="register-label">비밀번호</label></th>
                            <td><input type="password" id="pw" name="pw" 
                            onChange={(e) => {
                                setPasswordinput(e.target.value);
                            }}/>
                            </td>
                        </tr>

                        {/* <tr>
                            <th>
                                <label htmlFor="passwordcheck" className="register-label">비밀번호 확인</label></th>
                            <td><input type="password" id="PwCheck" name="pwcheck" 
                            onChange={(e) => {
                                setPasswordcheck(e.target.value);
                            }}/>
                            </td>
                            <input type="button" id="checkpw" name="확인" value="확인" onClick={pwcheck}></input>
                        </tr> */}

                    </table>
                    <input type="button" value="Sign" className="Sign" onClick={registeraxios}/>
                </form>
            </form>
        </div>
    );
}

export default RegisterPage;
