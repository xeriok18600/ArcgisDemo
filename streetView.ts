import { Loader } from "@googlemaps/js-api-loader"

const additionalOptions = {};


const loader = new Loader({
  // 國泰提供的 Google Api Key
  apiKey: "",
  version: "weekly",
  ...additionalOptions,
});
let map: google.maps.Map, panorama: google.maps.StreetViewPanorama, position

loader.load().then(() => {
  position = { lat: 0, lng: 0 }
  // 初始化 google map overview (左下角小圖
  map = new google.maps.Map(
    document.getElementById("overview") as HTMLElement,
    {
      center: position,
      zoom: 17,
    }
  );
  // 初始化 google 街景 (大圖
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view") as HTMLElement,
    {
      position: position,
      pov: {
        heading: 34,
        pitch: 10,
      },
    }
  );
  console.log(`Zoom: ${map.getZoom()}`);
  // 監聽 zoom level 
  map.addListener('zoom_changed', function () {
    const nowZoom = map.getZoom();
    console.log(`Zoom: ${nowZoom}`);
  });
  map.setStreetView(panorama);
});

// 街景彈窗相關初始化
const modal = document.getElementById("myModal") as HTMLElement;

const span = document.getElementsByClassName("close")[0] as HTMLElement;

span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// 接收 arcgis 點擊查看街景傳上來的資料
function receiveMessage(e: any) {
  if (e.origin !== 'https://kyle-iis.ajgr.tw') {
    return false;
  }
  else {
    if (e.data.dialog) {
      // 將收到的經緯度存到 position 
      position = { lat: Number(e.data.y), lng: Number(e.data.x) }
      // 給予 map 中心點
      map.setCenter(position)
      // 給予街景定位
      panorama.setPosition(position)

      modal.style.display = "block";
    }

  }
}
// 監聽 message 事件
window.onmessage = function (e) {
  receiveMessage(e)
}


export { };