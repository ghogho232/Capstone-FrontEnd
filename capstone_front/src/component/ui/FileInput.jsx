import React, { useState, useRef } from 'react';
import Button from './Button';
import axios from 'axios';

function UploadButton() {
  const [imgUrl, setImgUrl] = useState("");
  const imgRef = useRef(null);

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (imgRef.current && imgRef.current.files) {
      const img = imgRef.current.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = () => {
        setImgUrl(reader.result);
      };
    }
  };

  const handleUpload = () => {
    if (!file) {
      console.error('No file selected');
      return;
    } else if (localStorage.getItem("token") === null) {
      alert("로그인 후 이용해주세요.");
      window.location.href = "/LoginPage";
      return;
    }

    const formData = new FormData();
    formData.append('images', file, {
      filename: file.name,
      contentType: file.type
    });
    const accessToken = localStorage.getItem("token");

    axios({
      method: "POST",
      url: "http://15.165.131.15:8080/api/users/images",
      data: formData,
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      console.log(res.data);
      alert("이미지 업로드 성공");
    }).catch((err) => {
      console.log(err);
      alert("이미지 업로드 실패");
    });
  };

  return (
    <div>
      <p>프로필 이미지를 눌러 이미지를 업로드한 후, 업로드 버튼을 눌러 저장하세요.</p>
      <p>처음으로 선택된 이미지만 출력되나, 선택된 모든 파일은 정상적으로 서버에 전송됩니다.</p>
      <div>
        <input type="file" multiple={true} id="fileUpload" ref={imgRef} onChange={handleFileChange} style={{ display: "none" }} />
        <label htmlFor='fileUpload'><img
            src={imgUrl ? imgUrl : 'img/profile.png'}
            alt="이미지 업로드"
            style={{ width: "50px", height: "50px", objectFit: "contain" }}
          /></label>
      </div>
      <Button
        title='이미지 업로드'
        className='recommend'
        onClick={handleUpload}
        style={{ padding: "20px", fontSize: "10pt", alignItems: "left" }}
      />
    </div>
  );
}


export default UploadButton;