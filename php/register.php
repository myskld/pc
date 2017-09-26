<?php 
	header("Access-Control-Allow-Origin:*");
	$username = $_GET["username"]; // 获取用户名
	$password = $_GET["password"]; // 获取密码

	// 连接数据库
	mysql_connect("localhost:3306", "root", "");
	// 选择数据库
	mysql_select_db("pc_project");
	// 创建SQL语句
	$sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
	// 查询
	$result = mysql_query($sql);
	// 判断查询结果集
	if ($result) {
		echo '{"status":1, "message":"success"}';
	} else {
		echo '{"status":0, "message":"failed"}';
	}
	// 关闭数据库连接
	mysql_close();
?>