$(function(){
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
	// loadCode();
	// 点击更换验证码
	/*$(".check_img").click(function(){
		loadCode();
		$("#code").value = "";
	});*/

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
				if(data.valid){
					$(".check_text").html("成功")
				}else{
					$(".check_text").html("验证码有误，请重新输入！")
				}
			}

		);
	});

	$(".btn-login").click(function(){
		var val = $(".inp-focus").val(),
			reg = /^\d{11}$/;
		if(val === ""){
			$(".tip-box").css({
				"visibility": "visible"
			});
		}else if(!reg.test(val)){
			$(".tip-font").html("请输入合法的手机号码");
			$(".tip-box").css({
				"visibility": "visible"
			});
		}
	});
	$(".main-form").delegate(".inp-focus,.account_check","focus",function(){
		if($(this).is(".inp-focus")){
			$(".fieldInput").css({
				"border-color":"#32A5E7"
			});
			$(this).keyup(function(){
				/*var len = $(this).val(),
					length = len.length;
				if(length >= 11){
					$(this).val(len.slice(0,10));
				}*/
				$(".tip-box").css({
					"visibility": "hidden"
				});
			});
		}
		if($(this).is(".account_check")){
			$(".geetest_holder").css({
				"border-color":"#32A5E7"
			});
		}
	});
	$(".main-form").delegate(".inp-focus,.account_check","blur",function(){
		if($(this).is(".inp-focus")){
			$(".fieldInput").css({
				"border-color":"#dadada"
			});
		}
		if($(this).is(".account_check")){
			$(".geetest_holder").css({
				"border-color":"#dadada"
			});
		}
	});


	$(".close-ico").click(function(){
		$(".tip-box").css({
			"visibility": "hidden"
		});
	});
	$(".ipt-cycode").focus(function(){
  		this.blur();
	});
});