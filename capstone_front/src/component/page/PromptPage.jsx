import React from "react";
import axios from 'axios';
import "../CSS/List.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Toolbar from "../ui/Toolbar";
import ResultPage from "./ResultPage";

function PromptPage() {
    const navigate = useNavigate();
    const [sentence, setSentence] = useState([]);
    const result = "";

    useEffect(() => {
        const titleElement = document.getElementsByTagName('title')[0];
        titleElement.innerHTML = `List`;
    }, []);


    const handleSentence = (e) => {
        setSentence(e.target.value);
    };

    // 선택된 아이템을 서버에 전송하는 함수
    const sendPrompt = () => {
        // 선택된 아이템을 서버로 전송
        var accessToken = localStorage.getItem("token");
        console.log(sentence);
        axios({
            method: "POST",
            url: "http://15.165.131.15:8080/api/styling/sentences",
            data: {
                inputs: sentence.toString()
            },
            headers: {
                "Content-Type": "application/json",
                "accept": "*/*",
                Authorization: `Bearer ${accessToken}`
            }
        }).then((res) => {
            console.log("성공", res);
            const data = JSON.stringify(res.data.data);
            console.log(data);
            let url = data.map(function (element) {result = `${element.data}`})
            console.log(result);
            //ResultPage(url);
        }).catch((err) => {
            console.error("실패", err);
        });
    };

    return (
        <div className="main">
            <Toolbar />
            <h1> Write down your own!</h1>
            <p> 예시 작성</p>
            <textarea placeholder="Type your keyword" type="input" id="inputbox" className="inputbox" onChange={handleSentence} />
            <div><input type="button" value="> > > NEXT" id="nextButton" className="howtobutton" onClick={sendPrompt} /></div>
        </div>
    );
}

export default PromptPage;