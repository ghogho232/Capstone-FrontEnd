import React from "react";
import "../CSS/Result.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Toolbar from "../ui/Toolbar";
import Button from "../ui/Button";
import axios from 'axios';
import {useUrl} from "../controller/SetImageContext";

function ResultPage() {
    const navigate = useNavigate();
    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `Result`;
    }, []);

    const { imageUrl,setUrl } = useUrl();

    //결과이미지출력

    //googlelens api 호출
    const showproduct = () => {
        var accessToken = localStorage.getItem("token");
        axios({
            method: "POST",
            url: "http://15.165.131.15:8080/api/recommendations",
            data: {
              imgUrl: imageUrl
            },
            headers: {
              "Content-Type": "application/json",
              "accept": "*/*",
              Authorization: `Bearer ${accessToken}`
            }
        }).then((res) => {
            console.log(res.data.data.search_metadata)
            const resUrl = res.data.data.search_metadata.prettify_html_file;
            window.open(resUrl);
            
        }).catch((err) => {
            console.error("Error sending selected items:", err);
            
        });
    }

    return (
        <div className="howto">
            <Toolbar />
            <div className="howtotitle"> Check your style </div>
            <div className="resultDisplay"> {imageUrl && <img src={imageUrl} alt="Result" />}</div>
            <Button
                title='유사한 상품 보기'
                onClick={showproduct}
                className='recommend'
                style={{ padding: "20px", fontSize: "10pt", alignItems: "left" }}
            />
            <div className="productDisplay" id="productDisplay"> </div>
            <div><input type="button" value="처음으로" className="howtobutton" onClick={() => { navigate('/'); }} /></div>
        </div>
    );
}

export default ResultPage;