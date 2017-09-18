require(["config"], function(){
	require(["jquery","template"], function($,template){
		console.log(123)
		$.getJONS("mock/nav-list.json", function(data){
			var html = template("nav_temp", {products : data});
			$("layout-header-nav-child").append(html);
		});
	});
});