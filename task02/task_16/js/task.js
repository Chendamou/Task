/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {
};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var getCity = document.getElementById('aqi-city-input');
    var getValue = document.getElementById('aqi-value-input');
    var city = getCity.value.trim();
    var value = getValue.value.trim();

    var pattern1 = /^[a-zA-z\u4e00-\u9fa5]+$/;
    var pattenn2 = /^[0-9]+$/;
    if (!pattern1.test(city)) {
        alert("城市名只能是中英文！");
        return;
    }

    if (!pattenn2.test(value)) {
        alert('空气质量指数仅能为数字！');
        return;
    }
    aqiData[city] = value;
    isEmpty(aqiData);
}

/**
 * 渲染aqi-table表格
 *
 */

function isEmpty(obj) {
    var i = 0;
     for (var each in obj) {
        i++;
    }
    return i;
}

function renderAqiList(data) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerHTML = ;
    var td2 = document.createElement("td");
    td2.innerHTML = value;
    var td3 = document.createElement("td");
    var btn = document.createElement("button");
    btn.onclick = function(){
        delBtnHandle(tr);
    }
    btn.innerHTML = "删除";
    td3.appendChild(btn);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    document.getElementById("aqi-table").appendChild(tr);
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
    var addBtn = document.getElementById('add-btn');
    addBtn.onclick = addBtnHandle();
}

init();