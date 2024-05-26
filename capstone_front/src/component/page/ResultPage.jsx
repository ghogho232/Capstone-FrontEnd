import React from "react";
import "../CSS/Result.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Toolbar from "../ui/Toolbar";
import Button from "../ui/Button";
import axios from 'axios';

function ResultPage() {
    const navigate = useNavigate();
    var src = "";

    //결과이미지출력
    useEffect(() => {
        axios.defaults.baseURL = "http://15.165.131.15:8080/";
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        axios({
            url: "api/recommendation",
            method: 'GET',
            responseType: 'json'
        }).then((response) => {
            console.log(response.data)
            let userFullnames = response.data.data.map(function (element) {
                src =  `${element.image}`;
            }
        )
        }).then(() => {
            var resultshow = document.createElement('div');
            resultshow.setAttribute("id", "resultshow");
            resultshow.setAttribute("style", "position: absolute; justify-content: center;");
            resultshow.innerHTML += "<img height='300px' src='" + src + "' /> ";
            document.getElementById("resultDisplay").appendChild(resultshow);
        })
    }, []);

    //googlelens api 호출
    const showproduct = () => {
        axios.defaults.baseURL = "http://15.165.131.15:8080/";
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
        axios({
            method: "POST",
            url: "api/recommendation",
            data: {
              imgUrl: src
            },
            headers: {
              "Content-Type": "application/json",
              "accept": "*/*",
            }
        }).then((response) => {
            console.log(response.data)
        }).then(() => {
            
        })
    }

    return (
        <div className="howto">
            <Toolbar />
            <div className="howtotitle"> Check your style </div>
            <div className="resultDisplay" id="resultDisplay"> </div>
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