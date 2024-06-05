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

    const handelreqpw = (e) => {
        setreqpw(e.target.value);
    }

    const handlereqname = (e) => {
        setreqname(e.target.value);
    }

    const showRowname = () => {
        const row = document.getElementById('changename');
        if (row.style.display === 'none') row.style.display = '';
        else row.style.display = 'none';
    }

    const showRowpw = () => {
        const row = document.getElementById('changepassword');
        if (row.style.display === 'none') row.style.display = '';
        else row.style.display = 'none';
    }

    const showFileinput = () => {
        const row = document.getElementById('fileinput');
        if (row.style.display === 'none') row.style.display = '';
        else row.style.display = 'none';
    }

    const changename = (e) => {
        if (reqname.length < 3 || reqname.length > 20) {
            alert("닉네임은 3~20자 이내로 입력해주세요.");
            document.getElementById("requestnickname").value = "";
            setreqname("");
        }
        else {
            axios.post("api/users", {
                nickname: reqname,
                password: document.getElementById("currentpassword").value
            }).then(res => {
                const row = document.getElementById('changename');
                setreqname("");
                const reqdata = JSON.stringify(res.data);
                var out = reqdata.split("nickname")[1].split(":")[1].replace(/"/g, "").replace(/,/g, "").replace("}}", "");
                setName(out);
                document.getElementById("currentpassword").value = "";
                alert("닉네임이 변경되었습니다.");
                row.style.display = 'none';
            }).catch(error => {
                console.log(error);
                alert("닉네임 변경에 실패했습니다.");
            });
        }
    }

    const changepw = (e) => {
        if (reqpw.length < 8 || reqpw.length > 20) {
            alert("비밀번호는 8~20자 이내로 입력해주세요.");
            document.getElementById("requestpassword").value = "";
            setreqpw("");
        }
        else if (!reqpw.match(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{8,20}$/)) {
            alert("비밀번호는 영문/숫자/특수문자를 모두 포함하여야 합니다.");
            document.getElementById("requestpassword").value = "";
            setreqpw("");
        }
        else {
            axios.post("api/users", {
                nickname: name,
                password: reqpw
            }).then(res => {
                const row = document.getElementById('changepassword');
                alert("비밀번호가 변경되었습니다. 자동으로 로그아웃됩니다.");
                document.getElementById("currentpw").value = "";
                row.style.display = 'none';
                logout();
                window.location.href = "/";
            }).catch(error => {
                console.log(error);
                alert("비밀번호 변경에 실패했습니다.");
            });
        }
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
            <h1 style={{marginBottom:"0"}}>MY PROFILE</h1>
            <table id="this" className="profile">
                <tr>
                    <th className="email">이메일 :</th> <th style={{ fontStyle: "italic", fontSize: "16pt" }}>{email}</th>
                </tr>
                <tr>
                    <th className="name">닉네임 :</th> <th style={{ fontStyle: "italic", fontSize: "16pt" }}>{name}</th>
                    <input type="button" value="이름 변경" id="showchange" className="but1" onClick={showRowname} />
                </tr>
                <div id="changename" style={{ display: "none" }}>
                    <tr>
                    <p>닉네임은 3~20자 이내로 변경해주세요.</p>
                        <th>변경할 닉네임 :</th> <th><input type="text" size={20} id="requestnickname" onChange={handlereqname} /></th>
                    </tr>
                    <tr>
                        <th>현재 비밀번호 :</th> <th><input type="password" size={20} id="currentpassword" /></th>
                    </tr>
                    <input type="button" value="변경 완료" id="change" className="but1" onClick={changename} />
                </div>
                <tr>
                    <input type="button" value="비밀번호 변경" id="showchange" className="but1" onClick={showRowpw} />
                </tr>
                <div id="changepassword" style={{ display: "none" }}>
                    
                    <tr>
                    <p>비밀번호는 영문/숫자/특수문자 포함 8~20자 이내로 변경해주세요.</p>
                        <th>현재 비밀번호 :</th> <th><input type="password" size={20} id="currentpw" /></th>
                    </tr>
                    <tr>
                        <th>변경할 비밀번호 :</th> <th><input type="password" size={20} id="requestpassword" onChange={handelreqpw} /></th>
                    </tr>
                    <tr>
                        <input type="button" value="변경 완료" id="changepw" className="but1" onClick={changepw} />
                    </tr>
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