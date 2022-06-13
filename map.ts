let params
const layerId = '1812341376f-layer-2'

function getUrlParams(){
  const url = location.href
  if(url.indexOf('?')!=-1)
    {
      params = url.split('?')[1].split('&');
      console.log(params)
    }
}


function setXY(){
  getUrlParams();
    const flex = document.querySelector('.flex') as HTMLElement;
    const idText = document.createElement('h3');
    const xText = document.createElement('h3');
    const yText = document.createElement('h3');
    const xyText = document.createElement('h3');

    idText.textContent = `ID: ${params[0]}`;
    xText.textContent = `X: ${params[1]}`;
    yText.textContent = `Y: ${params[2]}`;
    xyText.textContent = `XY: ${params[3]}`;

    flex.appendChild(idText);
    flex.appendChild(xText);
    flex.appendChild(yText);
    flex.appendChild(xyText);
    
    idText.style.marginRight = '30px';
    xText.style.marginRight = '30px';
    yText.style.marginRight = '30px';
  // Access the fir
}

function setArcgisUrlParams(){
  const iframe = document.querySelector('iframe') as HTMLElement;
  iframe.setAttribute('src', `https://kyle-iis.ajgr.tw/?query=${layerId},xy,${params[3]}`)
}

setXY();
setArcgisUrlParams();

