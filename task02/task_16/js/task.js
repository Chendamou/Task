/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = document.getElementById('aqi-city-input').value.trim();
    var value = document.getElementById('aqi-value-input').value.trim();
    var p_1 = /^[a-zA-Z\u4e00-\u9fa5]+$/;
    var p_2 = /^\d+$/;
    if (!p_1.test(city)) {
        alert("城市名仅能为中英文！");
        return;
    };
    if (!p_2.test(value)) {
        alert("指数仅能为整数！");
        return;
    };

    aqiData[city] = value;

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var aTable = document.getElementById("aqi-table");
    var items = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
    for(var city in aqiData){
        items += "<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>删除</button></td></tr>"

    }
    aTable.innerHTML = city ? items : "";
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    delete aqiData[city];

    renderAqiList();
}

function init() {
    var addBtn = document.getElementById("add-btn");
    var aqiTable = document.getElementById("aqi-table");
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    addBtn.addEventListener("click", addBtnHandle);

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    aqiTable.addEventListener("click", function(event){
        if(event.target.nodeName.toLowerCase() === 'button') {
            delBtnHandle.call(null, event.target.dataset.city);
        }
    });

}

window.onload = init;
