import axios from "axios";

axios.defaults.baseURL = "http://15.165.131.15:8080/";
axios({
  url: "api/home",
  method: 'GET',
  responseType: 'json'
}).then((response) => {
  console.log(response.data)
  imageData.pop();
  let userFullnames = response.data.data.map(function (element) {
    //var url = window.URL.createObjectURL(new Blob([element.image]));
    //url = url.slice(5);
    var param = {
      label: `${element.sentence}`,
      alt: "image",
      url: `${element.image}`
      //url: url,
    }
    imageData.push(param);
    //console.log(param);
  })
})

var imageData = [
    {
      label: "Loading...", //사진 위에 뜨는 글씨
      alt: "image1",
      url: "img/loading.gif",
    },
  ];
  
  export default imageData;