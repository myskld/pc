require(["config"], function(){
	//手机列表部分
	require(["jquery", "template"], function($, template){
		$.getJSON("mock/mobile.json",{dataType:"jsonp"},function(data){
			var html = template("list_temp", {list: data})
			$(".home-floor-product").html(html);
		});
	});
	/*//导航滑动部分
	require(["jquery","template"], function($,template){
		$.getJSON("mock/nav-list.json", function(data){
			console.log(data)
			var html = template("nav_temp", {products : data});
			$("layout-header-nav-child").append(html);
		});
	});*/
});