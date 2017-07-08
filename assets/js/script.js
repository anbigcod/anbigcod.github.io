$(document).ready(function() {
	$('.open-menu').click(function() {
		$('.hidden-menu').css('left', '0px');
	});

	$('.close-menu').click(function() {
		$('.hidden-menu').css('left', '-100%');
	});
	
	$('.actionbutton').click(function() {
		alert('Hi');
	});
});