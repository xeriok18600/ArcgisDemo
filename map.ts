// 網頁參數
let params
// Layer Id 也可用 Layer Name
const layerId = '1812341376f-layer-2'

// 取得首頁傳入的 params
function getUrlParams() {
  const url = location.href
  if (url.indexOf('?') != -1) {
    params = url.split('?')[1].split('&');
    console.log(params)
  }
}

// 顯示目前 xy 多少
function setXY() {
  getUrlParams();
  const flex = document.querySelector('.flex') as HTMLElement;
  const xyText = document.createElement('h3');

  xyText.textContent = `XY: ${params[0]}`;

  flex.appendChild(xyText);
}

// 組合參數至 arcgis iframe
function setArcgisUrlParams() {
  const iframe = document.querySelector('iframe') as HTMLElement;
  iframe.setAttribute('src', `https://kyle-iis.ajgr.tw/?query=${layerId},xy,${params[0].length === 0 ? '""' : params[0]}`)
}

setXY();
setArcgisUrlParams();

