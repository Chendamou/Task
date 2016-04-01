(function() {
    var treeWalker = new TreeWalker,
        btns       = document.querySelectorAll("input"),
        preBtn     = btns[0],
        inBtn      = btns[1],
        postBtn    = btns[2],
        root       = document.querySelector(".root");

    addHandler(preBtn, "click", function() {
        treeWalker.preOrder(root);
        treeWalker.animation();
    });
    addHandler(inBtn, "click", function() {
        treeWalker.inOrder(root);
        treeWalker.animation();
    });
    addHandler(postBtn, "click", function() {
        treeWalker.postOrder(root);
        treeWalker.animation();
    });


})();
function addHandler(ele, type, handler) {
    if (ele.addEventListener) {
        ele.addEventListener(type, handler, false);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + type, handler);
    } else {
        ele["on" + type] = handler;
    }
}


function TreeWalker() {
    this.stack = [];
    this.root = document.querySelector(".root");
    this.preOrder = function(node) {
        this.stack.push(node);
        if(node.firstElementChild) {
            this.preOrder(node.firstElementChild);
        }
        if(node.lastElementChild) {
            this.preOrder(node.lastElementChild);
        }
    };
    this.inOrder = function(node) {
        if(node.firstElementChild) {
            this.inOrder(node.firstElementChild);
        }
        this.stack.push(node);
        if(node.lastElementChild) {
            this.inOrder(node.lastElementChild);
        }
    };
    this.postOrder = function(node) {
        if(node.firstElementChild) {
            this.postOrder(node.firstElementChild);
        }
        if(node.lastElementChild) {
            this.postOrder(node.lastElementChild);
        }
        this.stack.push(node);
    };
    this.animation = function() {
        var stack   = this.stack,
            speeder = document.querySelector("#speeder"),
            iter    = 0, timer, _self = this;
        _self.stack = [];
        stack[iter].style.backgroundColor = "blue";
        timer = setInterval(function() {
            if(iter == stack.length-1) {
                stack[iter].style.backgroundColor = "#FFFFFF";
                clearInterval(timer);
            } else {
                ++iter;
                stack[iter-1].style.backgroundColor = "#fff";
                stack[iter].style.backgroundColor = "blue";
            }
        }, speeder.value);
    }
}