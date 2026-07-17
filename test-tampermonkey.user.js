// ==UserScript==
// @name         Test - Boss页面脚本检测
// @namespace    test
// @version      1.0
// @match        https://www.zhipin.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    var div = document.createElement('div');
    div.style.cssText = 'position:fixed;top:0;left:0;right:0;background:red;color:white;padding:15px;z-index:999999;font-size:18px;text-align:center;font-weight:bold;';
    div.textContent = '✅ Tampermonkey 正常运行！时间: ' + new Date().toLocaleTimeString();
    document.body.appendChild(div);
    
    setTimeout(function() {
        div.remove();
    }, 10000);
})();
