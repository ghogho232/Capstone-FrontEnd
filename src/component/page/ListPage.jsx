import React from "react";
import "../CSS/List.css";

function MainPage() {
  return (
    <div className = "main">
      <div className="toolbar">
        <a href="http://localhost:3000"><p>CLOTHZ</p></a>
        <a href="about:blank"><img src="img/profile.png" width={40} height={40} /></a>
      </div>
      <div className="title"> Pick what you want!</div>
      <input type = "button" value = "이미지 업로드" className="recommend" />
      <div className="list" type="form">
        <table>
          <tbody>
            <tr>
              <td>
                <li>
                  <div className="works_main">
                    <div className="works_container">
                      <input type="checkbox" id="op1" />
                      <label htmlFor="op1">
                        <img src="img/keyword (1).png" alt="Product 1" />
                      </label>
                    </div>
                    <p>봄 스타일 추천</p>
                  </div>
                </li>
              </td>
              <td>
                <li>
                  <div className="works_main">
                    <div className="works_container">
                      <input type="checkbox" id="op2" />
                      <label htmlFor="op2">
                        <img src="img/keyword (2).png" alt="Product 2" />
                      </label>
                    </div>
                    <p>스트릿</p>
                  </div>
                </li>
              </td>
              <td>
                <li>
                  <div className="works_main">
                    <div className="works_container">
                      <input type="checkbox" id="op3" />
                      <label htmlFor="op3">
                        <img src="img/keyword (3).png" alt="Product 3" />
                      </label>
                    </div>
                    <p>아메카지</p>
                  </div>
                </li>
              </td>
            </tr>
            <tr>
            <td>
                <li>
                  <div className="works_main">
                    <div className="works_container">
                      <input type="checkbox" id="op4" />
                      <label htmlFor="op4">
                        <img src="img/keyword (4).png" alt="Product 4" />
                      </label>
                    </div>
                    <p>스포티</p>
                  </div>
                </li>
              </td>
              <td>
                <li>
                  <div className="works_main">
                    <div className="works_container">
                      <input type="checkbox" id="op5" />
                      <label htmlFor="op5">
                        <img src="img/keyword (5).png" alt="Product 5" />
                      </label>
                    </div>
                    <p>청량한 여름옷</p>
                  </div>
                </li>
              </td>
              <td>
                <li>
                  <div className="works_main">
                    <div className="works_container">
                      <input type="checkbox" id="op6" />
                      <label htmlFor="op6">
                        <img src="img/keyword (6).png" alt="Product 6" />
                      </label>
                    </div>
                    <p>럭비셔츠</p>
                  </div>
                </li>
              </td>
            </tr>
            <tr>
              <td>
                <li>
                  <div className="works_main">
                    <div className="works_container">
                      <input type="checkbox" id="op7" />
                      <label htmlFor="op7">
                        <img src="img/keyword (7).png" alt="Product 7" />
                      </label>
                    </div>
                    <p>톤다운</p>
                  </div>
                </li>
                </td>
              <td>
              <li>
                  <div className="works_main">
                    <div className="works_container">
                      <input type="checkbox" id="op8" />
                      <label htmlFor="op8">
                        <img src="img/keyword (8).png" alt="Product 8" />
                      </label>
                    </div>
                    <p>MZ 오피스</p>
                  </div>
                </li>
                </td>
              <td>
              <li>
                  <div className="works_main">
                    <div className="works_container">
                      <input type="checkbox" id="op9" />
                      <label htmlFor="op9">
                        <img src="img/keyword (9).png" alt="Product 9" />
                      </label>
                    </div>
                    <p>데일리 캐주얼</p>
                  </div>
                </li>
                </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className = "prompt"> Or..You can type it ! </div>
        <textarea placeholder="Type your keyword" type="input" className="inputbox"/>
      <div><input type="submit" value="> > > NEXT" className="nextbutton" /></div>
    </div>
  );
}

export default MainPage;
