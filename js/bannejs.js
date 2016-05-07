window.onload = function(){

    // 头部随着页面滚动背景变色
    var search =document.getElementsByClassName("wap_header_box")[0];

    var jdBanner = document.getElementsByClassName("wap_banner")[0];

    var height = jdBanner.offsetHeight;

    window.onscroll = function(){
      console.log(document.body.scrollTop);
    }


  // 轮播图
  // var banner = document.getElementsByClassName('wap_banner')[0];
  // var width = banner.offsetWidth;
  // var imgBox = banner.getElementsByTagName('ul')[0];

  // var index = 1;
  // var timer;
  // timer = setInterval(function(){
  //     index++;
  //     imgBox.style.transition = "all 0.2s ease";
  //     imgBox.style.webkitTransition = "all 0.2s ease";

  //     imgBox.style.transform = "translateX("+(-index*width)+"px)";
  //     // imgBox.style.transform = 'translateX('+-index* width+'px)';
  //     imgBox.style.webkitTransform = "translateX("+(-index*width)+"px)";
  // },2000);

  // 监听过渡结束事件
  

  // transitionEnd(imgBox,function(){
  //   if(index >= 4){
  //     // 瞬间定位到第一张
  //     index = 1;
  //     // 清除过渡
  //     imgBox.style.transition = "none";
  //     imgBox.style.webkitTransform = "none";
  //     // 位移
  //     imgBox.style.transform = "translateX("+(-index*width)+")";
  //     imgBox.style.webkitTransform = "translateX("+(-index*width)+")";

  //   }else if(index <= 0){
  //     index = 3;

  //     imgBox.style.transition = "none";
  //     imgBox.style.webkitTransition = "none";

  //     imgBox.style.transform = "translateX("+(-index*width)+")";
  //     imgBox.style.webkitTransform = "translateX("+(-index*width)+")";
  //   }
  // });


  //  function transitionEnd(objDom,callback){
  //   if(typeof objDom != 'object'){
  //       return false;
  //   }
  //   objDom.addEventListener('transitionEnd',function(){
  //       /*if(callback){
  //        callback();
  //        }*/
  //       callback && callback();
  //   });
  //   objDom.addEventListener('webkitTransitionEnd',function(){
  //       callback && callback();
  //   });
  // };

}