jQuery(document).ready(function($) {
	//initiate our gallery
	//<i class="icon-circle-blank"></i>
	//start our gallery
	 $("#slides").slidesjs({
	    callback: {
	      loaded: function(number) {
	        // Do something awesome!
	        // Passes start slide number
	        console.log(number);
	      },
	      start: function(number) {
	        // Do something awesome!
	        // Passes slide number at start of animation
	      },
	      complete: function(number) {
	        // Do something awesome!
	        // Passes slide number at end of animation
	        	//find the gallery list items and remove the html from them
			$('.slidesjs-pagination-item a').html('<i class="icon-circle-blank"></i>');
			$('.slidesjs-pagination-item a.active').html('<i class="icon-circle"></i>');
	      }
	    }
	  });
	//find the gallery list items and remove the html from them
	$('.slidesjs-pagination-item a').html('<i class="icon-circle-blank"></i>');
	$('.slidesjs-pagination-item a.active').html('<i class="icon-circle"></i>');

	$('.slidesjs-next').html('<i class="icon-chevron-sign-right"></i>');
	$('.slidesjs-previous').html('<i class="icon-chevron-sign-left"></i>');



});