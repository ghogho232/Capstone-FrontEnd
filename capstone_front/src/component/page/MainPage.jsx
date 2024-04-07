import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../ui/Button";

function MainPage(props){
    const navigate = useNavigate();
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
                    navigate('/loading');
                }}
                className='recommend'
                style={{ padding: "30px", fontSize: "30pt" }}
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
    );
}

export default MainPage;
