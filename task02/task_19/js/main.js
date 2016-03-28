/**
 * Created by flynn on 2016/3/27.
 */
    var aArray = [];

    var init = function () {
        var text = document.getElementById('text');
        var val = text.value;


        //这是个取巧的方法，虽然很好用，但是不推荐...
        if (10 <= val && val <= 100) {
            var intVal = parseInt(val);
            return intVal;
        }
        else
        {
            alert("请输入10-100的数字！");
            return false;
        }
    };

    var Utils = {
        //往数组前面添加
        addLeft: function () {
            var aLeft = init();
            if (aLeft) {
                aArray.unshift(aLeft);
            }
        },
        //往数组后边添加
        addRight: function () {
            var aRight = init();
            if (aRight) {
                aArray.push(aRight);
            }
        },
        //从数组前面删除
        removeLeft: function () {
            if (aArray.length !== 0) {
                aArray.shift();
            }
            else {
                alert("没东西可以删了......")
            }
        },
        //从数组后面删除
        removeRight: function () {
            if (aArray.length !== 0) {
                aArray.pop();
            }
            else {
                alert("没东西可以删了......")
            }
        },
        //排序
        sortArr : function () {
            var l = aArray.length;
            for (var i = 0; i < l; i++) {
                for (var j = i + 1; j < l; j++) {
                    if (aArray[i] > aArray[j]) {
                        var temp = aArray[i];
                        aArray[i] = aArray[j];
                        aArray[j] = temp;
                    }
                }
            }
        },

        addHandler : function (ele, type, handler) {
            if (ele.addEventListener) {
                ele.addEventListener(type, handler, false);
            } else if (ele.attachEvent) {
                ele.attachEvent("on" + type, handler);
            } else {
                ele["on" + type] = handler;
            }
        }
    };

    //渲染图表
    var Render = {
        // 随机颜色太晃眼了...
        // randomColor : function () {
        //     var rand = Math.floor(Math.random() * 0xFFFFFF).toString(16);
        //     return "#" + rand;
        // },

        chart: function () {
            var main = document.getElementById('main');
            aArray.forEach(function (v) {
                var div = document.createElement('div');
                div.style.background = 'red';
                div.style.height = v * 4 + 'px';
                main.appendChild(div);
            });
        }
    };

    //添加单击事件
    var Click = {
        leftIn : function () {
            var left_in = document.getElementById('left_in');
            Utils.addHandler(left_in, 'click', function () {
                Utils.addLeft();
                var main = document.getElementById('main').innerHTML = "";
                Render.chart();
            })
        },

        rightIn : function () {
            var right_in = document.getElementById('right_in');
            Utils.addHandler(right_in, 'click', function () {
                Utils.addRight();
                var main = document.getElementById('main').innerHTML = "";
                Render.chart();
            })
        },

        leftOut : function () {
            var left_out = document.getElementById('left_out');
            Utils.addHandler(left_out, 'click', function () {
                Utils.removeLeft();
                var main = document.getElementById('main').innerHTML = "";
                Render.chart();
            })
        },

        rightOut : function () {
            var right_out = document.getElementById('right_out');
            Utils.addHandler(right_out, 'click', function () {
                Utils.removeRight();
                var main = document.getElementById('main').innerHTML = "";
                Render.chart();
            })
        },

        sortArray : function () {
            var sort = document.getElementById('sort');
            Utils.addHandler(sort, 'click', function () {
                Utils.sortArr();
                var main = document.getElementById('main').innerHTML = "";
                Render.chart();
            })
        }
    };


window.onload = function () {
    Click.leftIn();
    Click.rightIn();
    Click.leftOut();
    Click.rightOut();
    Click.sortArray();
}
