import React from "react";
import { useEffect, useState } from "react";
import Toolbar from "../ui/Toolbar";
import "../CSS/Profile.css";
import axios from 'axios'

function ProfilePage() {

    var [email, setEmail] = useState(0);
    var [nickname, setName] = useState(0);

    const handleemail = (event) => {
        event.preventDefault();
        setEmail(event.target.value);
    };

    const handlename = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };

    //토큰을 기반으로 정보를 받아와서 출력 - 구현 중
    axios.defaults.baseURL = "http://15.165.131.15:8080/";
    var accessToken = localStorage.getItem("token");
    axios.get("/api/users", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
        // console.log(response.data);
        JSON.stringify(response);
            setEmail(response.data["email"]);
            setName(response.data["nickname"]);
    }).catch(error => {
        console.log(error);
    });

    /*
        const [user, setUser] = useState([]);
        useEffect(() => {
            const apiurl = "http://15.165.131.15:8080/api"
            const endpoint = "/users"
            axios.get(apiurl + endpoint)
                .then((Response) => {
                    console.log(Response.data);
                    setUser({
                        email: Response.data.email,
                        nickname: Response.data.nickname,
                        password: Response.data.password
                    });
                }).catch((Error) => {
                    console.log(Error);
                })
        }, []);
    */

    const change = (e) => {

    }

    const logout = (e) => {
        localStorage.removeItem("token");
        window.location.href = "/LogInPage";
    }

    return (
        <div>
            <Toolbar />
            <h1>MY PROFILE</h1>
            <table id="this" className="profile">
                <tr>
                    <th className="email">이메일</th> <th onChange={handleemail}> {email}</th>
                </tr>
                <tr>
                    <th className="name">닉네임</th> <th onChange={handlename}>{nickname}</th>
                    <input type="button" value="이름 변경" id="changename" className="but1" onClick={change} />
                </tr>
                <tr>
                    <input type="button" value="비밀번호 변경" id="changepw" className="but1" onClick={change} />
                </tr>
                <tr>
                    <input type="button" value="이미지 변경" id="changeimg" className="but1" onClick={change} />
                </tr>
            </table>
            <div style={{ alignContent: "space-between" }}>
                <input type="submit" value="수정 완료" id="changeconfirm" className="but1" onClick={change} />
                <input type="button" value="로그아웃" id="logout" className="but1" onClick={logout} />
            </div>
        </div>
    );

}

export default ProfilePage;