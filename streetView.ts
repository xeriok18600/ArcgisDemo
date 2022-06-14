import { Loader } from "@googlemaps/js-api-loader"

const additionalOptions = {};


const loader = new Loader({
  apiKey: "AIzaSyCbhTriBSbCsJyKN1nkXsb7S8MHPJwRy6k",
  version: "weekly",
  ...additionalOptions,

});
let map: google.maps.Map, panorama: google.maps.StreetViewPanorama, position


loader.load().then(() => {
  position = { lat: 0, lng: 0 }
  map = new google.maps.Map(
    document.getElementById("overview") as HTMLElement,
    {
      center: position,
      zoom: 17,
    }
  );
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
  map.addListener('zoom_changed', function () {
    const nowZoom = map.getZoom();
    console.log(`Zoom: ${nowZoom}`);
  });

  map.setStreetView(panorama);
});

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

// 接到 message 要做什麼事的 function
function receiveMessage(e: any) {
  if (e.origin !== 'https://kyle-iis.ajgr.tw') {
    return false;
  }
  else {
    if (e.data.dialog) {
      position = { lat: Number(e.data.y), lng: Number(e.data.x) }
      map.setCenter(position)
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