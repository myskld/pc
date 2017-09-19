$(function(){
	var imgs = $(".box li"),
		len=imgs.length,
		winBox=$(".box").width(),
		startIndex=0,
		nextIndex=1,
		timer=null;
	
	
	//鼠标移入移出
	$(".recommend_carousel").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(move, 5000);
	}).mouseleave();
	//点击上页下页
	$(".recommend-header").on("click",".prve,.next",function(){
		clearInterval(timer);
		if($(this).is(".prve")){
			$(".box").animate({left:0+"px"},"fast");
			$(".prve").css({"border-color":"#efefef","color": "#eee"});
			$(".next").css({"border-color":"#bdbdbd","color": "#bdbdbd"});
		}
		if($(this).is(".next")){
			$(".box").animate({left:-1240+"px"},"fast");
			$(".prve").css({"border-color":"#bdbdbd","color": "#bdbdbd"});
			$(".next").css({"border-color":"#efefef","color": "#eee"});
		}
		timer = setInterval(move, 5000);
	});

	function move(){
		var _left = -1*nextIndex*(winBox/2);
		startIndex++;
		if(startIndex%2===0){
			$(".box").animate({left:0+"px"},"fast");
			$(".prve").css({"border-color":"#efefef","color": "#eee"});
			$(".next").css({"border-color":"#bdbdbd","color": "#bdbdbd"});
		}else{
			$(".box").animate({left:-1240+"px"},"fast");
			$(".prve").css({"border-color":"#bdbdbd","color": "#bdbdbd"});
			$(".next").css({"border-color":"#efefef","color": "#eee"});
		}
	}
});