$(function(){
	require(["config"],function(){
		require(["jquery"],function($){
			$(".btn-login").click(function(){
				var _user = $(".focus").val(),
					_pass = $(".in-focus").val();
				$.post(
					"http://localhost/login.php",
					{username:_user,password:_pass},
					function(data){
						if(data.status == 1){
							location = "/index.html"
						}else{
							$(".tip-font").html("账户不存在");
							$(".tip-box").css({
								"visibility": "visible"
							});
						}
					},
					"json"
				);
				return false;
			});
		});
	});
	var istrue = $(".check_text").prop("isTrue");
	console.log(istrue)
	function loadCode(){
		$.ajax({
			type:"get",
			url:"http://route.showapi.com/932-2",
			data:{
				showapi_appid: "45038",
				showapi_sign: "0fbec527acb4413c9a4630fbc2266dff",
				length : 4
			},
			datatype:"json",
			success:function(data){
				var data=data.showapi_res_body;
				$(".check_img").prop("src", data.image);
				$(".check_img").prop("sid", data.sid);

			}
		});
	}
	loadCode();
	// 点击更换验证码
	$(".check_img").click(function(){
		loadCode();
		$(".check_info").val("");
	});

	$(".check_info").blur(function(){
		$.getJSON(
			"http://route.showapi.com/932-1",
			{
				showapi_appid: "45038",
				showapi_sign: "0fbec527acb4413c9a4630fbc2266dff",
				checkcode: this.value,
				sid: $(".check_img").prop("sid")
			},
			function(data){
				data = data.showapi_res_body;
				if(!data.valid){
					$(".check_text").html("验证码有误，请重新输入！");
				}else{
					$(".check_text").prop("isTrue", true);
				}
			}
		);
	});
	/*********************************************************************/
	$(".main-form").delegate(".focus,.in-focus,.check_info,.ipt-info,.verification-info","focus",function(){
		if($(this).is(".focus")){
			$(".onblue").css({
				"border-color":"#32A5E7"
			});
			$(this).keyup(function(){
				$(".tip-box").css({
					"visibility": "hidden"
				});
			});
		}
		if($(this).is(".in-focus")){
			$(".fieldInput").css({
				"border-color":"#32A5E7"
			});
			$(this).keyup(function(){
				$(".tip-box").css({
					"visibility": "hidden"
				});
			});
		}
		if($(this).is(".check_info")){
			$(".geetest_holder").css({
				"border-color":"#32A5E7"
			});
			$(this).keyup(function(){
				$(".tip-box").css({
					"visibility": "hidden"
				});
			});
		}
		if($(this).is(".ipt-info")){
			$(".onblue").css({
				"border-color":"#32A5E7"
			});
			$(this).keyup(function(){
				$(".tip-box").css({
					"visibility": "hidden"
				});
			});
		}
		if($(this).is(".verification-info")){
			$(".geetest_holder").css({
				"border-color":"#32A5E7"
			});
		}
	});
	$(".main-form").delegate(".focus,.in-focus,.check_info,.ipt-info,.verification-info","blur",function(){
		if($(this).is(".focus")){
			$(".onblue").css({
				"border-color":"#dadada"
			});
		}
		if($(this).is(".in-focus")){
			$(".fieldInput").css({
				"border-color":"#dadada"
			});
		}
		if($(this).is(".check_info")){
			$(".geetest_holder").css({
				"border-color":"#dadada"
			});
		}
		if($(this).is(".ipt-info")){
			$(".onblue").css({
				"border-color":"#dadada"
			});
		}
		if($(this).is(".verification-info")){
			$(".geetest_holder").css({
				"border-color":"#dadada"
			});
		}
	});
	/********************************************************************************/
	$(".btn-login").click(function(){
		var valOne = $(".focus").val(),
			valTwo = $(".in-focus").val();
		if(valOne === "" || valTwo === ""){
			$(".tip-box").css({
				"visibility": "visible"
			});
		}else if(!(valOne === "" || valTwo === "")){
			$(".tip-font").html("请输入验证码");
			$(".tip-box").css({
				"visibility": "visible"
			});
		}/*else if(!(valOne === "" || valTwo === "")&&isTrue){

		}*/
	});
	/*********************************************************************************/
	$(".close-ico").click(function(){
		$(".tip-box").css({
			"visibility": "hidden"
		});
	});
	/******************************************************************************/
	$(".tab-title").delegate("#toAccountLogin,#toVCodeLogin","click",function(){
		if($(this).is("#toVCodeLogin")){
			$("#toVCodeLogin").css({
				"color":"#32A5E7"
			});
			$("#toAccountLogin").css({
				"color":"#515151"
			});
			$(".cycode-selectbox").css({
				"display":"block"
			});
			$(".ipt-account").css({
				"display":"none"
			});
			$(".fieldInput").css({
				"display":"none"
			});
			$(".check").css({
				"display":"none"
			});
			$(".account_check").css({
				"display":"none"
			});
			$(".verification-code").css({
				"display":"block"
			});
			$(".geetest_holder").css({
				"margin-bottom":"37px"
			});
		}
		if($(this).is("#toAccountLogin")){
			$("#toAccountLogin").css({
				"color":"#32A5E7"
			});
			$("#toVCodeLogin").css({
				"color":"#515151"
			});
			$(".ipt-account").css({
				"display":"block"
			});
			$(".cycode-selectbox").css({
				"display":"none"
			});
			$(".fieldInput").css({
				"display":"block"
			});
			$(".check").css({
				"display":"block"
			});
			$(".account_check").css({
				"display":"block"
			});
			$(".verification-code").css({
				"display":"none"
			});
			$(".geetest_holder").css({
				"margin-bottom":"20px"
			});
		}
	});
});