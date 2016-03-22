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
    console.log(i);
    return i;
}

function renderAqiList() {
    var aqiTable = document.getElementById('aqi-table');
    // var tr = document.createElement('tr');
    // var td = document.createElement('td');
    // var button = document.createElement('button');
    var tr_first = "<tr><th>城市</th><th>空气质量</th><th>删除当前</th></tr>";
    if (isEmpty(aqiData)) {
        for (var each in aqiData) {
            tr_first += ''
        }
    }


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
function delBtnHandle() {
    // do sth.

    renderAqiList();
}

function init() {

    addAqiData();

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

window.onload = init;