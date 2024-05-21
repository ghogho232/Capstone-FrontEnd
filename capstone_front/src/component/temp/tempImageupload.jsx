import React from "react";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function FileUploadComponent() {
    //파일 상태를 저장하는 변수
    const [file, setFile] = useState(null);

    //파일 선택 시 이벤트 핸들러
    const handleFileChange = (event) => {
        //선택된 파일을 상태에 저장
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    //업로드 버튼 클릭 시 이벤트 핸들러
    const handleUpload = () => {
        //선택된 파일이 없는 경우 에러 
        if (!file) {
            console.error('No file selected');
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
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <div>
            {/* 파일 선택을 위한 input 요소 */}
            <input type="file" multiple={true} onChange={handleFileChange} />
            {/* 파일 업로드를 시작하는 버튼 */}
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default FileUploadComponent;