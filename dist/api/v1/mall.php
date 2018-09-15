<?php
	header("Access-Control-Allow-Origin:*");

	mysql_connect("localhost","root","root");
	mysql_select_db("register");
	$sql = "SELECT * FROM shopping";
	mysql_query("set names 'utf8'");
	$result = mysql_query($sql);

	$topArr = array();
	while ($arr = mysql_fetch_array($result)){
		array_push($topArr,$arr);
	}

	echo json_encode($topArr);

?>