// 載入 SCSS
import '../scss/index.scss';
 
// 載入 jQuery Plugin
// import '../../../node_modules/vmodel.js/src/jquery.vmodel.min.js';

// 載入會使用到的 JS 程式碼
import './md/global/menu.js';
import './md/button.js';
 
// 若要全域使用加入這塊
window.$ = $
window.jQuery = $
 
$(function (){
    console.log('index.js');
})
