!function(t){function e(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var i={};return e.m=t,e.c=i,e.p="/build/",e(0)}([function(t,e,i){t.exports=i(2)},function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=function(){function t(){i(this,t),this.size=3,this.margin=1,this.boxSize=this.size+this.margin,this.canvas=document.querySelector("canvas"),this.width=this.canvas.width=window.innerWidth,this.height=this.canvas.height=window.innerHeight,this.columns=Math.floor(this.width/this.boxSize),this.rows=Math.floor(this.height/this.boxSize),this.context=this.canvas.getContext("2d"),this.context.fillStyle="rgba(255,0,0,0.3",this.colony=this.getRandomInitialColony(),this.render=this.render.bind(this),window.onmousemove=this.onMouseMove.bind(this),window.requestAnimationFrame(this.render)}return n(t,[{key:"addCell",value:function(t,e){this.context.fillRect(t,e,this.size,this.size)}},{key:"removeCell",value:function(t,e){this.context.clearRect(t,e,this.size,this.size)}},{key:"getEmptyColony",value:function(){var t=this;return Array(this.columns).fill().map(function(){return Array(t.rows).fill(0)})}},{key:"getRandomInitialColony",value:function(){var t=arguments.length<=0||void 0===arguments[0]?.25:arguments[0];return this.getEmptyColony().map(function(e){return e.map(function(e){return Math.random()<t?1:0})})}},{key:"neighbours",value:function(t,e){var i=0===t?this.columns-1:t-1,n=t===this.columns-1?0:t+1,o=0===e?this.rows-1:e-1,r=e===this.rows-1?0:e+1,s=this.colony[i],a=this.colony[t],h=this.colony[n];return s[o]+s[e]+s[r]+a[o]+a[r]+h[o]+h[e]+h[r]}},{key:"render",value:function(){var t=this;if(!document.hasFocus())return window.requestAnimationFrame(this.render);var e=[];return this.colony.forEach(function(i,n){var o=[];i.forEach(function(e,i){var r=t.neighbours(n,i),s=0;(3===r||e&&2===r)&&(s=1),o[i]=s,!e&&s?t.addCell(n*t.boxSize,i*t.boxSize):e&&!s&&t.removeCell(n*t.boxSize,i*t.boxSize)}),e.push(o)}),this.colony=e,window.requestAnimationFrame(this.render)}},{key:"onMouseMove",value:function(t){var e=t.clientX,i=t.clientY,n=Math.floor(e/this.boxSize),o=Math.floor(i/this.boxSize),r=this.colony[n][o];if(!r){this.colony[n][o]=1;var s=e-e%this.boxSize,a=i-i%this.boxSize;this.addCell(s,a)}}}]),t}();e["default"]=o},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}i(3);var o=i(1),r=n(o);new r["default"]},function(t,e){}]);