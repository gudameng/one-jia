<?php
	header("Access-Control-Allow-Origin:http://localhost:2333");
	$username = $_GET['username'];
	$password = $_GET['password'];
	
	mysql_connect("localhost","root","root");
	mysql_select_db("register");
	$sql = "INSERT INTO a (username,password) VALUES ('$username','$password')";
	mysql_query("set names 'utf8'");
	$isSucc = mysql_query($sql);
	if($isSucc){
		echo "注册成功！";
	}else{
		echo "注册失败！";
	}

	mysql_close();
?>