import React from "react";

function MainPage() {
  return (
    <div>
      <div className="toolbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p>CLOTHZ</p>
        <a href="http://smtown.com/"><img src="img/profile.png" width={40} height={40} /></a>
      </div>
      <h1 style={{ fontFamily: 'Moirai One', color: '#840418', fontSize: '40pt', textAlign: 'center' }}>Pick what you want!</h1>
      <div className="list" style={{ position: 'relative' }}>
        <table>
          <tbody>
            <tr>
              <td>
                <li>
                  <div className="works_main">
                    <div className="works_container">
                      <input type="checkbox" id="op1" />
                      <label htmlFor="op1">
                        <img src="img/ike.gif" alt="Product 1" />
                      </label>
                    </div>
                    <p>ike</p>
                  </div>
                </li>
              </td>
              <td>
                <li>
                  <div className="works_main">
                    <div className="works_container">
                      <input type="checkbox" id="op2" />
                      <label htmlFor="op2">
                        <img src="img/ike2.gif" alt="Product 2" />
                      </label>
                    </div>
                    <p>ike</p>
                  </div>
                </li>
              </td>
              <td>
                <li>
                  <div className="works_main">
                    <div className="works_container">
                      <input type="checkbox" id="op3" />
                      <label htmlFor="op3">
                        <img src="img/ike3.gif" alt="Product 3" />
                      </label>
                    </div>
                    <p>ike</p>
                  </div>
                </li>
              </td>
            </tr>
            <tr>
              <td><img src="img/ike4.gif" alt="Product 4" /></td>
              <td><img src="img/ike5.gif" alt="Product 5" /></td>
              <td><img src="img/ike5.gif" alt="Product 6" /></td>
            </tr>
            <tr>
              <td><img src="img/ike.gif" alt="Product 7" /></td>
              <td><img src="img/ike2.gif" alt="Product 8" /></td>
              <td><img src="img/ike5.gif" alt="Product 9" /></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ textAlign: 'right' }}><input type="submit" value="> > > NEXT" className="nextbutton" /></div>
    </div>
  );
}

export default MainPage;
