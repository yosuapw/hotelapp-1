
$(document).ready(function() {
	
	$().UItoTop({ easingType: 'easeOutQuart' });
	
	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
	});
	
});


$( "span.menu" ).click(function() {
	 $( "ul.cl-effect-1" ).slideToggle( 300, function() {
	 // Animation complete.
	  });
	 });