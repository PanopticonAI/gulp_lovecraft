
$(document).ready(function() { 
$("#btnSubmit").attr('disabled', 'disabled'); // disable form Submit


	$("#ajaxform").submit(function(){
	
        var postData = {
            "email":$("#email").val()
            , "Birthday":$("#Birthday").val()
            , "txtNewPassword":$("#txtNewPassword").val()
            , "txtConfirmPassword":$("#txtConfirmPassword").val()

        };

       // catch the form's submit event
	   //check more then 3 length
             if($("#email").val().length >= 3 && $("#Birthday").val().length >= 3 && $("#txtNewPassword").val().length >= 3 && $("#txtConfirmPassword").val() >= 3 ){

                    $.ajax({url: 'php_ajax.php',
                        type: 'post',
                        async: 'true',
                        data: postData,

                        beforeSend: function() {
							$("#btnSubmit").attr('disabled', 'disabled');  // prevent duplicate submissions by disabling the register button
                            //  callback function will trigger before data is sent
                             $('#spinner').show();// show ajax spinner
                        },
                        complete: function() {
                            // callback function will trigger on data sent/received complete
                            //$.hidePageLoadingMsg(); // hide ajax spinner
							$("#btnSubmit").prop('disabled', false); //  enabling the register button
                        },
                        success: function (result) {
								
								$("#divCheckFieldMatch").html("<font face='Arial' color='green'>Welcome : </font> " + result['email'] + "<br />" );
								
								/*
								var newHTML = [];
								$.each(result, function(index, value) {
									newHTML.push('<span>' + index + ' - ' + value + '</span><br />');
								});
								$("#divCheckFieldMatch").html(newHTML.join(""));
								*/
								   
								 alert("Welcome : " + result['email'] ); 
								 
								  $('#spinner').hide();

							/*
                            if(result.status) {
                               // window.location.href = 'index.php';
                            } else {
                                //window.location.href = 'php_ajax.php';;
                            }
							*/
                        },
                        error: function (request,error) {
                            // callback function will trigger on unsuccessful action
                            alert('Error!');
							$("#divCheckFieldMatch").html("<font face='Arial' color='red'>Wrong mail format : </font>" + $("#email").val() + "<br />" );
							 $('#spinner').hide();	
                        }
                    });
            } else {
                alert('Error length is less than 3 symbols!');
            }
            return false; // cancel original event to prevent form submitting
        });
		
		
	
		
		
	var divCheckFieldMatch = $("#divCheckFieldMatch");
	
	var GoodDate;
	var CheckisItFutureDate;
	var CheckinputDate;	
	var inputDate;
	
	// keyup checkColorGoodDate and checkPasswordMatch format/not in the future Date
	$("#Birthday").keyup(checkColorGoodDate);
	$("#txtNewPassword, #txtConfirmPassword").keyup(checkPasswordMatch);
	
function checkColorGoodDate() {

//start

		//var inputDate = "01/04/1997"; //  dd/mm/yyyy format
		var inputDate = $("#Birthday").val();
		var GoodDate = false;
		
		var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
		var CheckinputDate = pattern.test(inputDate);
		console.log(CheckinputDate + ' CheckinputDate');


		//Future Date check


		function isFutureDate(idate){
			var today = new Date().getTime(),
				idate = idate.split("/");

			idate = new Date(idate[2], idate[1] - 1, idate[0]).getTime();
			return  (today - idate) < 0 ? true : false;
		}

		 var CheckisItFutureDate = isFutureDate(inputDate);

		 console.log(CheckisItFutureDate + ' CheckisItFutureDate');


		if( (CheckinputDate === true) && (CheckisItFutureDate === false) ){
			 GoodDate = true;
		  console.log((GoodDate + ' Date not in future and dd/mm/yyyy format'));
		};




//dynam check Data
	if (GoodDate === false){
			divCheckFieldMatch.html("<font face='Arial' color='red'>Wrong Birthday date</font>");
			$("#btnSubmit").attr('disabled', 'disabled'); // disable form Submit
		}
		else if (GoodDate === true){
			divCheckFieldMatch.html("<font face='Arial' color='green'>Nice Birthday date.</font>"); // enable form Submit
			$("#btnSubmit").prop('disabled', false); 
	};
	
};

   
	function checkPasswordMatch() {
	//alert('!!!');
		var password = $("#txtNewPassword").val();
		var confirmPassword = $("#txtConfirmPassword").val();

		if (password != confirmPassword){
				divCheckFieldMatch.html("<font face='Arial' color='red'>Passwords do not match!</font>"); // disable form Submit
				$("#btnSubmit").attr('disabled', 'disabled'); 
			}
		else {
				divCheckFieldMatch.html("<font face='Arial' color='green'>Passwords match.</font>"); // enable form Submit
				$("#btnSubmit").prop('disabled', false); 
			}
}



//alert ( inputDate + ' inputDate;' + GoodDate + ' GoodDate;');
});


