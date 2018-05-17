// 載入 SCSS
import '../scss/index.scss';
 
// 載入 jQuery Plugin
import '../../../node_modules/vmodel.js/src/jquery.vmodel.min.js';

// 載入會使用到的 JS 程式碼
import './md/global/susy-screen.js';
import './md/button.js';
 
// 若要全域使用加入這塊
window.$ = $
window.jQuery = $
 
$(function (){

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
