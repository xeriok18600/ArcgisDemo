const tableData = [
    {
        id: 0,
        x: '""',
        y: '""',
        xy: '""',
        address: '""'
    },
    {
        id: 1,
        x: 121.5692724,
        y: 25.03628591,
        xy: '121.56927_25.03629',
        address: '臺北市信義區松仁路97號'
    },
    {
        id: 2,
        x: 121.5679689,
        y: 25.03844388,
        xy: '121.56797_25.03844',
        address: '台北市信義區松仁路38號'
    },
    {
        id: 3,
        x: 121.5691866,
        y: 25.03692747,
        xy: '121.56919_25.03693',
        address: '台北市信義區松仁路93號'
    },
    {
        id: 4,
        x: 121.5681352,
        y: 25.03683999,
        xy: '121.56814_25.03684',
        address: '台北市信義區松仁路58號14樓'
    },
    {
        id: 5,
        x: 121.5674012,
        y: 25.03624887,
        xy: '121.56740_25.03625',
        address: '台北市信義區松壽路11號'
    },
    {
        id: 6,
        x: 121.5660102,
        y: 25.03548946,
        xy: '121.56601_25.03549',
        address: '台北市信義區松壽路12號'
    },
    {
        id: 7,
        x: 121.56608,
        y: 25.03453682,
        xy: '121.56608_25.03454',
        address: '台北市信義區松智路17號'
    },
    {
        id: 8,
        x: 121.5645511,
        y: 25.03390496,
        xy: '121.56455_25.03390',
        address: '台北市信義區信義路五段7號'
    },
    {
        id: 9,
        x: 121.5672494,
        y: 25.03531449,
        xy: '121.56725_25.03531',
        address: '台北市信義區松壽路20號'
    },
    {
        id: 10,
        x: 121.5675015,
        y: 25.03457084,
        xy: '121.56750_25.03457',
        address: '台北市信義區松仁路100號20樓'
    },
    {
        id: 11,
        x: 121.568848,
        y: 25.036171,
        xy: '121.56885_25.03617',
        address: '臺北市信義區松仁路97號'
    },
    {
        id: 12,
        x: 121.5283675,
        y: 25.0311803,
        xy: '121.52837_25.03118',
        address: '臺北市大安區金華街199巷5號'
    },
    {
        id: 13,
        x: 120.684954,
        y: 24.167152,
        xy: '120.68495_24.16715',
        address: '404台中市北區漢口路四段395號'
    },
    {
        id: 14,
        x: 120.972125,
        y: 23.966169,
        xy: '120.97213_23.96617',
        address: '545南投縣埔里鎮北環路51號'
    },
    {
        id: 15,
        x: 121.35662,
        y: 23.093711,
        xy: '121.35662_23.09371',
        address: '96142台東縣成功鎮麒麟路63號'
    },
    {
        id: 16,
        x: 121.138005,
        y: 22.755569,
        xy: '121.13801_22.75557',
        address: '950台東縣台東市正氣北路242-1號'
    },
    {
        id: 17,
        x: 120.799325,
        y: 21.945274,
        xy: '120.79933_21.94527',
        address: '946屏東縣恆春鎮墾丁路134號'
    },
    {
        id: 18,
        x: 120.74746,
        y: 22.093194,
        xy: '120.74746_22.09319',
        address: '944屏東縣車城鄉溫泉路玉泉巷2號'
    },
    {
        id: 19,
        x: 120.50963,
        y: 22.511342,
        xy: '120.50963_22.51134',
        address: 'No. 26號, 2巷, 獅子鄉屏東縣943'
    },
    {
        id: 20,
        x: 120.20867,
        y: 22.986979,
        xy: '120.20867_22.98698',
        address: '700台南市中西區大埔街47號'
    },
]



function initTableData() {
    const tbody = document.querySelector('tbody') as HTMLElement;
    tableData.forEach(ele => {
        const tr = document.createElement('tr');
        const idRow = document.createElement('td');
        idRow.innerHTML = `${ele.id}`;
        const xRow = document.createElement('td');
        xRow.innerHTML = `${ele.x}`;
        const yRow = document.createElement('td');
        yRow.innerHTML = `${ele.y}`;
        const xyRow = document.createElement('td');
        xyRow.innerHTML = `${ele.xy}`;
        const addressRow = document.createElement('td');
        addressRow.innerHTML = `${ele.address}`
        const actionRow = document.createElement('td');
        actionRow.innerHTML = `<button id=${ele.id}  class="goBtn" data-x=${ele.x} data-y=${ele.y} data-xy=${ele.xy}>前往地圖</button>`

        tr.appendChild(idRow);
        tr.appendChild(xRow);
        tr.appendChild(yRow);
        tr.appendChild(xyRow);
        tr.appendChild(addressRow);
        tr.appendChild(actionRow);
        tbody.appendChild(tr);
    });
}

function bindBtnEvent() {
    const allBtn = document.querySelectorAll('.goBtn');
    allBtn.forEach(ele => {
        ele?.addEventListener('click', () => {
            const xy = ele?.getAttribute('data-xy')
            goMap(xy)
        });
    });
}

function goMap(xy) {
    window.location.href = `map.html?${xy.indexOf('""') === -1 ? xy : ''}`;
}


initTableData()
bindBtnEvent()