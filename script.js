(function () {

  'use strict';
  var slideList = document.getElementsByClassName('slide');
//  document.write(slideList + '<br><br>'); DOMじゃないっぽい

  //
  var slide = [];
  //DOM Elementに変更？
  for (var i = 0; i < slideList.length; i++){
    slide.push(slideList.item(i));
  }
//  document.write(slide); DOMになったっぽい

  //表示画像の番号
  var imageCount = 0;

  var flag  = true;

  /* ================================================== *
   *
   *    1枚分をアップデート
   *
   * ================================================== */
  function update(){
    if(imageCount + 1 < slide.length){
      imageCount++;
    }else{
      imageCount = 0;
    }
  }

  /* ================================================== *
   *
   *    写真変更
   *
   * ================================================== */
  function change(){
    for (var i = 0; i < slide.length; i++){
      slide[i].style.display = 'none';
//      slide[i].classList.remove = 'active';
    }
    slide[imageCount].style.display = 'block';
//    slide[imageCount].classList.add = 'active';
  }

  /* ================================================== *
   *
   *    スイッチ制御
   *
   * ================================================== */
  function btnSwitch(){
    alert('click');
    document.write('click<br>');
  }

  /* ================================================== *
   *
   *    スライドショー開始
   *
   * ================================================== */
  function start(){

    (function loop(){
      if(flag === true){
        change();
        update();
      }
      setTimeout(loop, 5000);
    })();
  }

  start();

}());
