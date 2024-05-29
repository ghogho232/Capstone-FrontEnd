import React, { useState } from 'react';
import Button from './Button';
import axios from 'axios';

function UploadButton(e) {
  const [imgFile, setImgFile] = useState("");
  const imgRef = React.useRef(null);

  //파일 상태를 저장하는 변수
  const [file, setFile] = useState(null);

  //파일 선택 시 이벤트 핸들러
  const handleFileChange = (event) => {
    //선택된 파일을 상태에 저장
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

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

  //업로드 버튼 클릭 시 이벤트 핸들러
  const handleUpload = () => {

    //선택된 파일이 없는 경우 에러
    if(localStorage.getItem("token") === null){
      alert("로그인 후 이용해주세요.");
      window.location.href = "/LoginPage";
    }
    else if (!file) {
      console.error('No file selected');
      alert("이미지를 업로드 해주세요!")
      return;
    }

    //FormData 객체 생성 및 파일 추가
    const formData = new FormData();
    formData.append('multipartFile', file);
    const accessToken = localStorage.getItem("token");

    //서버로 파일 업로드
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
            src={imgFile ? imgFile : 'img/profile.png'}
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