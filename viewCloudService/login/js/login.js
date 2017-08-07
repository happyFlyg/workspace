$(function() {
   placHd();
   listenAll();
});
/**
 * [placHd description]
 */
function placHd() {
	$("input[type='text']").focus(function() {
		$(this).next(".placHd").hide();
	}).focusout(function(){
		if ($(this).val() == '') {
			$(this).next(".placHd").show();
		} else {
			$(this).next(".placHd").hide();
		}
	}) 
}
/**
 * UI监听
 */
function listenAll(){
	/**
	 * 登录按钮
	 */
	$(document).on('click','#loginBtn',function(){
		login();
	});
	/**
	 * 回车键
	 */
	$(document).keypress(function(e) {  
		if(e.which == 13) {  
			login();
		}  
	}); 
}

/**
 * 检查登录表单
 */
function checkLogin(){
	var userName = $.trim($('#userName').val());
	var pwd = $.trim($('#pwd').val());
	var flag = true;
	var accountReg = /^\w{3,20}$/;
	var passwordReg =  /^.{6,20}$/;
	var msg = '';
	if(!accountReg.test(userName)){
		msg += '账号格式为3-20位数字、字母、下划线！';
		flag = false;
	}
	if(!passwordReg.test(pwd)){
		if(!flag) msg += '<br/>';
		msg += '密码格式为6-20位任意字符！';
		flag = false;
	}
	if(!flag){
		layer.tips(msg , '#loginBtn', {
			tips: [1, '#570000']
		});
	}
	return flag;
}

/**
 * 登录方法
 */
function login(){
	if(!checkLogin()) return;
	var userName = $.trim($('#userName').val());
	var pwd = $.trim($('#pwd').val());
	var remindPassword = $('#remindPassword')[0].checked;
	var url = '';
	var data = {
			"userName":userName.toLowerCase(),
			"pwd":pwd,
			"remindPassword":remindPassword
	};
	$.post(url,data,function(json){
		if(json.success)
			window.location.replace('');
		else{
			layer.tips(json.err , '#loginBtn', {
				tips: [1, '#570000']
			});
		}
	});
}