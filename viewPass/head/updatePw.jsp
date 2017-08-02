<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/view/base/base.jsp"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=9;IE=8;IE=11;IE=10;IE=EDGE" />
<link rel="stylesheet" href="view/common/iconfont/iconfont.css" />
<link rel="stylesheet" href="view/common/css/common.css" />
<script src="plugin/jquery/jquery.min.js"></script>
<script src="plugin/layer/layer.js"></script>
<script src="view/common/js/common.js"></script>
<script src="view/head/updatePw.js"></script>

<title>修改密码</title>
</head>
<body>
	<div class="content">
		<div class="wrap">
			<label>原密码：</label><input id="oldPw" type="password" />
		</div>
		<div class="wrap">
			<label>新密码：</label><input id="newPw" type="password" />
		</div>
		<div class="wrap">
			<label>确认新密码：</label><input id="confirmPw" type="password" />
		</div>
		<div class="wrap">
			<button id="submit" onclick="updatePw()">提交</button>
		</div>
	</div>
	
</body>
</html>
