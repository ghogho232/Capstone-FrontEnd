import React from "react";
import "../CSS/List.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Toolbar from "../ui/Toolbar";
import RecommendItem from "../ui/RecommendItem";
import Button from "../ui/Button";
import axios from 'axios';

function MainPage() {
  const [imgFile, setImgFile] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const imgRef = React.useRef(null);

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `List`;
  }, []);

  const handleCheckboxChange = (script) => {
    // 이미 선택된 아이템인지 확인
    const isSelected = selectedItems.includes(script);
  
    if (isSelected) {
      // 이미 선택된 경우 선택을 해제합니다.
      setSelectedItems(selectedItems.filter(item => item !== script));
    } else {
      // 선택되지 않은 경우 선택 목록에 추가합니다.
      setSelectedItems([...selectedItems, script]);
    }
  };

  // 선택된 아이템을 서버에 전송하는 함수
  const sendSelectedItems = () => {
    // 선택된 아이템을 서버로 전송하는 HTTP 요청을 수행합니다.
    var accessToken = localStorage.getItem("token");
    axios({
      method: "POST",
      url: "http://15.165.131.15:8080/api/styling/words",
      data: {
        selectedItems: selectedItems
      },
      headers: {
          "Content-Type": "application/json",
          "accept": "*/*",
          Authorization: `Bearer ${accessToken}`
      }
      }).then((res) => {
          console.log("Selected items sent successfully:", res);
      }).catch((err) => {
          console.error("Error sending selected items:", err);
      });
  };
 
  const handleButtonClick = e => {
    imgRef.current.click();
  };


  const previewImage = () => {
    if (imgRef.current && imgRef.current.files) {
      const img = imgRef.current.files[0];
      setImgFile(img);

      //이미지 미리보기 기능
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => {
        setImgFile(reader.result);
      };
    }
  };

  return (
    <div className="main">
      <Toolbar />
      <div className="title"> Pick what you want!</div>
      <React.Fragment>
        <Button
          title='이미지 업로드'
          className='recommend'
          onClick={handleButtonClick}
          style={{ padding: "20px", fontSize: "10pt", alignItems: "left" }}
        />
        <form method="post" action="url">
          <input type="file" multiple={true} id="fileUpload" ref={imgRef} onChange={previewImage} style={{ display: "none" }}></input>
        </form>
        <img
          src={imgFile ? imgFile : 'img/profile.png'}
          alt="이미지 업로드"
          style={{ width: "60px", height: "60px", objectFit: "contain" }}
        />
      </React.Fragment>
      <form id="list" className="list">
        <table>
          <tbody>
            <tr>
              <RecommendItem
                id="op1"
                htmlFor="op1"
                src="img/keyword (1).png"        
                alt="Product 1"
                script="봄 스타일 추천"      
                onChange={() => handleCheckboxChange('op1')}  
              />
              <RecommendItem
                id="op2"
                htmlFor="op2"
                src="img/keyword (2).png"
                alt="Product 2"
                script="스트릿"
                onChange={() => handleCheckboxChange('op2')}  
              />
              <RecommendItem
                id="op3"
                htmlFor="op3"
                src="img/keyword (3).png"
                alt="Product 3"
                script="아메카지"
                onChange={() => handleCheckboxChange('op3')}  
              />
            </tr>
            <tr>
              <RecommendItem
                id="op4"
                htmlFor="op4"
                src="img/keyword (4).png"
                alt="Product 4"
                script="스포티"
                onChange={() => handleCheckboxChange('op4')}  
              />
              <RecommendItem
                id="op5"
                htmlFor="op5"
                src="img/keyword (5).png"
                alt="Product 5"
                script="청량한 여름옷"
                onChange={() => handleCheckboxChange('op5')}  
              />
              <RecommendItem
                id="op6"
                htmlFor="op6"
                src="img/keyword (6).png"
                alt="Product 6"
                script="럭비셔츠"
                onChange={() => handleCheckboxChange('op6')}  
              />
            </tr>
            <tr>
              <RecommendItem
                id="op7"
                htmlFor="op7"
                src="img/keyword (7).png"
                alt="Product 7"
                script="톤다운"
                onChange={() => handleCheckboxChange('op7')}  
              />
              <RecommendItem
                id="op8"
                htmlFor="op8"
                src="img/keyword (8).png"
                alt="Product 8"
                script="MZ 오피스"
                onChange={() => handleCheckboxChange('op8')}  
              />
              <RecommendItem
                id="op9"
                htmlFor="op9"
                src="img/keyword (9).png"
                alt="Product 9"
                script="데일리 캐주얼"
                onChange={() => handleCheckboxChange('op9')}  
              />
            </tr>
          </tbody>
        </table>

        <div className="prompt"> Or..You can type it ! </div>
        <textarea placeholder="Type your keyword" type="input" className="inputbox" />
        <div><input type="button" value="> > > NEXT" id="nextButton" className="nextbutton" onClick={sendSelectedItems}/></div>
      </form>
    </div>
  );
}

export default MainPage;
