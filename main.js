!function(){var t={593:function(){const t=document.querySelector(".rounded"),e=document.querySelector(".pointed");window.addEventListener("mousemove",(r=>{const n=r.clientY,o=r.clientX;t.style.transform=`translate3d(${o}px, ${n}px, 0)`,e.style.transform=`translate3d(${o}px, ${n}px, 0)`}))},145:function(t,e,r){t.exports=r.p+"goblin.png"}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,r),c.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t}(),function(){"use strict";new class{constructor(t){this.board=t}start(){const t=document.querySelector(".board");for(let e=0;e<this.board**2;e+=1){const e=document.createElement("div");e.classList.add("cell"),t.prepend(e)}const e=document.getElementsByClassName("cell");let r,n=0;const o=this.board**2-1;setInterval((()=>{r=Math.floor(0+Math.random()*(o+1-0)),r===n&&(r+=1,r>=o&&(r=0)),e[r].innerHTML='<img src="goblin.png">',e[n].innerHTML="",n=r}),1e3)}}(4).start(),r(145),r(593)}()}();