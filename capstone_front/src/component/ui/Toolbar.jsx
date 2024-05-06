import { React, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "../../data.js"; //이미지 변경은 data.js에서
import { useNavigate } from 'react-router-dom';
import Button from "../ui/Button";
import "../CSS/Toolbar.css";

const Toolbar= () => {
    const navigate = useNavigate();
    return (
        <div className="toolbar">
        <Button
            title = "CLOTHZ"
            onClick={() => {
                navigate('/');
            }}
            style={{backgroundColor: "transparent", border: "none", cursor: "pointer"}}
        />
        <Button
            title = "로그인"
            onClick={() => {
                navigate('/LogInPage');
            }}
            style={{backgroundColor: "transparent", border: "none", cursor: "pointer", fontSize: "15pt"}}
        />
        <Button
            title = < img src="img/profile.png" alt="Profile" width={40} height={40} />
            onClick={() => {
                navigate('/profile');
            }}
            style={{backgroundColor: "transparent", border: "none", cursor: "pointer"}}
        />
        </div>
    );
    
};

export default Toolbar;