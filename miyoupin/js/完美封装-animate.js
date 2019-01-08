

/*-----------------------------------分割线---------------------------------*/
/*
 * 增加了链式运动
 * 
 * 
 * */


	function animate(obj, fn) { // 2 ，减少了参数接收个数，让函数使用更方便
	
	if(typeof obj.speedTime == "undefined"){// 3.对时间毫秒数的处理 调用值可传可不传
		obj.speedTime=30;
	}else if(obj.speedTime == "slow"){
		obj.speedTime=40;
	}else if(obj.speedTime == "quockly"){
		obj.speedTime=20;
	}else if(obj.speedTime == "fast"){
		obj.speedTime=10;
	}

		clearInterval(obj.ele.timer);
		obj.ele.timer = setInterval(function() {
		var flag=true;//所有都到达目标值
		for(var arrKey in obj.param){//把样式和目标值整合
			//obj.param[key]目标值target
			//arrKey:attr
		var current = 0;
		if(arrKey == "opacity") {
			current = getStyle(obj.ele, arrKey)* 100;
		} else {
			current = parseInt(getStyle(obj.ele, arrKey));
		}
			var speed = (obj.param[arrKey] - current) / 10;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			console.log(parseInt(getStyle(obj.ele, arrKey)), obj.param[arrKey] - current);
			if(current != obj.param[arrKey]) { //1. 当前值等于目标值
				flag=false;
		}
		if(arrKey == "opacity") {//透明度的赋值
			obj.ele.style[arrKey] = (current + speed) / 100;
		}else if(arrKey == "zIndex"){//层次的赋值
			obj.ele.style[arrKey] =obj.param[arrKey];
		}else {//其他样式的赋值
			obj.ele.style[arrKey] = current + speed + "px";
		}
		
		}		
		if(flag){//清除定时器
			clearInterval(obj.ele.timer)
			if(typeof fn != "undefined") {
				fn();
			}
		}
	}, obj.speedTime)
}
 
 
 	//跨浏览器计算物体宽度
    function getStyle(ele,attr) {
        return window.getComputedStyle ? window.getComputedStyle(ele)[attr] : ele.currentStyle[attr];
    }
