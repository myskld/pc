define(["jquery", "cookie"], function($){
	$.ajax({
		url : "/html/include/header.html",
		type : "get",
		success : function(data) {
			$(".header").html(data);
		}
	});

	$(".layout-footer").load("/html/include/footer.html");
	$(".recommend-main").load("/html/include/recommend.html");
});