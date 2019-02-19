// 載入 SCSS
import '../scss/global/global.scss';
import '../scss/index.scss';
 
// 載入 jQuery Plugin
import 'vmodel.js';
import 'jquery-touchswipe';

import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';

import 'jquery.transit';
import 'melanke-watchjs';


// 載入會使用到的 JS 程式碼
import './md/global/susy-screen.js';
import './md/button.js';
 
// 若要全域使用加入這塊
window.$ = $
window.jQuery = $

$(function (){

    console.log('helloWorld haha')

    //demo
    $( ".widget button" )
          .eq( 0 ).button()
          .end().eq( 1 ).button( {
            icon: "ui-icon-gear",
            showLabel: false
          } ).end().eq( 2 ).button( {
            icon: "ui-icon-gear"
          } ).end().eq( 3 ).button( {
            icon: "ui-icon-gear",
            iconPosition: "end"
          } ).end().eq( 4 ).button( {
            icon: "ui-icon-gear",
            iconPosition: "top"
          } ).end().eq( 5 ).button( {
            icon: "ui-icon-gear",
            iconPosition: "bottom"
          } );




    // 取得目前的版面
    var r = $.vmodel.get("global/susyScreen").current();
    console.log("目前版面是：" + r);

    // 監聽不同視窗
    $.vmodel.get("global/susyScreen").listen({
        mobile: function (){
            console.log('目前是 mobile');
        },
        pad: function (){
            console.log('目前是 pad');
        },
        desktop: function (){
            console.log('目前是 desktop');
        }
    });
    
})
