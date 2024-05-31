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
            <h1 className="maintitle" style={{ fontSize: "64pt" }}> CLOTHZ </h1>
            <h2 style={{ fontSize: "16pt", color: "#840418", fontFamily: 'GmarketSansMedium', paddingBottom: "0px" }}>Try fancy, get easy!</h2>
            <p style={{ fontSize: "14pt" }}>생성형 AI를 이용하여 사용자의 이미지와 원하는 스타일을 합성한 후, 관련 상품을 구매할 수 있는 서비스입니다.</p>
            <p style={{ paddingBottom: "10px" }}>인공지능을 통해 어떤 옷이든 자유롭게 입어보세요!</p>
            <h2 style={{ fontSize: "16pt", color: "#840418", fontFamily: 'GmarketSansMedium', paddingBottom: "0px" }}>주요기능</h2>
            <p> 1. 회원 가입</p>
            <p> 2. 사용자의 스타일 키워드 입력 해석 : 인공지능을 이용하여 어떤 입력이든 이를 해석하고, 합성 결과가 잘 나올수 있도록 돕고 있어요!</p>
            <p> 3. 사용자의 이미지를 기반으로 입력된 스타일을 합성</p>
            <p> 4. 최근 유행하는 스타일 추천 : 최대 9개의 스타일을 추천 중이며, 유행이 바뀌면 언제든지 업데이트 될 수 있어요!</p>
            <p> 5. 이미지와 관련된 상품 구매 링크 연결 : 팝업을 사전에 차단 해제 해주세요!</p>
            <Button
                title='스타일 추천받기'
                onClick={() => {
                    navigate('/example');
                }}
                className='recommend'
                style={{ padding: "30px", fontSize: "30pt", fontFamily: 'Cafe24Ssurround' }}
            />
            <div style={{position: "absolute", alignItems: "center", paddingLeft:"170px"}}>
                <Header />
            </div>
        </div>
    );
}

export default MainPage;
