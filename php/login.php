<?php 
	header("Access-Control-Allow-Origin:*");
	$username = $_POST["username"]; // 获取用户名
	$password = $_POST["password"]; // 获取密码

	// 连接数据库
	mysql_connect("localhost:3306", "root", "");
	// 选择数据库
	mysql_select_db("pc-proj");
	// 创建SQL语句
	$sql = "SELECT * FROM user WHERE username='$username' AND password='$password'";
	// 查询
	$result =mysql_query($sql);
	// 判断查询结果集
	if ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
		echo '{"status":1, "message":"success", "data":'. json_encode($row) .'}';
	} else {
		echo '{"status":0, "message":"failed", "data":{}}';
	}
	// 关闭数据库连接
	mysql_close();
 ?>