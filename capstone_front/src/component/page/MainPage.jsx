import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../ui/Button";

function MainPage(props){
    
    return (
        <div>
            <div class="toolbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p>CLOTHZ</p>
                <a href="http://"><img src="img/profile.png" width={40} height={40} /></a>
            </div>
            <div class="outer" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: 1920, height:500 }}>
                <ul class="inner">
                    <li><img class="in" src="img/ike.gif" /></li>
                    <li><img class="in" src="img/ike2.gif" /></li>
                    <li><img class="in" src="img/ike3.gif" /></li>
                    <li><img class="in" src="img/ike4.gif" /></li>
                </ul>
            </div>
            <p>
                설명들어감
            </p>
            <Button
                title='스타일 추천받기'
                onClick={() => {
                    
                }}
                className='recommend'
                style={{ padding: "30px", fontSize: "30pt" }}
            />
            <a href='/loading.html'><button class="recommend" style={{ padding: "30px", fontSize: "30pt" }}>스타일 추천받기</button></a>
            <a href='/list.html'><button class="recommend" style={{ padding: "30px", fontSize: "30pt" }}>가상 피팅 하기</button></a>
        </div>
    );
}

export default MainPage;
