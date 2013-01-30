$("#Login_login").click( function() { 
  if( $("#Email_login").val() == "" || $("#password_login").val() == "" )
    $("div#ack").html("Please enter both username and password");
  else
  var dataString = 'email='+ $("#Email_login").val() + '&password=' + $("#password_login").val();
    $.post( $("#myForm").attr("action"),
	        dataString,
			function(data) {
			  alert("Sending..");
			  if( data == "1"){
				location.href = "home2.html";
			  }
			  else{
				alert("Login Unsuccess");
			  }
			});
});

