
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

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
