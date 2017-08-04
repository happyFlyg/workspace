$(function(){
	cancelSet();
})
/**
 * 打开修改密码
 */
function cancelSet(){
	$("#setPw").click(function(){
		$("#password").val('');
		$("#passwordConfirm").val('');
		$("#setPwForm").toggle(200);
	});
	$("#cancelSetPw").click(function(){
		$("#setPwForm").hide(200);
	});
/*	$("#setPwSave").click(function(){
		$("#setPwForm").hide(200);
	});
	*/
}

/**
 * 退出登录
 */
function exit(){
	var url = 'policemanController.do?exit';
	var data = null;
	$.post(url,data,function(json){
		if(json.success){
			window.top.location.replace('policemanController.do?gotoLogin');
		}
	});
}