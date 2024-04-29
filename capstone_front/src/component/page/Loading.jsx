import React from 'react';
import '../CSS/Loading.css'; 
import { useEffect } from 'react';

function Loading() {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `Loading...`;
}, []);
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
    </div>
  );
}

export default Loading;
