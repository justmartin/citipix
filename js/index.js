$(document).ready(function(){

	//anonymous function triggered off of clicking the submit button
	$('#submit-btn').click(function() {

		//prevent default submission event		
		event.preventDefault();
		//assigns user input to variable 'city' and removes new lines, spaces, and tabs
		var city = $.trim($('#city-type').val());

		//if statement to check if input is equal to NY and sets corresponding background image. resets input box
		if (city == 'New York' || city == 'New York City' || city == 'NYC'){
			$('body').css('background-image', 'url(images/nyc.jpg)');
		}
		//else if statement to check if input is equal to SF and sets corresponding background image. resets input box
		else if (city == 'San Francisco' || city == 'SF' || city == 'Bay Area'){
			$('body').css('background-image', 'url(images/sf.jpg)');
		}
		//else if statement to check if input is equal to LA and sets corresponding background image. resets input box
		else if (city == 'Los Angeles' || city == 'LA' || city == 'LAX'){
			$('body').css('background-image', 'url(images/la.jpg)');
		}
		//else if statement to check if input is equal to Austin and sets corresponding background image. resets input box
		else if (city == 'Austin' || city == 'ATX'){
			$('body').css('background-image', 'url(images/austin.jpg)');
		}
		//else if statement to check if input is equal to Sydney and sets corresponding background image. resets input box
		else if (city == 'Sydney' || city == 'SYD'){
			$('body').css('background-image', 'url(images/sydney.jpg)');
		}
		//else statement if user inputs invalid city names. resets background image and input box
		else{
			alert('That is not a known city! Please try again!')
			$('body').css('background-image', 'url(images/citipix_skyline.jpg)');
		}

		//resets input box
		$('#city-type').val('');
	});
});