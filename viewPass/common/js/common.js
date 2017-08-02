/** 
 * 设置未来(全局)的AJAX请求默认选项 
 * 主要设置了AJAX请求遇到Session过期的情况 
 */  
$.ajaxSetup({  
    complete: function(xhr,status) {  
        var sessionStatus = xhr.getResponseHeader('sessionStatus');  
        if(sessionStatus == 'timeout') {  
        	window.top.location.replace('policemanController.do?gotoLogin');               
        }  
    }  
}); 
/**
 * 屏蔽鼠标右键
 */
document.oncontextmenu = function(){
	    return false;
 }

/**
 * 字符类工具
 */
var StringUtil = {
	isNone : function(s) {
		if (s == null || (typeof s == 'undefined') || $.trim(s) == '')
			return true;
		return false;
	},
	removeEndZero : function(s){
		return s.replace(/(00)+$/i,'');
	},
	getPrefix : function(str , n){
		return str.substr(0 , n);
	},
	/**
	 * 去除无锡市公安局惠山分局
	 */
	removePrefix : function (s){
		return s.replace('无锡市公安局惠山分局','').replace('无锡市公安消防支队惠山区公安','');
	}
}
/**
 * 组织类工具
 */
var orgUtil = {
	/**
	 * 生成1级组标签
	 * @param id
	 */
	createRootOrg : function(id){
		var test = $('#orgList');
		if(test == undefined) return;
		var orgList = test.find('p');	
		var json = {root:null};	//总和
		
		var firstOrgList = [{orgNo:"-1",orgName:"全部",children:[]}];	//1级组
		
		orgList.each(function(){
			var t = $(this);
			var orgNo = t.attr('orgNo');
			var orgName = StringUtil.removePrefix(t.attr('orgName'));
			var len = StringUtil.removeEndZero(t.attr('orgNo')).length;
			switch(len){
				case 8:
					firstOrgList.push({orgNo:orgNo,orgName:orgName});
					break;
				default:
					break;
			}
		});

		json.root = firstOrgList;	//总和赋值
		
		//生成标签
		var html = '<ul class="rootul">';
		$(json.root).each(function(){
			var orgNo = this.orgNo;
			var orgName = this.orgName;
			html += '<li ><span orgNo="'+orgNo+'" class="orgoption">'+orgName+"</span></li>";
		});
		html += "</ul>";
		$('#orgs').html(html);
		if(BrowserUtil.isIE8()){
			$('#orgs ul').css('border','1px solid #333');
		}
		$('#orgList').remove();
	},
	/**
	 * 生成所有组标签
	 * @param id
	 */
	createOrg : function(id){
		var test = $('#orgList');
		if(test == undefined) return;
		var orgList = test.find('p');	
		var json = {root:null};	//总和
		
		var firstOrgList = [{orgNo:"-1",orgName:"全部",children:[]}];	//1级组
		var secondOrgList = [];	//2级组
		var thirdOrgList = [];	//3级组
		
		orgList.each(function(){
			var t = $(this);
			var orgNo = t.attr('orgNo');
			var orgName = StringUtil.removePrefix(t.attr('orgName'));
			var len = StringUtil.removeEndZero(t.attr('orgNo')).length;
			switch(len){
				case 8:
					firstOrgList.push({orgNo:orgNo,orgName:orgName,children:[]});
					break;
				case 10:
					secondOrgList.push({orgNo:orgNo,orgName:orgName,children:[]});
					break;
				case 12:
					thirdOrgList.push({orgNo:orgNo,orgName:orgName});
					break;
				default:
					break;
			}
		});
		
		//循环2级组
		$(secondOrgList).each(function(){
			var t2 = this;
			var orgNo2 = t2.orgNo;
			//循环3级组
			$(thirdOrgList).each(function(){
				var t3 = this;
				var orgNo3 = t3.orgNo;
				if(StringUtil.getPrefix(orgNo3,10) == StringUtil.removeEndZero(orgNo2)){
					t2.children.push(t3);
				}
			});
		});
		
		//循环1级组
		$(firstOrgList).each(function(){
			var t1 = this;
			var orgNo1 = t1.orgNo;
			//循环2级组
			$(secondOrgList).each(function(){
				var t2 = this;
				var orgNo2 = t2.orgNo;
				if(StringUtil.getPrefix(orgNo2,8) == StringUtil.removeEndZero(orgNo1)){
					t1.children.push(t2);
				}
			});
		});
		json.root = firstOrgList;	//总和赋值
		
		//生成标签
		var html = '<ul class="rootul">';
		$(json.root).each(function(){
			var orgNo = this.orgNo;
			var orgName = this.orgName;
			html += '<li ><span orgNo = "'+orgNo+'" class="orgoption">'+orgName+'</span>';
			
			var children = this.children;
			if(children.length > 0){
				html += '<ul class="secondul">';
				$(children).each(function(){
					var orgNo = this.orgNo;
					var orgName = this.orgName;
					html += '<li><span orgNo = "'+orgNo+'" class="orgoption" >'+orgName+'</span>';
					
					var children = this.children;
					if(children.length > 0){
						html += '<ul class="thirdul">';
						$(children).each(function(){
							var orgNo = this.orgNo;
							var orgName = this.orgName;
							html += '<li><span orgNo = "'+orgNo+'" class="orgoption">'+orgName+'</span></li>';
						});
						html += '</ul>';
					}
					html += '</li>';
				});
				html += '</ul>';
			}
			html += '</li>';
		});
		html += "</ul>";
		$('#orgs').html(html);
		if(BrowserUtil.isIE8()){
			$('#orgs ul').css('border','1px solid #333');
		}
		$('#orgList').remove();
	}
};
/**
 * 日期类工具
 */
var DateUtil = {
	/**
	 * 获取今天的日期字符串
	 * 
	 * @returns
	 */
	getToday : function() {
		var today = null;
		$.ajax({
			type : "get",
			async : false,
			url : "optionController.do?getToday",
			success : function(json) {
				if (json.success)
					today = json.today;
			}
		});
		return today;
	},
	/**
	 * 获取某一天的前一个月的日期字符串
	 * 
	 * @param day
	 * @returns
	 */
	getMonthEarlier : function(day) {
		var result = null;
		$.ajax({
			type : "get",
			async : false,
			url : "optionController.do?getMonthEarlier&day=" + day,
			success : function(json) {
				if (json.success)
					result = json.day;
			}
		});
		return result;
	}
};
/**
 * 浏览器工具
 */
var BrowserUtil = {
	/**
	 * 如果浏览器是IE，返回true
	 */
	isIE : function() {
		var userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
		var isOpera = userAgent.indexOf("Opera") > -1;
		if (userAgent.indexOf("compatible") > -1
				&& userAgent.indexOf("MSIE") > -1 && !isOpera) {
			return true;
		}
	},
	isIE8: function(){
		var userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
		var isOpera = userAgent.indexOf("Opera") > -1;
		var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
		if (isIE && !-[1,] && document.documentMode) {
        	   return true;
		}
	}
};

/**
 * 日期类输出
 */
function dateWrite() {
	// 当前时间
	var todayTime = DateUtil.getToday();
	// 一月之前时间
	var preMonthTime = DateUtil.getMonthEarlier(todayTime);
	// 赋值
	$('#startTime').val(preMonthTime);
	$('#endTime').val(todayTime);
	$('#logmin').val(preMonthTime);
	$('#logmax').val(todayTime);
}
/**
 * 监听下拉框
 */
function listenOrg(){
	/**
	 * 组织选项点击事件
	 */
	$('.orgoption').mousedown(function(){
		$('#orgno').val($(this).attr('orgNo'));
		$('#orgname').val($(this).text());
		$('#orgname').attr('title',$(this).text());
		$('#orgs').hide();
	});
	/**
	 * 点击输入框事件
	 */
	$('#orgname').focus(function(){
		$('#orgs').show();
	});
	/**
	 * 空白处点击事件
	 */
	if(BrowserUtil.isIE8()){
		document.onclick = function(){
			$('#orgs').hide();
		};
	}
	else{
		window.onclick = function(){
			$('#orgs').hide();
		};
	}
	
	/**
	 * 选项鼠标悬浮事件
	 */
	$('#orgs li span').bind("mouseover",function(e){
		$(this).css({'background':'#0795de','color':'#fff'});
		$(this).parent().siblings().children('span').css({'background':'#fff','color':'#333'});
	});
}