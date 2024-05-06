import React from "react";
import { useState } from "react";
import Toolbar from "../ui/Toolbar";
import "../CSS/Profile.css";

function ProfilePage() {

    //DB에서 유저 정보 받아오기
    const [user, setUser] = useState({
        email: ""
        , id: ""
        , name: ""
        , password: ""
    });

    const change = (e) => {
        
    }

    return (
        <div>
            <Toolbar />
            <h1>MY PROFILE</h1>
            <table className="profile">
                <tr>
                    <th>이메일</th>
                </tr>
                <tr>
                    <th>아이디</th>
                </tr>
                <tr>
                    <th>이름</th>
                    <input type="button" value = "이름 변경" id="changename" className="but1" onClick={change} />
                </tr>
                <tr>
                    <th>비밀번호</th>
                    <input type="button" value = "비밀번호 변경" id="changepw" className="but1" onClick={change} />
                </tr>
        </table>
        <div style={{alignContent: "space-between"}}>
        <input type="submit" value = "수정 완료" id="changeconfirm" className="but1" onClick={change} />
        <input type="button" value = "로그아웃" id="logout" className="but1" onClick={change} />
        </div>
        </div>
    );

}

export default ProfilePage;