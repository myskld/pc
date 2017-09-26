require(["config"],function(){
	require(["jquery","load"],function(){
		

	});
	require(["jquery","template"],function($, template){
		$.getJSON("/mock/list.json",function(data){
			var html = template("pro_list", {product_list: data});
			$(".goods-list-wrap").html(html);
		});
	});
});

$(function(){

});