<?php 
	include_once('db.php');
	$email = mysql_real_escape_string( $_POST["email"] );
	$password = mysql_real_escape_string($_POST["password"] );

	if(empty($email) || empty($password))
		echo "0";
	else
{
	$sql = "SELECT * FROM users WHERE email='".$email."' AND password='".$password."'";
	$res = mysql_query($sql);
	$row = mysql_fetch_array($res);
	
	if ($row[0] > 0 )
		echo "1";
	else
		echo "0";
}


?>
