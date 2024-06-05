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
            <p style={{ fontSize: "14pt" }}>프로젝트 CLOTHZ는 생성형 AI를 이용하여 사용자의 이미지와 원하는 스타일을 합성한 후, 관련 상품을 즉시 구매할 수 있는 서비스입니다.</p>
            <p>CLOTHZ라는 이름은 옷(cloth)과 빠른 속도감을 뜻하는 Z를 합성하여 만든 단어예요.</p>
            <p style={{ paddingBottom:30 }}>여러분의 소중한 시간, 스타일링에 대한 고민을 인공지능을 통해 "빠르게" 덜고, "빠르게" 구매해보세요!</p>
            <h2 style={{ fontSize: "16pt", color: "#840418", fontFamily: 'GmarketSansMedium', paddingBottom: "0px" }}>주요기능</h2>
            <div>
            <img src="img/m1.png" alt="React" height={200} width={300} style={{paddingRight:30, paddingBottom:10}} />
            <img src="img/m2.png" alt="React" height={200} width={300} style={{paddingBottom:10}}/> </div>
            <div>
            <img src="img/m3.png" alt="React" height={200} width={300} style={{paddingRight:30, paddingBottom:10}} />
            <img src="img/m4.png" alt="React" height={200} width={300} style={{paddingBottom:10}}/>
            </div>
            <div>
            <img src="img/m5.png" alt="React" height={200} width={300} style={{paddingRight:30, paddingBottom:10}} />
            <img src="img/m6.png" alt="React" height={200} width={300} style={{paddingBottom:10}}/>
            </div>
            
            <img src="img/bubble1.png" alt="React" height={160} width={380} style={{paddingTop:30}}/>
            <p> 결과와 키워드를 미리 확인해보세요 !</p>
            <div style={{position: "absolute", alignItems: "center", paddingLeft:300}}>
                <Header />
            </div>
            <Button
                title='스타일 추천받기'
                onClick={() => {
                    navigate('/example');
                }}
                className='recommend'
                style={{ position:'absolute', marginTop:580, marginLeft:-175, padding:30, fontSize: "30pt", fontFamily: 'Cafe24Ssurround' }}
            />
            <p style={{ position:'absolute', marginTop:730, paddingLeft:450, paddingBottom:30, fontSize: "11pt" }}> ⓒ 2024. 전남대학교 캡스톤 프로젝트</p>
        </div>
    );
}

export default MainPage;
