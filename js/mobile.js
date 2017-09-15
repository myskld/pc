require(["config"], function(){
	require(["jquery", "template"], function($, template){
		$.getJSON("mock/mobile.json",{dataType:"jsonp"},function(data){
			var html = template("list_temp", {list: data})
			$(".home-floor-product").html(html);
		});
	});
});