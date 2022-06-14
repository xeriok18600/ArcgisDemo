let params
const layerId = '1812341376f-layer-2'

function getUrlParams() {
  const url = location.href
  if (url.indexOf('?') != -1) {
    params = url.split('?')[1].split('&');
    console.log(params)
  }
}


function setXY() {
  getUrlParams();
  const flex = document.querySelector('.flex') as HTMLElement;
  const xyText = document.createElement('h3');

  xyText.textContent = `XY: ${params[0]}`;

  flex.appendChild(xyText);
}

function setArcgisUrlParams() {
  const iframe = document.querySelector('iframe') as HTMLElement;
  iframe.setAttribute('src', `https://kyle-iis.ajgr.tw/?query=${layerId},xy,${params[0].length === 0 ? '""' : params[0]}`)
}

setXY();
setArcgisUrlParams();

