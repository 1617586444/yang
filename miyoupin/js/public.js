//获取ID
function $id(id){
 			return document.getElementById(id);
 		}

//随机数
function getRand(minNum,maxNum){
return parseInt(Math.random()*(maxNum-minNum)+1)+minNum;
}
				
//获取时间的字符串日期格式
function dateToString(date){
	var week=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
	var y=date.getFullYear();
	var m=date.getMonth()+1;
	var w=date.getDay();//0-6
	var d=date.getDate();//day
	var h=date.getHours();
	var f=date.getMinutes();
	var s=date.getSeconds();
	return y+"年"+dbnum(m)+"月"+dbnum(d)+"日"+dbnum(h)+":"+dbnum(f)+":"+dbnum(s)+week[w];		
}
function dbnum(num){
 return num/10 <1 ? 0 +""+num:num;	
}

//添加一个节点到指定某个元素后面
	function inserAfter(targetEle,newEle){
		var parentEle=targetEle.parentNode;
		if(parentEle.lastElementChild===targetEle){
			parentEle.appendChild(newEle);
		}else{
			parentEle.insertBefore(newEle,targetEle.nextElementSibling);
		}
	}
//获取从某日到某日的秒数
	function diff(startTime,endTime){
	   return (endTime.getTime()-startTime.getTime())/1000;
	}
//随机获取颜色
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";
	var rand = 0;
	for (var i = 0; i < 6; i++) {
		rand = getRand(0,15);
		color += str[rand];
	}
	return color;
}

//兼容IE8以及以下的浏览器button属性
function getButton(eve){
	if(eve){
		return eve.button;
	}else{
		var button = event.button;
		switch(button){
			case 1:
				return 0;
			case 4:
				return 1;
			case 2:
				return 2;	
		}
	}
}

//兼容IE8事件流阻止冒泡：
function stopBubbling(eve){
	var e=eve || event
	if(typeof e.stopPropagation =="undefined"){
		e.cancelBubble=true;
	}else{
		e.stopPropagation();
	}	
}
//兼容IE浏览器阻止事件冒泡
function canCel(){
return e.stopPropagation ? e.stopPropagation() :  e.cancleBubble = true;
}

//阻止事件默认行兼容IE
function preventdefault(eve){
		var e = eve || event;
		if(typeof e.preventDefault == "undefined"){
			e.returnValue = false;
		}else{
			e.preventDefault();
		}
	}

//ie事件监听兼容
function addEvent(obj,type,fn){
	if(obj.addEventListener){
		obj.addEventListener(type,fn);		
	}else{
		obj.attachEvent("on"+type,fn);
	}
}

//跨浏览器兼容IE8获取class命名的元素集合
   function getEleByClass(className){
   	var tag=document.getElementsByTagName("*");
   	var eleArr=[];
   	for (var i = 0; i < tag.length; i++) {
   		if(tag[i].className==className){
   			eleArr.push(tag[i]);
   		}
   	}
   	return eleArr;
   }

//跨浏览器计算物体宽度
function getStyle(ele,attr) {//返回的是一个字符串
	return window.getComputedStyle ? window.getComputedStyle(ele)[attr] : ele.currentStyle[attr];
}


//判断身份证是否正确
  function isIdCardReg(idCard){
        //判断是否闰年
    var y=idCard.substr(6,4);//截取年份
    var m=idCard.substr(10,2);//截取月份	    
    var dStr="";
 	switch(m){
   		case "01":
   		case "03":	   		
   		case "05":
   		case "07":	   		
   		case "08":
   		case "10":	   		
   		case "12":
   			dStr="(0[1-9]|(1|2)\\d|30|31)";
   			break;
   		case "04":
   		case "06":
   		case "09":
   		case "011":
   			dStr="(0[1-9]|(1|2)\\d|30)";
   			break;
   		case "02":
	 	if(y%4==0 && y%100!=0 || y%400==0){
			dStr="(0[1-9]|(1|2)\\d)";
	   	}else{
		   	dStr="(0[1-9]|1\\d|2[0-8])";
		}
   			break;
	 }
  var idCardStr="^[1-9]\\d{5}(1(8|9)|2[0-2])\\d{2}(0[1-9]|1[0-2])"+dStr+"\\d{3}[0-9Xx]$";
  	  var reg=new RegExp(idCardStr);
  	  return reg.test(idCard); 
  }


//获取浏览器中选择文字的问题兼容
	var selecteText;
	if(window.getSelection){//标准模式
		selecteText=window.getSelection().toString();
	}else{//ie系列
		selecteText=document.selection.createRange().text;
	}


//封装一个单机事件
	/*
	 
	 * id 要绑定单击响应的函数的对象id的属性
	 * fun 事件的回调函数，当单击元素时，改函数会被触发
	 * */

	function click(id,fun){
		var btn=document.getElementById(id)
		btn.onclick=fun;
	}

	//定义一个函数，用来向某个元素添加指定class属性值
	/*
	 
	 * 参数：
	 * 	obj 要添加的class属性的元素
	 * 	cn 要添加的class值
	 * 
	 * */
	function addClass(obj,cn){
		if(!hasClass(obj,cn)){
			obj.className+=" "+cn;
		}
	}
	
	/*
	 	判断一个函数中是否有指定class值
	 * 	如果有该class则返回true 没有则false
	 *  
	 * 
	 * */
	function hasClass(obj,cn){
		//判断obj中有没有cn class
		//创建一个正则表达式
		var reg=new RegExp("\\b"+cn+"\\b");
		return reg.test(obj.className);
	}
	

	//删除一个指定元素的class值
	
	
	function removeClass(obj,cn){
		//创建一个正则表达式
		var reg=new RegExp("\\b"+cn+"\\b");
		//删除一个class
		obj.className=obj.className.replace(reg, "")
		
	}

	/*
	 
	 * toggleClass可一用来切换一个类
	 * 如果有该元素则删除
	 * 没有则添加
	 * 
	 * */
	

	function toggleClass(obj,cn){
		//判断呢obj中是否有cn
		if(hasClass(obj,cn)){//有
			removeClass(obj, cn);
		}else{
			addClass(obj , cn);
		}
	}
