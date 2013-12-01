"use strict";

// Lib Standard
// 2013.12.01
// Author : cho.eun
// contact : apes0123@gmail.com

// Type validation Function
// Falsy Values (JavaScript의 거짓값)

// NaN (Not a Number);
var x = 10 + "ooops"; // NaN
isNaN('ooops');
// 1, 2, 3, 4, 5
// 1 -> 5 -> 51
// index : "1";
// index + 5 === "15";
// index : 1; 
// index + 5 === 6
// parseInt();
// 컴파일러
// number로 강제로 넣는거.
// eval(강제호출);
// 일급객체언어
// 변수 객체가 들어가고
// 파라미터에 객체가 들어가고...
// Object _ Array 
var obj = {"x":"10"};
var arr = ["10"];
var nu = null;

console.log(typeof(obj)); // Type : Object
console.log(typeof(arr)); // Type : Object
console.log(typeof(nu)); // Type : Object

console.log(obj.constructor);
console.log(arr.constructor);

console.log(obj[0]);
console.log(arr[0]);

console.log(obj.length);
console.log(arr.length);

var isObj = function(val) { 
	if(val instanceof Array === true) {
		console.log("Array");
	} else if(val instanceof Object === true) {
		console.log("Object");
	}
}
isObj(obj);
isObj(null);
isObj(arr);
var std = "";
console.log(typeof(std));

var un;
console.log(typeof(un));

un = "hell world";
console.log(typeof(un));

// constructor
// Object.prototype;
// Array.prototype;
// Array.push();
// Array.pop();
// variable hoisting
var foo = function foo() { 
	var test, x, y;
	test = 1;
	x = function x() {return test + 1;}
	y = function y() {}
};
foo();
// JavaScript의 모든건 객체다.

// browser Testing
// User Agent Test
// 유저 에이전트
var nav = navigator;
console.log(nav);

var ua = nav.userAgent;

// string.match()
console.log(ua.match("Chrome/31"));
if(ua.match("Chrome/31") !== null) { }
if(ua.match("MSIE 7.0") !== null) { }
if(ua.match("MSIE") !== null) {};

var uaCheck = function uaCheck(args) {
	var args = ["MSIE 6", "MSIE 7","MSIE 8","MSIE 9", "Chrome"], i;
	for(i=0;i<args.length;i += 1) {
		if(ua.match(args[i]) !== null) {
			var klassName = args[i].replace("MSIE ", "ua-ie");
			document.body.className = klassName;
		};
	}
};

var mobCheck = function mobCheck() {
	var mob = ["iPhone", "Android"];
	for(i=0;i<mob.length;i+=1) {
		if(ua.match(mob[i]) !== null) {
			document.location.href = "m.nate.com";
		}
	}
}
// Event Bind
// touch Event (touch (Mobile, Touch Screen));
// click Event (click (Mouse, touch));

// Mobile
// Touch > Click (빨라요);

// node(div id="hello");
// var hello = document.querySelector("#hello");
var hello = document.createElement("div");
hello.innerHTML = "HELLOIWOROOWEPJKREWL;SRDKF";
hello.style.background = "#888";
hello.style.color = "#fff";
document.body.appendChild(hello);
var wln = function(text) {
	document.body.innerHTML += text + "<br/>";
}
// Touch
var tc = new Touch();
hello.addEventListener("touchstart", function() {
	document.body.innerHTML += "터치했지롱";
}, false);
document.addEventListener("touchmove", function() {
	document.body.innerHTML += "터치중이지롱";
	wln(event.changedTouches[0].pageX);
	wln(event.changedTouches[1].pageX);
});
hello.addEventListener("touchend", function() {
	document.body.innerHTML += "터치끝났지롱";
}, false);
