// var swiperItem = document.getElementsByClassName("swiper-item")[0];
// var swiperList = document.getElementsByClassName("swiper-list");

// console.log(swiperList.length);
// /
// //获取每次应该减去的left值应该为当前ul总宽度除以6

// var swiperNowOffsetLeft = swiperItem.offsetLeft;
//

//轮播图核心函数
function swiperItemTurn(imgElement,imgNowLeft,imgNowWidth,imgNowSpeed){
    imgNowLeft = imgElement.offsetLeft;

    if(imgNowLeft + imgNowWidth <= imgNowSpeed){

        imgElement.style.transition = 'none';
        imgNowLeft = -imgNowSpeed;
        // console.log(swiperNowLeft);
        imgElement.style.left = imgNowLeft +'px';
        console.log(imgElement.style.left);
        swiperItemTurn(imgElement,imgNowLeft,imgNowWidth,imgNowSpeed);

    }else{

        imgElement.style.transition = 'left 2s';
        imgNowLeft -= imgNowSpeed;
        // console.log('进了这个判断' + imgNowLeft);
        // console.log(imgNowWidth);
        imgElement.style.left = imgNowLeft +'px';

    }

}


//按钮点击事件

// var swiperNext = document.getElementById("next");
// var swiperPrev = document.getElementById("prev");
// var flag = true;

// swiperNext.onclick = function(){
//     console.log(flag);
//     if(flag == false){
//         return;
//     }  
//     startNext();
      
    
// }

// function startNext(){
    
//     var nextClickLeft = swiperItem.offsetLeft
//     console.log(nextClickLeft,swiperItemWidth,swiperItemSpeed);
//     if(nextClickLeft + swiperItemWidth <= swiperItemSpeed){
//         console.log("来了这里")
//         swiperItem.style.transition = 'none';
//         nextClickLeft = -swiperItemSpeed;
//        swiperItem.style.left = nextClickLeft +'px';
//        startNext();
//     }else{
//         swiperItem.style.transition = 'left 2s';
//         console.log("点钟了");
//          nextClickLeft -= swiperItemSpeed;
//          console.log( swiperItem.offsetLeft);
//          swiperItem.style.left = nextClickLeft +'px';
        
//     }
//     console.log(swiperItem.style.left);
//     // flag = true;
// }

// swiperItem.onmouseenter = function(){
    
//     clearInterval(swiperItemTimer);
// }
// swiperItem.onmouseleave = function(){
 
//     swiperItemTimer = setInterval(swiperItemTurn,3000,swiperItem,swiperNowLeft,swiperItemWidth,swiperItemSpeed);
// }
// swiperNext.onmouseenter = function(){
   
//     console.log(swiperItem.offsetLeft);
//     clearInterval(swiperItemTimer);
// }
// swiperNext.onmouseleave = function(){
   
//     swiperItemTimer = setInterval(swiperItemTurn,3000,swiperItem,swiperNowLeft,swiperItemWidth,swiperItemSpeed);
// }