import React from "react";
import "../CSS/Example.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Toolbar from "../ui/Toolbar";
import Button from "../ui/Button";
import axios from 'axios';
import FileInput from "../ui/FileInput";

function ExamplePage() {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `Example`;
}, []);
  const navigate = useNavigate();
  var btnclick = 0;
  var imageData = [{
    label: "",
    alt: "",
    url: ""
  }];

  const showexample = () => {
    if(localStorage.getItem("token") === null){
      alert("로그인을 해주세요!");
      navigate('/LoginPage');
    }
    else if (btnclick === 0){
      axios.defaults.baseURL = "http://15.165.131.15:8080/";
      axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
      axios({
        url: "api/styling",
        method: 'GET',
        responseType: 'json'
      }).then((response) => {
        console.log(response.data)
        let userFullnames = response.data.data.map(function (element) {
          var param = {
            label: `${element.prompt}`,
            alt: "image",
            url: `${element.image}`,
          }
          imageData.push(param);
          console.log(imageData);
        })
      }).then(() => {
        var imgshow = document.createElement('div');
        imgshow.setAttribute("id", "imgshow");
        imgshow.setAttribute("style", "position: absolute; justify-content: center;");
        for (var i = 0; i < imageData.length; i++) {
          imgshow.innerHTML += "<img height='200px' src='" + imageData[i].url + "' /> "
            + "<p>" + imageData[i].label + "</p>";
        }
        imgshow.innerHTML += "<p> 프롬프트는 영어로, 패션 아이템을 자세히 기술할수록 결과가 정확해요. </p>";
        imgshow.innerHTML += "<p> 작성이 어려운 사용자들을 위해 추천 스타일을 준비했으니 걱정마세요! </p>";
        imgshow.innerHTML += "<h2> 4. 이제 옆의 버튼을 눌러 스타일 추천을 받아보세요! </h2>";
        document.getElementById("Display").appendChild(imgshow);
        btnclick = 1;
      })
    }
    else {
      var imgshow = document.getElementById("imgshow");
      imgshow.remove();
      imageData = [];
      btnclick = 0;
    }
  }

  return (
    <div className="howto">
      <Toolbar />
      <div className="howtotitle"> How to Use CLOTHZ ? </div>
      <p className="howto_2"> 1. 먼저 로그인해주세요 !</p>
      <Button
        title='로그인 하러가기'
        onClick={() => {  if (localStorage.getItem("token") === null) { navigate('/LoginPage'); } }}
        className='recommend'
        style={{ padding: "20px", fontSize: "10pt", alignItems: "left" }}
      />
      <p className="howto_2"> 2. 사용자의 이미지를 등록해주세요 !</p>
      <FileInput />
      <p className="howto_2"> 3. 버튼을 눌러 피팅된 이미지와 스타일 작성 예시를 확인해주세요 !</p>
      <Button
        title='예시 보기'
        onClick={showexample}
        className='recommend'
        style={{ padding: "20px", fontSize: "10pt", alignItems: "left" }}
      />
      <div className="Diplay" id="Display"> </div>
      <div><input type="button" value="> > > NEXT" className="howtobutton" onClick={() => { navigate('/ListPage'); }} /></div>
    </div>
  );
}

export default ExamplePage;