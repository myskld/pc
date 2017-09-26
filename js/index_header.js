$(function(){
	$(".left,.layout-user-downmenu").hover(function(){
		console.log(123)
		$(".layout-user-downmenu").css({
			"display": "block"
		});
	},function(){
		$(".layout-user-downmenu").css({
			"display": "none"
		});
	});
	//移入
	$(".header").delegate(".mzsj,.mlsj,.mzsx,.znpj", "mouseenter", function(){
		if($(this).is(".mzsj")){	
			$(".mzsj-list").css({
				display : "block"
			});
			$(".header-public").css({
				height : 150 + "px",
				display : "block",
				opacity : 1
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
		}else if($(this).is(".mlsj")){	
			$(".mlsj-list").css({
				display : "block"
			});
			$(".header-public").css({
				height : 150 + "px",
				display : "block",
				opacity : 1
			});
			var count = 0;
			var timer = setInterval(function(){
				count++;
				if(count == 5){
					$(".mlsj-list li:nth-child(1)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 10){
					$(".mlsj-list li:nth-child(2)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 15){
					$(".mlsj-list li:nth-child(3)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 20){
					$(".mlsj-list li:nth-child(4)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 25){
					$(".mlsj-list li:nth-child(5)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 30){
					$(".mlsj-list li:nth-child(6)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 35){
					$(".mlsj-list li:nth-child(7)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 40){
					$(".mlsj-list li:nth-child(8)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 40)
					clearInterval(timer);
			},1000/60);
		}else if($(this).is(".mzsx")){	
			$(".mzsx-list").css({
				display : "block"
			});
			$(".header-public").css({
				height : 150 + "px",
				display : "block",
				opacity : 1
			});
			var count = 0;
			var timer = setInterval(function(){
				count++;
				if(count == 5){
					$(".mzsx-list li:nth-child(1)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 10){
					$(".mzsx-list li:nth-child(2)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 15){
					$(".mzsx-list li:nth-child(3)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 20){
					$(".mzsx-list li:nth-child(4)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 25){
					$(".mzsx-list li:nth-child(5)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 30){
					$(".mzsx-list li:nth-child(6)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 30)
					clearInterval(timer);
			},1000/60);
		}else if($(this).is(".znpj")){	
			$(".znpj-list").css({
				display : "block"
			});
			$(".header-public").css({
				height : 150 + "px",
				display : "block",
				opacity : 1
			});
			var count = 0;
			var timer = setInterval(function(){
				count++;
				if(count == 5){
					$(".znpj-list li:nth-child(1)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 10){
					$(".znpj-list li:nth-child(2)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 15){
					$(".znpj-list li:nth-child(3)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 20){
					$(".znpj-list li:nth-child(4)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 25){
					$(".znpj-list li:nth-child(5)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 30){
					$(".znpj-list li:nth-child(6)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 35){
					$(".znpj-list li:nth-child(7)").animate({
						left : -60 + "px",
						opacity : 1,
					},600);
				}
				if(count == 35)
					clearInterval(timer);
			},1000/60);
		}
	});
	

	$(".header").delegate(".mzsj,.mlsj,.mzsx,.znpj", "mouseleave", function(){
		if($(this).is(".mzsj")){
			$(".header-public").css({
				height : 0,
				display : "none",
				opacity : 0
			});
			$(".mzsj-list").css({
				display : "none"
			});
			$(".mzsj-list li:nth-child(1)").animate({
				left : 0,
				opacity : 0,
			},100);
			$(".mzsj-list li:nth-child(2)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".mzsj-list li:nth-child(3)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".mzsj-list li:nth-child(4)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".mzsj-list li:nth-child(5)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
		}else if($(this).is(".mlsj")){
			$(".header-public").css({
				height : 0,
				display : "none",
				opacity : 0
			});
			$(".mlsj-list").css({
				display : "none"
			});
			$(".mlsj-list li:nth-child(1)").animate({
				left : 0,
				opacity : 0,
			},100);
			$(".mlsj-list li:nth-child(2)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".mlsj-list li:nth-child(3)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".mlsj-list li:nth-child(4)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".mlsj-list li:nth-child(5)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".mlsj-list li:nth-child(6)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".mlsj-list li:nth-child(7)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".mlsj-list li:nth-child(8)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
		}else if($(this).is(".mzsx")){
			$(".header-public").css({
				height : 0,
				display : "none",
				opacity : 0
			});
			$(".mzsx-list").css({
				display : "none"
			});
			$(".mzsx-list li:nth-child(1)").animate({
				left : 0,
				opacity : 0,
			},100);
			$(".mzsx-list li:nth-child(2)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".mzsx-list li:nth-child(3)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".mzsx-list li:nth-child(4)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".mzsx-list li:nth-child(5)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".mzsx-list li:nth-child(6)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
		}else if($(this).is(".znpj")){
			$(".header-public").css({
				height : 0,
				display : "none",
				opacity : 0
			});
			$(".znpj-list").css({
				display : "none"
			});
			$(".znpj-list li:nth-child(1)").animate({
				left : 0,
				opacity : 0,
			},100);
			$(".znpj-list li:nth-child(2)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".znpj-list li:nth-child(3)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".znpj-list li:nth-child(4)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".znpj-list li:nth-child(5)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".znpj-list li:nth-child(6)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
			$(".znpj-list li:nth-child(7)").animate({
				left : 0 + "px",
				opacity : 0,
			},100);
		}	
	});
});









// $(".header .mzsj").mouseenter(function(){		
	// 	$(".mzsj-list").css({
	// 		display : "block"
	// 	});
	// 	var count = 0;
	// 	var timer = setInterval(function(){
	// 		count++;
	// 		if(count == 5){
	// 			$(".mzsj-list li:nth-child(1)").animate({
	// 				left : -60 + "px",
	// 				opacity : 1,
	// 			},600);
	// 		}
	// 		if(count == 10){
	// 			$(".mzsj-list li:nth-child(2)").animate({
	// 				left : -60 + "px",
	// 				opacity : 1,
	// 			},600);
	// 		}
	// 		if(count == 15){
	// 			$(".mzsj-list li:nth-child(3)").animate({
	// 				left : -60 + "px",
	// 				opacity : 1,
	// 			},600);
	// 		}
	// 		if(count == 20){
	// 			$(".mzsj-list li:nth-child(4)").animate({
	// 				left : -60 + "px",
	// 				opacity : 1,
	// 			},600);
	// 		}
	// 		if(count == 25){
	// 			$(".mzsj-list li:nth-child(5)").animate({
	// 				left : -60 + "px",
	// 				opacity : 1,
	// 			},600);
	// 		}

	// 		if(count == 25)
	// 			clearInterval(timer);
	// 	},1000/60);
	// });

	//移出