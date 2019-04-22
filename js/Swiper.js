var oPrev = document.getElementById('prev'),
    oNext = document.getElementById('next'),
    oMain = document.getElementsByClassName('swiper-main')[0],
    oImg = document.getElementsByTagName('img')[0],
    oList = document.getElementsByClassName('swiper-list')[0],
    oLi = oList.getElementsByTagName('li'),
    oSwiper = document.getElementsByClassName('swiper')[0];
var timer,timer2,
    dis = oImg.offsetWidth,
    oLiLength = oLi.length,
    index = 0,
    flag = true;
    function moveImg(dis) {
        flag = false;
        var Time = 600;//每一次轮播的总时长
        var eachTime = 50;//每次移动一小段距离的时长
        var eachDis =dis/(Time/eachTime);//每次一小段移动的距离
        var newLeft = oMain.offsetLeft + dis;
        function eachMove(){
            if(dis > 0 && oMain.offsetLeft < newLeft || dis < 0 && oMain.offsetLeft > newLeft){
                oMain.style.left = oMain.offsetLeft + eachDis + 'px';
                console.log(oMain.style.left);
            }else {
                clearInterval(timer);
                oMain.style.left = newLeft + 'px';

                // if(newLeft == -7680){
                //     oMain.style.left = -1536 + "px";
                // }else if(newLeft == 0){
                //     oMain.style.left = -6144 + 'px';
                // }

                if(newLeft == -7680){
                    oMain.style.left = dis + "px";
                }else if(newLeft == 0){
                    oMain.style.left = -(dis*4) + 'px';
                }
                flag = true;
            }
            
        }
        timer = setInterval(eachMove,eachTime)
    }

    oPrev.onclick = function() {
        // 判断：方法未运行完下一调用无效
        if(flag == false) return;
        moveImg(dis);

        // 当点击左右按钮时下方按钮跟着变换
        if(index == 0){
            index = 3;
        }else {
            index--;
        }
        //调用改变样式方法
        oLiStyel();
        console.log(oMain.offsetLeft);
    };
    oNext.onclick = function() {
        if(flag == false) return;
        moveImg(-dis);
        
        // 当点击左右按钮时下方按钮跟着变换
        if(index == 3) {
            index = 0;
        }else {
            index++;
        }
        //调用改变样式方法
        oLiStyel();
        console.log(oMain.offsetLeft);
        console.log(index);
    };

    // 下方按钮样式绑定
    function oLiStyel() {
        oList.getElementsByClassName('active')[0].className = '';
        oLi[index].className = 'active';
    }

     // 下方按钮业务逻辑
    for(var i = 0; i < oLiLength; i++){
        (function(j) {
            oLi[j].onclick = function () {
                var offset = (j - index) * -1536;
                moveImg(offset);
                index = j;
                oLiStyel();
                console.log(j);
            }
        })(i)
    }

    // 自动轮播
    timer2 = setInterval(oNext.onclick, 2000);
    oSwiper.onmouseover = function () {
        clearInterval(timer2);
    }
    oSwiper.onmouseout = function () {
        timer2 = setInterval(oNext.onclick, 2000);
    }