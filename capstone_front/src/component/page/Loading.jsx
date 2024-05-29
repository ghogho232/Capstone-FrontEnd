import React from 'react';
import '../CSS/Loading.css'; 
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useLoad } from "../controller/LoadingContext";

function Loading() {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `Loading...`;
}, []);
  const { loading, load, loaded } = useLoad();
  const navigate = useNavigate();
  return (
    <div className="loading-screen">
      <div className="loader"></div>
      <br />
      <h1>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </h1>
      {!loading && navigate('/result')} {/* 로딩 중일 때만 로딩 화면 표시 */}
    </div>

  );
}

export default Loading;
