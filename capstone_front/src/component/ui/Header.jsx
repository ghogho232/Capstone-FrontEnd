import { React, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "../../data.js"; //이미지 변경은 data.js에서
import { useNavigate } from 'react-router-dom';
import Button from "../ui/Button";
import {useAuth} from "../controller/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { isLoggedIn, login, logout } = useAuth();
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  const renderSlides = imageData.map(image => (
    <div key={image.alt}>
      <img src={image.url} alt={image.alt} />

      <a href={"/RegisterPage"} className="legend" style={{fontStyle:"oblique", fontSize: "10pt", backgroundColor: "#ddd", color:"black", textDecorationLine:"None"}}>{image.label}</a> 
  </div>
  ));
  return (
    <div className="DisplayImage">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={true}
          selectedItem={imageData[currentIndex]}
          showStatus={false}
          onChange={handleChange}
          width={"800px"}>
          {renderSlides}
        </Carousel>
    </div>  
  );
};

export default Header;