import { React, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "../../data.js"; //이미지 변경은 data.js에서
import { useNavigate } from 'react-router-dom';
import Button from "../ui/Button";
import "../CSS/Toolbar.css";
import axios from 'axios';

const Toolbar = () => {
    const navigate = useNavigate();
    const tokencheck = () => {
        var tok = localStorage.getItem("token")
        if (tok !== null) window.location.href = "/profile";
        else window.location.href = "/LogInPage";
    }

    return (
        <div className="toolbar">
            <Button
                title="CLOTHZ"
                onClick={() => {
                    navigate('/');
                }}
                style={{ backgroundColor: "transparent", border: "none", cursor: "pointer" }}
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

};

export default Toolbar;