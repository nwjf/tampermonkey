// ==UserScript==
// @name         set image width opacity
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/index.php?version=4.18.1&ext=dhdg&updated=true
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// @match        *://*/*
// ==/UserScript==

let styleHtml = `
  img { width: 20px!important; height: 20px!important; }
`;

let style = document.createElement('style');
style.innerHTML = styleHtml;
let htmlDom = document.querySelector('html');
htmlDom.appendChild(style);