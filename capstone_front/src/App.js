import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Main from './component/page/MainPage';
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Main />} />

      </Routes>
  </BrowserRouter>
  );
}

export default App;
