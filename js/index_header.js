$(function(){
	$(".header .mzsj,.mlsj,.mzsx,.znpj").mouseenter(function(){
		
	});
	$(".header .mzsj,.mlsj,.mzsx,.znpj").mouseleave(function(){
		
	});

	//移入
	$(".header .mzsj").mouseenter(function(){
		$(".header-public").css({
			height : 150 + "px",
			opacity : 1
		});
		$(".mzsj-list").css({
			display : "block"
		});
		var count = 0;
		var timer = setInterval(function(){
			count++;
			if(count == 5){
				$(".mzsj-list li:nth-child(1)").animate({
					left : -60 + "px",
					opacity : 1,
				},600);
			}
			if(count == 10){
				$(".mzsj-list li:nth-child(2)").animate({
					left : -60 + "px",
					opacity : 1,
				},600);
			}
			if(count == 15){
				$(".mzsj-list li:nth-child(3)").animate({
					left : -60 + "px",
					opacity : 1,
				},600);
			}
			if(count == 20){
				$(".mzsj-list li:nth-child(4)").animate({
					left : -60 + "px",
					opacity : 1,
				},600);
			}
			if(count == 25){
				$(".mzsj-list li:nth-child(5)").animate({
					left : -60 + "px",
					opacity : 1,
				},600);
			}

			if(count == 25)
				clearInterval(timer);
		},1000/60);
	});

	//移出

	$(".header .mzsj").mouseleave(function(){
		$(".header-public").css({
			height : 0,
			opacity : 0
		});
		$(".mzsj-list").css({
			display : "none"
		});
		$(".mzsj-list li:nth-child(1)").animate({
			left : 0,
			opacity : 0,
		},100)
		$(".mzsj-list li:nth-child(2)").animate({
			left : 0 + "px",
			opacity : 0,
		},100)
		$(".mzsj-list li:nth-child(3)").animate({
			left : 0 + "px",
			opacity : 0,
		},100)
		$(".mzsj-list li:nth-child(4)").animate({
			left : 0 + "px",
			opacity : 0,
		},100)
		$(".mzsj-list li:nth-child(5)").animate({
			left : 0 + "px",
			opacity : 0,
		},100)
	});
});