import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../ui/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../ui/Header";

function MainPage(props) {
    const navigate = useNavigate();
    
    return (
        <div>
            <div class="toolbar">
            <a href="http://localhost:3000"><p>CLOTHZ</p></a>
                <a href="http://"><img src="img/profile.png" width={40} height={40} /></a>
            </div>
            <Header />
            <p>
                설명들어감
            </p>
            <div style={{ alignContent: "space-between" }}>
                <Button
                    title='스타일 추천받기'
                    onClick={() => {
                        navigate('/loading');
                    }}
                    className='recommend'
                    style={{ padding: "30px", fontSize: "30pt", alignItems: "left" }}
                />

                <Button
                    title='가상 피팅 하기'
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
