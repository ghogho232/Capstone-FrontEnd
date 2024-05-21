import axios from "axios";

axios.defaults.baseURL = "http://15.165.131.15:8080/";
axios({
  url: "api/home",
  method: 'GET',
  responseType: 'json'
}).then((response) => {
  console.log(response.data)
  let userFullnames = response.data.data.map(function (element) {
    //var url = window.URL.createObjectURL(new Blob([element.image]));
    //url = url.slice(5);
    var param = {
      label: `${element.sentence}`,
      alt: "image",
      url: `${element.image}`,
      //url: url,
    }
    imageData.push(param);
    console.log(param);
  })
})

var imageData = [
    {
      label: "지금 등록하기", //사진 위에 뜨는 글씨
      alt: "image1",
      url: "img/main_1.png",
    },
  
    {
      label: "지금 등록하기",
      alt: "image2",
      url: "img/main_2_1.png",
    },
  
    {
      label: "지금 등록하기",
      alt: "image3",
      url: "img/main_3_1.png",
    },
  
    {
      label: "지금 등록하기",
      alt: "image4",
      url: "img/main_4.png",
    },
  
    {
      label: "지금 등록하기",
      alt: "image5",
      url: "img/main_5.png",
    },
  ];
  
  export default imageData;