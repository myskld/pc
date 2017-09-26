<?php 
	header("Access-Control-Allow-Origin:*");
	$username = $_GET["username"]; // 获取用户名

	// 连接数据库
	mysql_connect("localhost:3306", "root", "");
	// 选择数据库
	mysql_select_db("pc_project");
	// 创建SQL语句
	$sql = "SELECT COUNT(*) FROM users WHERE username='$username'";
	// 查询
	$result = mysql_query($sql);
	// 判断查询结果集
	if ($row = mysql_fetch_array($result)) {
		if ($row[0] == 1) {
			echo '{"status":0, "message":"exist"}';
		} else {
			echo '{"status":1, "message":"not exist"}';
		}
	} else {
		echo '{"status":2, "message":"error"}';
	}
	// 关闭数据库连接
	mysql_close();
 ?>