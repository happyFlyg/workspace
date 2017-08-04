/**
 * 跳转到指定页面
 * @param node
 */
function gotoLink(node){
	$('.active').removeClass('active');
	$(node).addClass('active');
	$(node).children('ul').toggle();
	$(node).find('li').addClass('active');
	var url = $(node).attr('target');
	window.parent.contentFrame.location.replace(url);
}
/**
 * 阻止事件冒泡
 */
function stopProgration(event){
	event.stopPropagation(); 
}
/**
 * 阻止事件冒泡调用
 */
function stopTwoLevelPro(){
	$('.second-level').click(stopProgration);
}
/**
 * 初始化时自动跳转
 */
function autoLink(){
	$('li').first().click();
}
/**
 * 开始*****************************************
 */
$(function(){
	autoLink();
	stopTwoLevelPro()
});