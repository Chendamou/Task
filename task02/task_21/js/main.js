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

    each : function (arr,fn) {
        for (var i = 0; i < arr.length; i++) {
            fn(arr[i], i);
        }
    },

    splitInput : function (text) {
        var inputArr = [];
        inputArr = (text).split(/[,，;；、\s\n]+/);
        return inputArr;
    },

    trim: function (str) {
        return str.replace(/^\s+/, '').replace(/\s+$/, '');
    }

};

function Queue(container, isDelDiv) {
    this.str = [];

    this.addLeft = function(obj) {
        if (obj.length) {
            this.str.unshift(obj);
            this.render();
        }
    };

    this.addRight = function(obj) {
        if (obj.length) {
            this.str.push(obj);
            this.render();
        }
    };

    this.isEmpty = function() {
        return (this.str.length == 0);
    };

    this.removeLeft = function() {
        if (!this.isEmpty()) {
            this.str.shift();
            this.render();
        }
        else {
            alert("没东西可删了o");
        }
    };

    this.removeRight = function() {
        if (!this.isEmpty()) {
            this.str.pop();
            this.render();
        }
        else {
            alert("没东西可删了o");
        }
    };

    this.render = function() {
        var str = "";
        Utils.each(this.str, function(item){str += ("<span class='span_1'>" + item + "</span>")});
        container.innerHTML = str;
        if(isDelDiv) addDivDelEvent(this, container);
    };

    this.removeCenter = function(id) {
        this.str.splice(id, 1);
        this.render();
    }
}

function addDivDelEvent(Queue, container) {
    var temp = [];
    for (var i = 0; i < container.childNodes.length; i++) {
        temp.push(container.childNodes[i].innerHTML);
        //这里要使用闭包，否则永远绑定到指定div上的delete函数的参数永远等于跳出时的cur值(length);
        Utils.addHandler(container.childNodes[i], "click", function() {
            return function(){return Queue.removeCenter(i)};
        }(i));
        // Utils.addHandler(container.childNodes[i], "mouseover", function(i) {
        //     return function(){container.childNodes[i].style.background = "green"; container.childNodes[i].innerHTML = "删除" + temp[i] + "?";};
        // }());
        // Utils.addHandler(container.childNodes[i], "mouseout", function(i) {
        //     return function(){container.childNodes[i].style.background = "red"; container.childNodes[i].innerHTML = temp[i];};
        // }(i));
    }
}

window.onload = function () {
    var container_1 = document.getElementById('container_1');
    var tag_input = document.getElementById('tag_input');
    var container_2 = document.getElementById('container_2');
    var text_area = document.getElementById('text_area');
    var btn = document.getElementById('btn');

    var tagQueue = new Queue(container_1, true);
    var interestQueue = new Queue(container_2, false);
    
    Utils.addHandler(tag_input, 'keyup', function (e) {
        if (/[,，;；、\s\n]+/.test(tag_input.value) || e.keyCode ===13) {
            var handledData = Utils.splitInput(Utils.trim(tag_input.value));
            var data = handledData[0];
            if (tagQueue.str.indexOf(data) === -1) {
                tagQueue.addRight(data);
                if (tagQueue.str.length > 10) {
                    tagQueue.removeLeft()
                }
            }
            tagQueue.render();
            tag_input.value = "";
        }
    })

};
