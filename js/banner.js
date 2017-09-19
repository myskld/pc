$(function(){
	var imgs=$(".banner-container li"),
		len=imgs.length,
		startIndex = 0,
		nextIndex=1,
		timer = null,
		circle = null;


	//生成小圆点
	var html = "";
	for(var i = 0; i<len; i++){
		html += `<div class="${i===0?'current':''}"></div>`
	}
	$(".pages").append(html);
	circle = $(".pages div");
	//鼠标移入移出
	$(".carousel_container").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(move, 5000);
	}).mouseleave();
	//鼠标移入移出上页下页
	$(".slick-prev").hover(function(){
		$(".slick-prev").css({
			"background-color" : "rgba(0,0,0,.5)"
		});
	},function(){
		$(".slick-prev").css({
			"background-color" : "rgba(0,0,0,0)"
		});
	});
	$(".slick-next").hover(function(){
		$(".slick-next").css({
			"background-color" : "rgba(0,0,0,.5)"
		});
	},function(){
		$(".slick-next").css({
			"background-color" : "rgba(0,0,0,0)"
		});
	});
	
	//上页下页
	$(".slick-prev").click(function(){
		nextIndex = startIndex - 1;
		if(nextIndex < 0)
			nextIndex = len - 1;
		move();
	});
	$(".slick-next").click(function(){
		move();
	});


	//鼠标移入小圆点
	$(".pages").on("mouseenter","div",function(){
		var _index = $(this).index();
		if(_index === startIndex)
			return;
		nextIndex = _index;
		move();
	});
	function move(){
		//淡出
		$(imgs[startIndex]).fadeOut(400);
		//淡入
		$(imgs[nextIndex]).fadeIn(400);
		//小圆点
		$(circle[startIndex]).removeClass("current");
		$(circle[nextIndex]).addClass("current");

		startIndex = nextIndex;
		nextIndex++;
		if(nextIndex > len-1){
			nextIndex = 0;
		}
	}
});