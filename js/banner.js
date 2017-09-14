$(function(){
	var imgs = $(".banner-container > li"),
		len = imgs.length,
		startTime = 0,
		nextTime = 1,
		timer = null;

 	timer = setInterval(move, 3000)



	function move(){
		imgs[startTime].fedeOut(1000);
		imgs[nextTime].fedeIn( 1000);

		startTime = nextTime;
		nextTime++
		if(nextTime >= len){
			nextTime = 0;
		}

	}



























































	$(".banner-nav").delegate(".banner-nav-list > li:nth-child(1)", "mouseenter", function(){
		$(".banner-sj-list").css({
			display : "block"
		})
	});
	$(".banner-nav").delegate(".banner-nav-list > li:nth-child(1)", "mouseleave", function(){
		$(".banner-sj-list").css({
			display : "none"
		})
	});
});