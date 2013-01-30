$("#Login_login").click( function() { 
  if( $("#Email_register").val() == "" || $("#password_register").val() == "" )
    $("div#ack").html("Please enter both username and password");
  else
  var dataString = 'email='+ $("#Email_register").val() + '&password=' + $("#password_register").val();
	
    $.post( $("#myForm").attr("action"),
	        dataString,
			function(data) {
			  alert("Sending..");
			  if( data == "1"){
				location.href = "login.html";
			  }
			  else{
				alert("Register Unsuccess");
			  }
			});
});

