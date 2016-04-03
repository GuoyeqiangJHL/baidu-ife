//储存全局变量
var glb = {};

(function () {
    var block = document.querySelector('#block');
    var inputs = document.querySelectorAll('#inputs input');
    var btns = document.querySelectorAll('#btns button');
    var trabtns = document.querySelectorAll('#trabtns button');
    glb.block = block;
    glb.inputs = inputs;
    glb.btns = btns;
    glb.traBtns = trabtns;
    //获取坐标与选转角度
    glb.getAttr = function () {
        var arr = glb.block.style.transform.match(/-?\d+/g);
        //转为整形
        for (var i = 0, len = arr.length; i < len; i ++) {
            arr[i] = parseInt(arr[i]);
        }
        return arr;
    }
    //判断方向
    glb.direction = function () {
        var deg = glb.getAttr()[2];
        while (deg > 360) {
            deg -= 360;
        }
        while (deg < -360) {
            deg += 360;
        }
        var dir = deg / 90;
        if (dir === 1 || dir === -3) {
            return 'right';
        } else if (dir === 2 || dir === -2) {
            return 'down';
        } else if (dir === 3 || dir === -1) {
            return 'left';
        } else {
            return 'top';
        }
    }
})();

//小方块随机位置
(function () {
    //随机函数，用于产生小方块初始的left与top值
    function random() {
        return Math.floor(Math.random() * 10 + 1) * 50 ;
    }

    glb.block.style.transform = "translate(" + random() + "px, " + random() + "px) rotate(0deg)";
})();

//go
(function () {
    glb.go = function () {
        var direction = glb.direction();
        var tempArr = glb.getAttr();
        var x = tempArr[0];
        var y = tempArr[1];
        var deg = tempArr[2];

        if (direction === 'top') {
            y -= y - 50 > 0 ? 50 : 0;
        } else if (direction === 'left') {
            x -= x - 50 <= 0 ? 0 : 50;
        } else if (direction === 'down') {
            y += y + 50 < 550 ? 50 : 0;
        } else {
            x += x + 50 >= 550 ? 0 : 50;
        }

        glb.block.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + deg + "deg)";
    }
})();

//TRA LEF
(function () {
    glb.tralef = function () {
        var tempArr = glb.getAttr();
        var x = tempArr[0];
        var y = tempArr[1];
        var deg = tempArr[2];

        x -= x - 50 <= 0 ? 0 : 50;

        glb.block.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + deg + "deg)";
    }

    glb.traBtns[1].addEventListener('click', glb.tralef, false);
})();

//TRA TOP
(function () {
    glb.tratop = function () {
        var tempArr = glb.getAttr();
        var x = tempArr[0];
        var y = tempArr[1];
        var deg = tempArr[2];

        y -= y - 50 > 0 ? 50 : 0;

        glb.block.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + deg + "deg)";
    }

    glb.traBtns[0].addEventListener('click', glb.tratop, false);
})();

//TRA BOT
(function () {
    glb.trabot = function () {
        var tempArr = glb.getAttr();
        var x = tempArr[0];
        var y = tempArr[1];
        var deg = tempArr[2];

        y += y + 50 < 550 ? 50 : 0;

        glb.block.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + deg + "deg)";
    }

    glb.traBtns[3].addEventListener('click', glb.trabot, false);
})();


//TRA RIG
(function () {
    glb.trarig = function () {
        var tempArr = glb.getAttr();
        var x = tempArr[0];
        var y = tempArr[1];
        var deg = tempArr[2];

        x += x + 50 >= 550 ? 0 : 50;

        glb.block.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + deg + "deg)";
    }

    glb.traBtns[2].addEventListener('click', glb.trarig, false);
})();

//MOV TOP
(function () {
    glb.top = function () {
        while (glb.direction() !== 'top') {
            var tempArr = glb.getAttr();
            var x = tempArr[0];
            var y = tempArr[1];
            var deg = tempArr[2];

            deg -= 90;
            glb.block.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + deg + "deg)";
        }
        glb.go();
    }

    glb.btns[0].addEventListener('click', glb.top, false);
})();

//MOV LEF
(function () {
    glb.lef = function () {

        while (glb.direction() !== 'left') {
            var tempArr = glb.getAttr();
            var x = tempArr[0];
            var y = tempArr[1];
            var deg = tempArr[2];

            deg -= 90;
            glb.block.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + deg + "deg)";
        }

        glb.go();
    }

    glb.btns[1].addEventListener('click', glb.lef, false);
})();

//MOV RIG
(function () {
    glb.rig = function () {
        while (glb.direction() !== 'right') {
            var tempArr = glb.getAttr();
            var x = tempArr[0];
            var y = tempArr[1];
            var deg = tempArr[2];

            deg += 90;
            glb.block.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + deg + "deg)";
        }
        glb.go();
    }

    glb.btns[2].addEventListener('click', glb.rig, false);
})();

//MOV BOT
(function () {
    glb.bot = function () {
        while (glb.direction() !== 'down') {
            var tempArr = glb.getAttr();
            var x = tempArr[0];
            var y = tempArr[1];
            var deg = tempArr[2];

            deg += 90;
            glb.block.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + deg + "deg)";
        }
        glb.go();
    }

    glb.btns[3].addEventListener('click', glb.bot, false);
})();

//input btn
(function () {

    function dispose() {
        var value = glb.inputs[0].value;
        glb.inputs[0].value = '';
        if (value === 'MOV BOT' || value === 'mov bot') {
            glb.bot();
        } else if (value === 'MOV RIG' || value === 'mov rig') {
            glb.rig();
        } else if (value === 'MOV LEF' || value === 'mov lef') {
            glb.lef();
        } else if (value === 'MOV TOP' || value === 'mov top') {
            glb.top();
        } else if (value === 'TRA BOT' || value === 'tra bot') {
            glb.trabot();
        } else if (value === 'TRA RIG' || value === 'tra rig') {
            glb.trarig();
        } else if (value === 'TRA LEF' || value === 'tra lef') {
            glb.tralef();
        } else if (value === 'TRA TOP' || value === 'tra top') {
            glb.tratop();
        }
    }

    glb.inputs[0].addEventListener('keydown', function (e) {
        e = e || window.event;
        if (e.keyCode == '13') {
            dispose();
        }
    }, false);

    glb.inputs[1].addEventListener('click', function () {
        dispose();
    }, false);

})();
