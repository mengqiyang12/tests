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


    //鼠标经过显示箭头
    //改变箭头的透明度
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    };
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0})
    };

    //给图片添加样式
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

    function assgin() {
        for (var i = 0; i < lis.length; i++) {

            animate(lis[i], config[i]);
            //等图片修改完之后  在把开关 打开
            flag = true;
        }

    }

    assgin();

    //开关
    var flag = true;

    //通过改变图片的样式 实现轮播图
    //右箭头
    arrRight.onclick = function () {
        //从第一张变为最后一张
        if (flag) {
            flag = false;
            config.push(config.shift());
            assgin();
        }

    };

    //左箭头
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());
            assgin();
        }

    }


};