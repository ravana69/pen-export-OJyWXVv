// Simple Dwitter Shim
// Created by Frank Force 2020
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

function u(t) { // dwitter code goes here

// https://www.dwitter.net/d/13273 - tiny starfield
x.fillRect(0,0,F=2e3,F);
for(i=1e3;i--;)x.clearRect((S(i)*1e9-t*(i+99)/9)%F-9,i*9%F,j=i%5+1,j)
  
// https://www.dwitter.net/d/18433 - sun and moon
for(i=3;i--;i|Y<0|!q&&x.fillText(q?'\u2600\uFE0F':unescape(`%uD83C%uDF1${(t*4/Math.PI+.5)%8+1|0}`),q?520:860-S(t)*699,q?765:600+Y))q=i-1,x.font=`${q?40:9}em"`,Y=C(t)*99
  
}

let x = c.getContext('2d');
let S = Math.sin;
let C = Math.cos;
let T = Math.tan;
let R = (r,g,b,a=1) => `rgba(${r|0},${g|0},${b|0},${a})`;

let loop = (frameTime) =>
{
  requestAnimationFrame(loop);
  
  // update user function
  u(frameTime/1e3);
}

loop();