/**
 * Created by flynn on 2016/3/29.
 */

if (String.prototype.trim === undefined) {
    String.prototype.trim = function () {
        return this.replace(/^\s+/, '').replace(/\s+$/, '');
    }
}



var Utils = {
    addHandler: function (ele, type, handler) {
        if (ele.addEventListener) {
            ele.addEventListener(type, handler, false);
        } else if (ele.attachEvent) {
            ele.attachEvent("on" + type, handler);
        } else {
            ele["on" + type] = handler;
        }
    },

    splitInput : function (text) {
        var inputArr = [];
        var splitRE = /[\s\r\n、,，]+/;
        inputArr = text.split(splitRE);
        return inputArr;
    },

    isEmpty : function (val) {
        if (val.length == 0) {
            return true;
        }
    },

    render : function (arr) {
        var main = document.getElementById('main');
        for (var i = 0; i  < arr.length; i++) {
            var span = document.createElement('span');
            span.className = 'sp';
            span.id = i;
            span.innerHTML = arr[i];
            main.appendChild(span);
        }
    },
    emptyMain : function () {
        var main = document.getElementById('main');
        main.innerHTML = '';
    },

    getInputArray : function () {
        var ta = document.getElementById('ta');
        var ta1 = ta.value;
        if (ta1 == '') {
            alert("不能为空!");
        }
        else {
            var ta2 = ta1.trim();
            return Utils.splitInput(ta2);
        }
    },
    getSearchText : function () {
        var search_text = document.getElementById('search_text');
        var main = document.getElementById('main');
        var search_value = search_text.value;
        for (var i = 0; i < main.childNodes.length; i++) {
            if (main.childNodes[i].innerHTML.indexOf(search_value) != -1) {
                console.log(main.childNodes[i].innerHTML);
                main.childNodes[i].style.color = 'green';
                main.childNodes[i].style.background = '#ccc';
            }
        }
    }
};

var Queue = {
    addLeft: function (box) {
        Utils.emptyMain();
        var arr = Utils.getInputArray();
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != '') {
                box.unshift(arr[i]);
            }
        }
        return box;
    },
    addRight: function (box) {
        Utils.emptyMain();
        var arr = Utils.getInputArray();
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != '') {
                box.push(arr[i]);
            }
        }
        return box;
    },
    removeLeft: function (box) {
        Utils.emptyMain();
        if (Utils.isEmpty(box)) {
            alert("已经没东西可删了哦！")
        }
        else {
            var a = box.shift();
            alert(a);
        }
    },
    removeRight: function (box) {
        Utils.emptyMain();
        if (Utils.isEmpty(box)) {
            alert("已经没东西可删了哦！")
        }
        else {
            var a = box.pop();
            alert(a);
        }
    },
    removeCenter: function (box) {
        Utils.emptyMain();
        if (Utils.isEmpty(box)) {
            alert("已经没东西可删了哦！")
        }
        else {
            var node = event.target;
            var aId = node.id;
            var a = box.splice(aId,1);
            alert(a);
        }
    }

};

window.onload = function () {
    var box = [];
    var left_in = document.getElementById('left_in');
    var right_in = document.getElementById('right_in');
    var left_out = document.getElementById('left_out');
    var right_out = document.getElementById('right_out');
    var main = document.getElementById('main');
    var btn = document.getElementById('search_btn');

    Utils.addHandler(btn, 'click', Utils.getSearchText);

    Utils.addHandler(left_in,'click',function () {
        Queue.addLeft(box);
        Utils.render(box);
    });


    Utils.addHandler(right_in,'click',function () {
        Queue.addRight(box);
        Utils.render(box);
    });

    Utils.addHandler(left_out,'click',function () {
        Queue.removeLeft(box);
        Utils.render(box);
    });

    Utils.addHandler(right_out,'click',function () {
        Queue.removeRight(box);
        Utils.render(box);
    });

    Utils.addHandler(main,'click',function () {
        Queue.removeCenter(box);
        Utils.render(box);
    })

};