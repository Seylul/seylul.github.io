<?php 
	include_once('db.php');
	$email = mysql_real_escape_string( $_POST["email"] );
	$password = mysql_real_escape_string($_POST["password"] );

	if(empty($email) || empty($password))
		echo "0";
	else
	{
		$sql = "INSERT INTO users (email, password, platform) VALUES ('".$email."','".$password."', 'ios' )";
		if (!mysql_query($sql)) 
	    { 
			echo "0";
	    } 
		else{
	   		echo "1"; 
		}
	
	}
?>
