
/**
 * 密码修改成功后的询问框
 */
function openUpdatePwSuccessWin() {
	layer.closeAll('iframe'); //关闭所有的iframe层
	//询问框
	layer.confirm('密码修改成功！现在重新登录吗？', {
		btn: ['是', '否'] //按钮
	}, function() {
		$(window.headIframe.document).find('#exitBtn').click();
	});
}
/**
 * 设置div的高度
 */
function setDivHeight() {
	var h = $('body').height() - $('#headIframe').height();
	$('#mainIframe').height(h);
	$('#mainIframe').offset({
		top: 100,
		left: 0
	});
}
/**
 * 
 * 监听所有
 */
function listenAll() {
	/**
	 * [onresize description]
	 * 窗口大小变化resize事件
	 */
	window.onresize = function() {
		setDivHeight();
	};
}

/**
 * 打开编辑/添加警员|角色信息窗口
 */
function openIframe(node) {
	var n = $(node);
	layer.open({
		type: 2,
		title: n.attr('title'),
		shade: 0.4,
		maxmin: true, //开启最大化最小化按钮
		area: [n.attr('width'), n.attr('height')],
		content: n.attr('target')
	});
}
/**
 * 关闭编辑/添加警员|角色信息窗口
 */
function closeIframe() {
	layer.closeAll('iframe'); //关闭所有的iframe层
}

/**
 * 开始**************************
 */
$(function() {
	setDivHeight();
	listenAll();
});