<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
	<meta content="width=1024" name="viewport">
		<title>
			Registration Exercise
		</title>
		<meta name="description" content="Registration Exercise">
		<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
		<script type="text/javascript" src="js.js"></script>
		<script type="text/javascript">
			// var jQ = $.noConflict();
		</script>
		<!--
			 need.js change:
			}( jQuery ) );
			on:
			}( jQ ) );
		-->
		
		<script type="text/javascript">	
		</script>
		 <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>


<div id="div_ajaxform"> 
	<div id="formImage"> 	
		<img  id="srcformImage" src="img/logo-loveknitting.svg" onerror="this.onerror=null; this.src='img/logo-loveknitting.png'">
		<img  id="srcformImageSmall" src="img/logo-loveknitting-sm.svg" onerror="this.onerror=null; this.src='img/logo-loveknitting-sm.png'">
		<div id="FormLabel"><h2 >Registration Exercise</h2></div>
	</div>
	
	<form method="post" action="" id="ajaxform" > 
		<label for="email">Email</label> <input  id="email" type="text" size="32" maxlength="36" name="email" required placeholder="example@example.com" val=""/> <br/>
		<label for="Birthday">Birthday</label> <input id="Birthday" type="data" size="32" maxlength="36" name="name" required placeholder="dd/mm/yyyy" val=""/> <br/>
		<label for="txtNewPassword">Password</label> <input id="txtNewPassword" type="password"  required placeholder=""/><br />
		<label for="txtConfirmPassword">Confirm Password</label> <input id="txtConfirmPassword" type="password"  required placeholder="" /><br />
		
		<input type="submit" id="btnSubmit" value="Register"/>
		<div id="divCheckFieldMatch"></div>
	</form>
</div>
	
<img src="img/loading.gif" id="spinner"/>


</body>
</html>