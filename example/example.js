"use strict";
/*
          _____                    _____                    _____                    _____                    _____          
         /\    \                  /\    \                  /\    \                  /\    \                  /\    \         
        /::\____\                /::\    \                /::\____\                /::\    \                /::\    \        
       /::::|   |               /::::\    \              /:::/    /               /::::\    \              /::::\    \       
      /:::::|   |              /::::::\    \            /:::/    /               /::::::\    \            /::::::\    \      
     /::::::|   |             /:::/\:::\    \          /:::/    /               /:::/\:::\    \          /:::/\:::\    \     
    /:::/|::|   |            /:::/__\:::\    \        /:::/____/               /:::/__\:::\    \        /:::/__\:::\    \    
   /:::/ |::|   |           /::::\   \:::\    \       |::|    |               /::::\   \:::\    \      /::::\   \:::\    \   
  /:::/  |::|   | _____    /::::::\   \:::\    \      |::|    |     _____    /::::::\   \:::\    \    /::::::\   \:::\    \  
 /:::/   |::|   |/\    \  /:::/\:::\   \:::\    \     |::|    |    /\    \  /:::/\:::\   \:::\    \  /:::/\:::\   \:::\____\ 
/:: /    |::|   /::\____\/:::/  \:::\   \:::\____\    |::|    |   /::\____\/:::/__\:::\   \:::\____\/:::/  \:::\   \:::|    |
\::/    /|::|  /:::/    /\::/    \:::\  /:::/    /    |::|    |  /:::/    /\:::\   \:::\   \::/    /\::/   |::::\  /:::|____|
 \/____/ |::| /:::/    /  \/____/ \:::\/:::/    /     |::|    | /:::/    /  \:::\   \:::\   \/____/  \/____|:::::\/:::/    / 
         |::|/:::/    /            \::::::/    /      |::|____|/:::/    /    \:::\   \:::\    \            |:::::::::/    /  
         |::::::/    /              \::::/    /       |:::::::::::/    /      \:::\   \:::\____\           |::|\::::/    /   
         |:::::/    /               /:::/    /        \::::::::::/____/        \:::\   \::/    /           |::| \::/____/    
         |::::/    /               /:::/    /          ~~~~~~~~~~               \:::\   \/____/            |::|  ~|          
         /:::/    /               /:::/    /                                     \:::\    \                |::|   |          
        /:::/    /               /:::/    /                                       \:::\____\               \::|   |          
        \::/    /                \::/    /                                         \::/    /                \:|   |          
         \/____/                  \/____/                                           \/____/                  \|___|          
                                                                                                                             
*/
/* 
	javascript 약간 유두리 있는 언어..?
	잘못된 코딩
	변수 선언시에 var 붙여줘야되는데, 안붙인다던가...
*/
/*
	1. selector 함수
*/

var example = function(node) {
	return example.dfn.init(node);
}

example.dfn = example.prototype = {
	init : function(node) {
		if(!node) {
			// 아무것도 없는, target을 지정 안하고 쓰고싶을 때,
			return this;
		}
		if(typeof(node) === "string") { 
			// selector를 활용 (querySelectorAll)
			this.targetNode = document.querySelectorAll(node);
			// selector로 불러온 갯수가 0개일 경우
			// selector로 불러온 갯수가 1개일 경우
			// 그 이상일 경우
			if(this.targetNode.length === 0) {
				console.log("셀렉터에 문제가 있어. 확인해봐");
			} else if(this.targetNode.length === 1) {
				this.targetNode = this.targetNode[0];
				// var tmpTarget = this.targetNode[0];
				// this.targetNode = tmpTarget;
				// tmpTarget = null;
			}
			return this;
		} else {
			// 문서의 기본 객체를 활용하고 싶을 때
			this.targetNode = node;
			return this;
		}
	}
}
// <div id="hello"></div>
// example("#hello");
// --> [<div id="hello"></div>]
// ----> <div id="hello"></div>
// 예외처리가 필요해요.

// <div id="hello">
//     <div class="chicken"></div> 
//     querySelector는 1개만.
//     <div class="chicken"></div>
// </div>
// example("#hello .chicken");
// --> [<div class="chicken"></div>, <div class="chicken"></div>]

// example("#hell .chicken");
// --> 유효하지 않은 셀렉터
// 대응해야 되는 상황
// 1. 불러온 갯수가 0개일 경우 (selector가 잘못됨)
// 2. 불러온 갯수가 1개일 경우 (Array -> Object)
// 3. 불러온 갯수가 2개 이상일 경우 (Array)
// 4. 문서의 기본객체를 활용하고 싶을 경우
//    document, window, navigator
//    example(document)
// 5. 아무것도 없이 제어하고 싶을 경우 (window)
// example()

// 다음 주일지.. 다담주일지...
// 일주일
// Event Binding
// Attribute Find
// CSS 속성 불러오는 거
