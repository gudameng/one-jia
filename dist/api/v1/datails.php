<?php
	header("Access-Control-Allow-Origin:*");

	$num = $_GET['num'];
	mysql_connect("localhost","root","root");
	mysql_select_db("register");
	$sql = "SELECT * FROM datails WHERE id = '$num'";
	mysql_query("set names 'utf8'");
	$query = mysql_query($sql);
	$result = array();
	while ($arr = mysql_fetch_array($query)) {
		array_push($result, $arr);
	}
	echo json_encode($result);
	mysql_close();
?>