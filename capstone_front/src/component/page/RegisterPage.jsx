import React from "react";
import "../CSS/Register.css";
import { useNavigate } from "react-router-dom";
import Toolbar from "../ui/Toolbar";
import { useEffect } from "react";
import UploadButton from "../ui/FileInput";
import axios from 'axios'

function RegisterPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `Register`;
    }, []);


    const pwcheck = () => {
        var pw = document.getElementById("pw").value;
        var pwcheck = document.getElementById("PwCheck").value;

        if (pw !== pwcheck) {
            alert("비밀번호가 일치하지 않습니다.");
            document.getElementById("pw").value = "";
            document.getElementById("PwCheck").value = "";
        }
        else {
            alert("비밀번호가 일치합니다.");
        }
    }

    const Signup = () => {

        var email = document.getElementById("email").value;
        var name = document.getElementById("name").value;
        var pw = document.getElementById("pw").value;
        var params = {
            email: email,
            nickname: name,
            password: pw
        }

        axios({
            method: "POST",
            url: 'http://15.165.131.15:8080/api/signup',
            data: {
                params
            },
        }).then((res) => {
            console.log(res);
            navigate('/LogInPage');
        }).catch(error => {
            console.log(error);
            navigate('/RegisterPage');
        });
    }


return (
    <div className="registerPage">
        <Toolbar />
        <div className="register-wrapper">
            <h1>Sign Up</h1>
            <UploadButton />
        </div>
        <table id="register-form">
            <table>
                <tr>
                    <th>
                        <label htmlFor="email" className="register-label">이메일</label> </th>
                    <td><input type="email" id="email" name="email" />
                    </td>
                </tr>

                <tr>
                    <th>
                        <label htmlFor="name" className="register-label">닉네임</label></th>
                    <td><input type="text" id="name" name="Name" placeholder="국문 / 영문 3~20자 이내" /></td>
                </tr>

                <tr>
                    <th>
                        <label htmlFor="password" className="register-label">비밀번호</label></th>
                    <td><input type="password" id="pw" name="pw" placeholder="영문/숫자/특수문자 포함 8~20자 이내"/></td>
                </tr>

                <tr>
                    <th>
                        <label htmlFor="passwordcheck" className="register-label">비밀번호 확인</label></th>
                    <td><input type="password" id="PwCheck" name="pwcheck" /></td>
                    <input type="button" id="checkpw" name="확인" value="확인" onClick={pwcheck}></input>
                </tr>

            </table>
            <input type="submit" value="Sign" onClick={Signup} className="Sign" />
        </table>

    </div>
);

}

export default RegisterPage;
