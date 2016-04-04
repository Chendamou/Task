/**
 * Created by flynn on 2016/4/2.
 */

var createBoard = (function () {
    var board = [];
    for (var i = 0; i < 10; i++) {
        board[i] = [];
        for (var j = 0; j < 10; j++) {
            board[i][j] = 0;
        }
    }
    return {
        returnB : function () {
            return board;
        }
    }
})();

// function aGrid() {
//     var choose = document.getElementById('grid-cell-6-7');
//     var head = document.createElement('div');
//     var foot = document.createElement('div');
//     head.className = 'head';
//     foot.className = 'foot';
//     choose.appendChild(head);
//     choose.appendChild(foot);
// }


window.onload = function () {
    var cellId = [6,8];
    var choose = document.getElementById("grid-cell-" + cellId[0] + "-" +cellId[1]);
    function turnTop() {
        var head = document.createElement('div');
        var foot = document.createElement('div');
        head.className = 'head';
        foot.className = 'foot';
        choose.appendChild(head);
        choose.appendChild(foot);
    }
    
    function turnBottom() {
        var head = document.createElement('div');
        var foot = document.createElement('div');
        head.className = 'head';
        foot.className = 'foot';
        choose.appendChild(foot);
        choose.appendChild(head);
    }
    
    function turnLeft() {
        var head = document.createElement('div');
        var foot = document.createElement('div');
        head.className = 'head';
        foot.className = 'foot';
        choose.appendChild(head);
        choose.appendChild(foot);
        choose.style.transform = "rotate(-90deg)";
    }
    
    function turnRight() {
        var head = document.createElement('div');
        var foot = document.createElement('div');
        head.className = 'head';
        foot.className = 'foot';
        choose.appendChild(head);
        choose.appendChild(foot);
        choose.style.transform = "rotate(90deg)";
    }

    turnRight();
};

var board = createBoard.returnB();
