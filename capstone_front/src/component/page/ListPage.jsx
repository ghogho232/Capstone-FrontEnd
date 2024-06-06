import React from "react";
import axios from 'axios';
import "../CSS/List.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Toolbar from "../ui/Toolbar";
import RecommendItem from "../ui/RecommendItem";
import { useLoad } from "../controller/LoadingContext";
import {useUrl} from "../controller/SetImageContext";

function ListPage() {
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState([]);
  const { loading, load, loaded } = useLoad();
  const { setUrl } = useUrl(); 
  var sentence=" ";
  

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `List`;
  }, []);


  const handleCheckboxChange = (script) => {
    const words = document.getElementById(script).value;
    console.log(words);
    // 이미 선택된 아이템인지 확인
    const isSelected = selectedItems.includes(words);
    if (isSelected) {
      // 이미 선택된 경우 선택을 해제
      setSelectedItems(selectedItems.filter(item => item !== words));
      console.log(selectedItems);
    } else {
      // 선택되지 않은 경우 선택 목록에 추가
      setSelectedItems([...selectedItems, words]);
      console.log(selectedItems);
    }
  };

  const makeSentence = () => {
    sentence = document.getElementById("inputbox").value;
    selectedItems.push(sentence);
    console.log(selectedItems);
    alert("키워드가 추가되었습니다.");
  };

  const sendSelectedItems = () => {
    load(); // 로딩 시작
    var accessToken = localStorage.getItem("token");
    axios({
      method: "POST",
      url: "http://15.165.131.15:8080/api/styling/words",
      
      data: {
        inputs: selectedItems.toString()
      },
      headers: {
        "Content-Type": "application/json",
        "accept": "*/*",
        Authorization: `Bearer ${accessToken}`
      }
    }).then((res) => {
      console.log("Selected items sent successfully:", res);
      console.log(res.data.data);
      setUrl(res.data.data);
      loaded();// 로딩 종료
      navigate('/result'); // 결과 페이지로 이동
    }).catch((err) => {
      console.error("Error sending selected items:", err);
      loaded();// 로딩 종료
    });
  };

  return (
    <div className="main">
      <Toolbar />
      <div className="title"> Pick what you want!</div>
      <form id="list" className="list">
        <table>
          <tbody>
            <tr>
              <RecommendItem
                id="op1"
                htmlFor="op1"
                src="img/keyword (1).png"
                alt="pink, cherry blossom, spring, flower"
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
                script="MZ오피스"
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
        <h4>교복, 군복, 정장, 한복 등의 정형화된 복장은 물론, 명품 브랜드나 분위기, 또는 자기 자신에 대한 묘사를 키워드로 적어도 좋아요!</h4>
        <textarea placeholder="마음에 드는 추천이 없다면, 원하는 스타일을 마음껏 적어보세요!" type="input" id="inputbox" className="inputbox" />
        <div><input type="button" value="keyword add" id="addButton" className="addbutton" onClick={makeSentence}/></div>
        <div><input type="button" value="<< PREV" id="prevButton" className="prevbutton" onClick={() => {navigate('/example')}} /></div>
        <div><input type="button" value=">> NEXT" id="nextButton" className="howtobutton" onClick={sendSelectedItems} /></div>
        {loading && navigate('/Loading')} {/* 로딩 중일 때만 로딩 화면 표시 */}
      </form>
    </div>
  );
}

export default ListPage;