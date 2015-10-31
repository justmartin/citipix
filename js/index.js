$(document).ready(function(){

	//anonymous function triggered off of clicking the submit button
	$('#submit-btn').click(function() {

		//prevent default submission event		
		event.preventDefault();
		//assigned user input to variable 'city'
		var city = $('#city-type').val();

		//if statement to check if input is equal to NY
		if (city == 'New York' || city == 'New York City' || city == 'NYC'){
			$('body').css('background-image', 'url(images/nyc.jpg)');
		}
		//else if statement to check if input is equal to SF
		else if (city == 'San Francisco' || city == 'SF' || city == 'Bay Area'){
			$('body').css('background-image', 'url(images/sf.jpg)');
		}
		//else if statement to check if input is equal to LA
		else if (city == 'Los Angeles' || city == 'LA' || city == 'LAX'){
			$('body').css('background-image', 'url(images/la.jpg)');
		}
		//else if statement to check if input is equal to Austin
		else if (city == 'Austin' || city == 'ATX'){
			$('body').css('background-image', 'url(images/austin.jpg)');
		}
		//else if statement to check if input is equal to Sydney
		else if (city == 'Sydney' || city == 'SYD'){
			$('body').css('background-image', 'url(images/sydney.jpg)');
		}
		//else statement if user inputs invalid city names. resets background image and input box
		else{
			alert('That is not a known city! Please try again!')
			$('#city-type').val('');
			$('body').css('background-image', 'url(images/citipix_skyline.jpg)');
		}
	});
});