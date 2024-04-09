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
      <div className="list">
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
                    <p>1</p>
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
                    <p>2</p>
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
                    <p>3</p>
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
                    <p>4</p>
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
                    <p>5</p>
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
                    <p>6</p>
                  </div>
                </li>
              </td>
            </tr>
            <tr>
              <td><img src="img/ike.gif" alt="Product 7" /></td>
              <td><img src="img/ike2.gif" alt="Product 8" /></td>
              <td><img src="img/ike5.gif" alt="Product 9" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div><input type="submit" value="> > > NEXT" className="nextbutton" /></div>
    </div>
  );
}

export default MainPage;
