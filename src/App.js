import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Main from './component/page/MainPage';
import Loading from "./component/page/Loading";
import Listpage from "./component/page/ListPage";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Main />} />
          <Route path="loading" element={<Loading />} />
          <Route path="Listpage" element={<Listpage />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
