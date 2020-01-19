window.onload=function(){


// 下面是滾動效果

var itemzz = document.getElementsByClassName('itemzz')[0];
    //获取展示内容区的区域
    var left_silde = document.getElementsByClassName('left_silde')[0];
    //获取展示内容区的区域的大小
    var left_silde_height = left_silde.offsetHeight;
    //获取内容区
    var neirong = document.getElementsByClassName('neirong')[0];
    //获取内容区的实际高度
    var neirong_height = neirong.offsetHeight;
    //获取滑道
    var gdt = document.getElementsByClassName('gdt')[0];
    //获取滑道的高度
    var gdt_height = gdt.offsetHeight;
    //获取滚动条
    var gdtnr = document.getElementsByClassName('gdtnr')[0];

    //求 滚动条的高度

    //当展示的内容区的大小刚好展示内容区域时，滚动条的高度就是滑道的高度
    if (left_silde_height / neirong_height < 1) {
        gdtnr.style.height = (left_silde_height / neirong_height) * gdt_height + 'px';
    } else {
        gdtnr.style.height = gdt_height + 'px';
    }

    //绑定事件(做兼容处理)
    itemzz.onmousewheel = function (e) {
        //    e.wheelDelta < 0 //(-120)  向下
        //    e.wheelDelta > 0 //(120)  向上
        scrollRoll(e);
    }
    //兼容  Firefox 
    itemzz.addEventListener('DOMMouseScroll', function (e) {
        // e.detail > 0  //(3)  滑轮向下滚动
        // e.detail < 0  //(-3)  滑轮向上滚动
        scrollRoll(e);
    }, false)


    function scrollRoll(e) {
        e = e || window.event;
        if (e.detail > 0) {
            down();
        } else if (e.detail < 0) {
            up();
        }

        if (e.wheelDelta > 0) {
            up();
        } else if (e.wheelDelta < 0) {
            down();
        }
    }

    //滑轮向下滚动
    function down() {
        var speed = 16;
        if (gdtnr.offsetTop >= gdt_height - gdtnr.offsetHeight) {
            gdtnr.style.top = gdt_height - gdtnr.offsetHeight + 'px';
            //注意：内容区应该向上移动
            neirong.style.top = - (neirong_height - left_silde_height) + 'px';
        } else {
            gdtnr.style.top = gdtnr.offsetTop + speed + 'px';
            neirong.style.top = - gdtnr.offsetTop / (gdt_height - gdtnr.offsetHeight) * (neirong_height - left_silde_height) + 'px';
        }
    }
    //滑轮向上滚动
    function up() {
        var speed = 16;
        if (gdtnr.offsetTop <= 0) {
            gdtnr.style.top = 0 + 'px';
            neirong.style.top = 0 + 'px';
        } else {
            gdtnr.style.top = gdtnr.offsetTop - speed + 'px';
            neirong.style.top = - gdtnr.offsetTop / (gdt_height - gdtnr.offsetHeight) * (neirong_height - left_silde_height) + 'px';
        }
    }


    // 書籤切換
    var lis = document.getElementsByClassName('shuq');
    var box = document.getElementsByClassName('mid_text');
    for (i = 0; i < lis.length; i++) {
        // 自定义一个下标，获取下标，为后面div做准备。
        lis[i].index = i;
        lis[i].onclick = function () {
            console.log(this.index);
            // 排他思想，先清除所有的颜色，双重for循环
            for (i = 0; i < lis.length; i++) {
                lis[i].id = ''
            }
            // this.style.backgroundColor = 'red';
            this.id = 'xuazn';

            // console.log(this.index);
            for (i = 0; i < lis.length; i++) {
                box[i].style.display = 'none'
            }
            // 得到div下标 this.index
            box[this.index].style.display = 'block'
        }

    }









    

}