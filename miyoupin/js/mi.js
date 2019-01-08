

window.onload=function(){
	var ul=$id("ul");
		var ol=$id("ol");
		var left=$id("left");
		var right=$id("right");
		var bnner=$id("bnner");
		var ulLi=ul.children;
		var olLi=ol.children;
		var index=0;
		var timer=setInterval(autoPlay,2500);
		//console.log(ulLi.length)
		function autoPlay(){
			if(index == ulLi.length-1){
				ul.style.left = 0;
				index=1;
			}else{
				index++;
			}
			exclusive();
			olLi[index == olLi.length ? 0 : index].className="active";
			animate({
				ele:ul,
				param:{
					left:-index*858
				},
				speedTime:20
			});
		}
		//封装一个排他处理的函数
		function exclusive(){
			for (var i = 0; i < olLi.length; i++) {
				olLi[i].className="";
			}
		}
		left.onclick=function(){
			//index++;
			if(index == 0){
				ul.style.left = 0;
				index=0;
			}else {
				index--;
			}
			exclusive();
			olLi[index == olLi.length ? 0 : index].className="active";
			animate({
				ele:ul,
				param:{
					left:-index*858
				},
				speedTime:20
			});
		}
		
			right.onclick=function(){
			//index++;
			if(index == ulLi.length-1){
				index=ulLi.length-1;
			}else {
				index++;
			}
			exclusive();
			olLi[index == olLi.length ? 0 : index].className="active";
			animate({
				ele:ul,
				param:{
					left:-index*858
				},
				speedTime:20
			});
		}
		
		//移入图片时停止轮播
		ul.onmouseover=function(){
			clearInterval(timer);	
		}
		//移出时继续轮播
		ul.onmouseout=function(){
			timer=setInterval(autoPlay,2500);	
		}
		$(function(){
			$(".swiper ul li").click(function(){
				location.href="michild.html";
			});
			
			$(window).scroll(function(){
			    var $top = $("body,html").scrollTop();
			    console.log($top)
			    if($top >= 500){
			    	$(".warpper_banner").css("margin-top","76px")
			    	$(".wrapper_nav").addClass("header_fixed");
			    }else{
		    		$(".wrapper_nav").removeClass("header_fixed");
		    		$(".warpper_banner").css("margin-top","0")
		    	}
		    
			});
			$(".icon-gwc").click(function(){
				location.href="shopCar.html";
			})
		})

	//案例商品倒计时：
	//设置活动开始时间
	var startTime=new Date();
	//设置活动结束时间
	var endTime=new Date("2048/12/4 21:20:50");
	//设置时间差
	var s=diff(startTime,endTime);

	function showTime(){
		if(s<0){
		$id("showTime").innerHTML="<span style='color: red;'>活动时间到，商品已经过期！</span>"
		return;
		}
		console.log(s/3600/24/12);
		var houre=s/3600;
		var d=parseInt(houre/24);
		var h=parseInt((houre/24-d)*24)
		var f=parseInt(((houre/24-d)*24-h)*60);
		var m=parseInt((((houre/24-d)*24-h)*60-f)*60);
	//	$id("showTime").innerHTML="距离活动结束还有"+d+"天"+h+"时"+f+"分"+m+"秒";
		$id("time").innerHTML=dbnum(h);
		$id("minute").innerHTML=dbnum(f);
		$id("second").innerHTML=dbnum(m);
	}
	showTime();
	 var time=setInterval(function(){
		s--;
		if(s<0){
		clearInterval(time);
		}
		showTime();
		console.log(s)
	},1000);
		
		function dbnum(num){
		 return num/10 <1 ? 0 +""+num:num;	
		}
}

