import React, { useState } from 'react';
import Button from './Button';

function UploadButton(e) {
    const [imgFile, setImgFile] = useState("");
    const imgRef = React.useRef(null);

    const handleButtonClick = e => {
        imgRef.current.click();
    };

    const previewImage = () => {
        if (imgRef.current && imgRef.current.files) {
            const img = imgRef.current.files[0];
            setImgFile(img);

            //이미지 미리보기 기능
            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onload = () => {
                setImgFile(reader.result);
            };
        }
    };

    return (
        <div>
        <Button
          title='이미지 업로드'
          className='recommend'
          onClick={handleButtonClick}
          style={{ padding: "20px", fontSize: "10pt", alignItems: "left" }}
        />
        <form method="post" action="url">
          <input type="file" multiple={true} id="fileUpload" ref={imgRef} onChange={previewImage} style={{ display: "none" }}></input>
        </form>
        <img
          src={imgFile ? imgFile : 'img/profile.png'}
          alt="이미지 업로드"
          style={{ width: "60px", height: "60px", objectFit: "contain" }}
        />
        </div>
    );
}


export default UploadButton;