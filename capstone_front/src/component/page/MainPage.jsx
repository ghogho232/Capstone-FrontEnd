import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../ui/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../ui/Header";
import "../CSS/Main.css";
import Toolbar from "../ui/Toolbar";
import { useEffect } from "react";

function MainPage(props) {
    const navigate = useNavigate();
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `CLOTHZ`;
    }, []);
    return (
        <div>
            <Toolbar />
            <Header />
            <p>
                메인 이미지 수정, 백과 연동 후 실제 실행 화면과 함께 서비스 설명 추가
            </p>
            <div style={{ alignContent: "space-between" }}>
                <Button
                    title='temp'
                    onClick={() => {
                        navigate('/loading');
                    }}
                    className='recommend'
                    style={{ padding: "30px", fontSize: "30pt", alignItems: "left" }}
                />

                <Button
                    title='스타일 추천받기'
                    onClick={() => {
                        navigate('/ListPage');
                    }}
                    className='recommend'
                    style={{ padding: "30px", fontSize: "30pt" }}
                />
            </div>
        </div>
    );
}

export default MainPage;
