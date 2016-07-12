!function(e){function t(n){if(i[n])return i[n].exports;var r=i[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var i={};return t.m=e,t.c=i,t.p="/build/",t(0)}([function(e,t,i){e.exports=i(2)},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=function(){function e(){i(this,e),this.canvas=document.querySelector("canvas"),this.width=this.canvas.width=window.innerWidth,this.height=this.canvas.height=window.innerHeight,this.context=this.canvas.getContext("2d"),this.context.fillStyle="rgba(255,0,0,0.3)",this.size=2,this.margin=1,this.boxSize=this.size+this.margin,this.cells=this.getInitialCells(),window.requestAnimationFrame(this.render.bind(this))}return n(e,[{key:"addCell",value:function(e,t){this.context.fillRect(e,t,this.size,this.size)}},{key:"removeCell",value:function(e,t){this.context.clearRect(e,t,this.size,this.size)}},{key:"getInitialCells",value:function(){for(var e=arguments.length<=0||void 0===arguments[0]?.2:arguments[0],t=Math.floor(this.width/(this.size+this.margin)),i=Math.floor(this.height/(this.size+this.margin)),n=[],r=0;r<t;r++){for(var s=[],o=0;o<i;o++){var a=Math.random()<e?1:0;s[o]=a}n.push(s)}return n}},{key:"neighbours",value:function(e,t){var i=this.cells[e-1]||[],n=this.cells[e]||[],r=this.cells[e+1]||[];return(i[t-1]||0)+(i[t]||0)+(i[t+1]||0)+(n[t-1]||0)+(n[t+1]||0)+(r[t-1]||0)+(r[t]||0)+(r[t+1]||0)}},{key:"render",value:function(){var e=this;if(!document.hasFocus())return window.requestAnimationFrame(this.render.bind(this));if(!this.previous)return this.previous=new Date,this.cells.forEach(function(t,i){t.forEach(function(t,n){t?e.addCell(i*e.boxSize,n*e.boxSize):e.removeCell(i*e.boxSize,n*e.boxSize)})}),window.requestAnimationFrame(this.render.bind(this));var t=new Date,i=t-this.previous,n=[];i>80&&(this.previous=t,this.cells.forEach(function(t,i){n[i]=[],t.forEach(function(t,r){var s=e.cells[i][r],o=e.neighbours(i,r),a=0;(3===o||s&&2===o)&&(a=1),n[i][r]=a,!s&&a?e.addCell(i*e.boxSize,r*e.boxSize):s&&!a&&e.removeCell(i*e.boxSize,r*e.boxSize)})}),this.cells=n),window.requestAnimationFrame(this.render.bind(this))}}]),e}();t["default"]=r},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}i(3);var r=i(1),s=n(r);new s["default"]},function(e,t){}]);