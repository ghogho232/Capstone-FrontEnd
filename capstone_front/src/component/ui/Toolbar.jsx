import { React, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "../../data.js"; //이미지 변경은 data.js에서
import { useNavigate } from 'react-router-dom';
import Button from "../ui/Button";
import "../CSS/Toolbar.css";
import axios from "axios";
import { useAuth } from "../controller/AuthContext";

const Toolbar = () => {
    const navigate = useNavigate();
    const { isLoggedIn, login, logout } = useAuth();

    useEffect(() => {
        const logincheck = () => {
            var tok = localStorage.getItem("token")
            if (tok !== null) {
                login(tok);
            }
        }
        logincheck();
    }, []); // 컴포넌트가 처음 렌더링 될 때 한 번만 실행


    const tokencheck = () => {
        var tok = localStorage.getItem("token")
        if (tok !== null) {
            login(tok);
            navigate('/profile');
            //window.location.href = "/profile";
        }
        else {
            logout();
            window.location.href = "/LogInPage";
        }
    }
    const sessionLogout = (e) => {
        localStorage.removeItem("token");
        logout();
        window.location.href = "/";
    }
    if (isLoggedIn) { //로그인이 되어있을 때
        return (
            <div className="toolbar">
                <Button
                    title="CLOTHZ"
                    onClick={() => {
                        navigate('/');
                    }}
                    style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", "font-size": "15pt", "font-weight": "bold", fontFamily: 'Cafe24Ssurround' }}
                />
                <Button
                    title="로그아웃"
                    onClick={() => {
                        sessionLogout();
                    }}
                    style={{ marginRight:60, backgroundColor: "transparent", border: "none", cursor: "pointer", "font-size": "14pt", fontFamily: 'GmarketSansMedium' }}
                />
                <Button
                    title=< img src="img/profile.png" alt="Profile" width={40} height={40} />
                    onClick={() => {
                        tokencheck();
                    }}
                    style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}
                />
            </div>
        );
    }
    else{ //로그인이 되어있지 않을 때
        return (
            <div className="toolbar">
                <Button
                    title="CLOTHZ"
                    onClick={() => {
                        navigate('/');
                    }}
                    style={{ backgroundColor: "transparent", border: "none", cursor: "pointer", "font-size": "15pt", "font-weight": "bold", fontFamily: 'Cafe24Ssurround' }}
                />
                <Button
                    title=< img src="img/profile.png" alt="Profile" width={40} height={40} />
                    onClick={() => {
                        tokencheck();
                    }}
                    style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}
                />
            </div>
        );
    }


};

export default Toolbar;