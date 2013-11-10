var assert = function() {
	// arguments === parametor array
	// arguments = [x,y,b,obj,arr];
	var length = arguments.length, 
	testNode, i;
	if(arguments.length > 0) {
		// for문
		// i = 0;
		// length = 5;
		// i = 1; length = 5
		// i = 2; length = 5
		// i = 3;
		// i = 4;
		// i = 5;
		for(/*0번쨰*/i=0;/*1번째*/i<length;/*3번째*/i++) {
			/*2번째*/
			testNode = arguments[i].constructor ? arguments[i].constructor : arguments[i].prototype.constructor;
			// varible value = (if) ? true : false
			// if(arguments[i].constructor) { 
			// 	testNode = arguments[i].constructor
			// } else {
			// 	testNode = arguments[i].prototype.constructor
			// }
			console.log(typeof(arguments[i]));
			console.log(arguments[i]);
			console.log(testNode);
		}
		console.log("for end");
		// for문이 끝났을 때 이쪽에 코드 동작
	} else {
		console.log("error! enter the type check target!");
	}
};
Object.prototype.addEvent = function(eventer, func, bubbling) {
	if(this.addEventListener) { 
		this.addEventListener(eventer, func, bubbling);
	} else {
		eventer.replace(eventer, "on"+eventer);
		// this.attachEvent("on"+eventer, func);
		this.attachEvent(eventer, func);
	}
}
