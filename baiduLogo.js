// ==UserScript==
// @name         百度搜索页替换
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  try to take over the world!
// @author       EayonLee
// @match        https://www.tampermonkey.net/index.php?version=4.18.1&ext=dhdg&updated=true
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @match        *://www.baidu.com/*
// ==/UserScript==



// logo (700 * 411) px
// tencent
// let logo = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgs.it007.com%2Fdata%2Fattachment%2Fportal%2F202104%2F19%2F184211wb44vkc7vy4zvy12.png&refer=http%3A%2F%2Fimgs.it007.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1675491479&t=22b828dc01c8937ab1d8e9c9b2f7c7ed';
// 军法搜搜
// let logo = 'http://gdc.kg.qq.com/6008/4d7d6a208467454a331d5a1b2d48a5b3.png';
// 阿雨搜搜
// let logo = 'https://gdc.kg.qq.com/6008/1fe981042dd56fb92ad0622f2f9087ea.png';
// 呆呆搜搜
// let logo = 'https://gdc.kg.qq.com/6008/e07c1bb4237ea35d26c81d305cd62bd2.png';
// 阿呆搜索
let logo = 'https://gdc.kg.qq.com/6008/0fa23e30fe6f2bc6fdc3301d1ca47ce2.png';

let styleHtml = `
  #s-top-left {
    display: none;
  }

  #u1 {
    display: none;
  }

  #s_main {
    display: none;
  }

  .wrapper_new #s_fm {
    margin-top: 100px !important;
  }

  .wrapper_l #s_fm {
    margin-top: 0px !important;
  }

  #result_logo,
  #lg {
    background-image: url("${logo}");
    background-size: 415px 270px;
    background-position: center;
    background-repeat: no-repeat;
  }

  #result_logo {
    width: 150px;
    height: 33px;
    margin-right: -40px !important;
    margin-top: 25px !important;
    background-size: 100% 228%;
    background-position: 0px center;
  }

  #bottom_layer,
  #result_logo img,
  #lg img,
  .wrapper_new #u,
  .s_btn_wr.bg,
  #searchTag,
  #content_right,
  #con-ceiling-wrapper {
    display: none !important;
  }

  .s_tab {
    padding-top: 66px !important;
  }

  .s_ipt,
  .s_ipt_wr {
    height: 46px !important;
    border-radius: 23px !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    border: 1px solid #5f6368 !important;
    margin: auto !important;

  }

  .s_ipt_wr s_ipt,
  input.s_ipt {
    border: none !important;
  }

  #form {
    margin-left: 50px !important;
  }

`;
let style = document.createElement('style');
style.innerHTML = styleHtml;
let htmlDom = document.querySelector('html');
htmlDom.appendChild(style);