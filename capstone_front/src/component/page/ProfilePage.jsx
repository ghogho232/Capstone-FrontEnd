import React from "react";
import { useEffect, useState } from "react";
import Toolbar from "../ui/Toolbar";
import "../CSS/Profile.css";
import axios from 'axios'
import FileInput from "../ui/FileInput";

function ProfilePage() {

    //기본 정보 출력
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [reqname, setreqname] = useState("");
    const [reqpw, setreqpw] = useState("");

    //axios 설정
    axios.defaults.baseURL = "http://15.165.131.15:8080/";
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
    axios.defaults.headers.put['Content-Type'] = 'application/json';
    //var accessToken = localStorage.getItem("token");

    useEffect(() => {
        axios.get("api/users", {
        }).then(res => {
            const data = JSON.stringify(res.data);
            var out1 = data.match(/\w+@\w+\.\w+/g);
            var out2 = data.split("nickname")[1].split(":")[1].replace(/"/g, "").replace(/,/g, "").replace("images", "");
            setEmail(out1);
            setName(out2);
        }).catch(error => {
            console.log(error);
        });
    }, []);


    const showRowpw = () => {
        const row = document.getElementById('changeinfo');
        if (row.style.display === 'none') row.style.display = '';
        else row.style.display = 'none';
    }

    const showFileinput = () => {
        const row = document.getElementById('fileinput');
        if (row.style.display === 'none') row.style.display = '';
        else row.style.display = 'none';
    }

    const changeinf = (e) => {
        console.log(reqname);
        console.log(reqpw);
        axios.post("api/users", {
            nickname: reqname,
            password: reqpw
        }).then(res => {
            const row = document.getElementById('changeinfo');
            setreqname("");
            setreqpw("");
            const reqdata = JSON.stringify(res.data);
            var out = reqdata.split("nickname")[1].split(":")[1].replace(/"/g, "").replace(/,/g, "").replace("}}", "");
            setName(out);
            alert("사용자 정보가 변경되었습니다. 자동으로 로그아웃됩니다.");
            row.style.display = 'none';
            logout();
            window.location.href = "/";
        }).catch(error => {
            console.log(error);
            alert("사용자 정보 변경에 실패했습니다.");
        });
    }

    const handelreqpw = (e) => {
        setreqpw(e.target.value);
    }

    const handlereqname = (e) => {
        setreqname(e.target.value);
    }

    const change = (e) => {

    }

    const deleteacc = (e) => {
        axios.delete("api/users", {
        }).then(res => {
            alert("회원탈퇴가 완료되었습니다. 자동으로 로그아웃됩니다.");
            logout();
            window.location.href = "/";
        }).catch(error => {
            console.log(error);
            alert("회원탈퇴에 실패했습니다.");
        });
    }

    //로그아웃
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
                    <th className="email">이메일 :</th> <th style={{ fontStyle: "italic", fontSize: "16pt" }}>{email}</th>
                </tr>
                <tr>
                    <th className="name">닉네임 :</th> <th style={{ fontStyle: "italic", fontSize: "16pt" }}>{name}</th>
                </tr>
                <tr>
                    <input type="button" value="사용자 정보 변경" id="showchange" className="but1" onClick={showRowpw} />
                </tr>
                <div id="changeinfo" style={{ display: "none", border: "true" }}>
                    
                        <tr>
                            <th>변경할 닉네임 :</th> <th><input type="text" size={20} id="requestnickname" onChange={handlereqname} /></th>
                        </tr>
                        <tr>
                            <th>변경할 비밀번호 :</th> <th><input type="password" size={20} id="requestpassword" onChange={handelreqpw} /></th>
                        </tr>
                        <tr>
                            <p>닉네임은 국문 / 영문 3~20자 이내, 비밀번호는 영문/숫자/특수문자 포함 8~20자 이내로 변경해주세요.</p>
                            <p>변경하지 않는다면 현재 닉네임과 비밀번호를 그대로 적어주세요.</p>
                        </tr>
                        <input type="button" value="변경 완료" id="changepw" className="but1" onClick={changeinf} />
                    
                </div>
                <tr>
                    <input type="button" value="이미지 업로드" id="changeimg" className="but1" onClick={showFileinput} />
                    </tr>
                    <tr>
                    <div id="fileinput" style={{ display: "none" }}>
                        <FileInput />
                    </div>
                </tr>
            </table>
            <div style={{ alignContent: "space-between" }}>
                <input type="submit" value="회원탈퇴" id="changeconfirm" className="but1" onClick={deleteacc} />
                <input type="button" value="로그아웃" id="logout" className="but1" onClick={logout} />
            </div>
        </div>
    );

}

export default ProfilePage;