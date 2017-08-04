/**
 * 监听所有
 */
function listenAll(){
	// 回车键事件  
	$(document).keypress(function(e) {  
		if(e.which == 13) {  
		   $('#submit').click(); 
		}
	});
	// 密码框屏蔽空格
	if(BrowserUtil.isIE()){
		var node = $('input[type="password"]');
		node.each(function(){
			//现代型事件绑定
			this.attachEvent("onpropertychange", function(e){
				var _this = e.srcElement, oldVal = _this.value;
				if(e.propertyName == "value" && /\s/g.test(oldVal)){
					_this.value = oldVal.replace(/\s/g,'');
				}
			});
		});
	}else{
		$('input[type="password"]').on('input', function() {
			$(this).val($(this).val().replace(/\s/g,''));
		});
	}
}
/**
 * 修改密码
 */
function updatePw(){
	var oldPw = $('#oldPw').val();
	var newPw = $('#newPw').val();
	var confirmPw = $('#confirmPw').val();
	var url = 'policemanController.do?updatePw';
	var data = {"oldPw":oldPw,"newPw":newPw,"confirmPw":confirmPw};
	$.post(url,data,function(json){
		if(json.success){
			$(window.top.document).find('#updatePwSuccessBtn').click();
		}else{
			layer.tips(json.err , '#submit', {
				tips: [1, '#f93f00']
			});
		}
	});
}
/**
 * 开始************************************
 */
$(function(){
	listenAll();
});