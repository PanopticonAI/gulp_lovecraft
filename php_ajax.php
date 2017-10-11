<?php
if ($_POST) { // 
	
	$email = htmlspecialchars($_POST["email"]); 


	if(!preg_match("|^[-0-9a-z_\.]+@[-0-9a-z_^\.]+\.[a-z]{2,6}$|i", $email)) { // check email 

		echo json_encode(array('email' => $email)); 
			}

	header('Content-Type: application/json');
	
	echo json_encode(array('email' => $email));

} else { // if POST not send
	echo 'POST not send!'; // 
};


?>