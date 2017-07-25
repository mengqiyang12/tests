//所用的html和css加载完了之后 里面的代码才执行
window.onload = function () {
    //找人
    var wrap = document.getElementById("wrap");
    var arrow = document.getElementById("arrow");
    var slide = document.getElementById("slide");

    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");
    var ul = slide.children[0];
    var lis = ul.children;


    //鼠标经过显示
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    };
    //鼠标移开消失
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    };

    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

    var flag = true;
    //便历   把数组的样式加载到每个li中
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;
            });
        }
    }

    assign();
    //右箭头  第一个放到最后一个    不改变结构  只改变每个图片的样式 通过样式实现
    arrRight.onclick = function () {
        //第一个放到最后一个
        if (flag) {
            config.push(config.shift());
            //从新给li加载样式
            assign();
        }

    };

    //左箭头  最后一个放到第一个
    arrLeft.onclick = function () {
        //最后一个放到第一个
        if (flag) {
            config.unshift(config.pop());
            //从新给li加载样式
            assign();
        }

    }


};