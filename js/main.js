
function main() {
  (function () {
    'use strict';
 
  	$('a.page-scroll').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 40
          }, 900);
          return false;
        }
      }
    });

  	// affix the navbar after scroll below header
    $('#nav').affix({
      offset: {
        top: $('header').height()
      }
    });	

	  // skills chart
  	$(document).ready(function(e) {
    	var index=0;
    	$(document).scroll(function(){
    		var top = $('#skills').height()-$(window).scrollTop();
    		console.log(top)
    		if(top<-300){
    			if(index==0){	
    				$('.chart').easyPieChart({
    					easing: 'easeOutBounce',
    					onStep: function(from, to, percent) {
    						$(this.el).find('.percent').text(Math.round(percent));
    					}
    				});
  				}
  			  index++;
  		  }
  	  })
	  });
	  	
    // CounterUp
  	$(document).ready(function( $ ) {
  		if($("span.count").length > 0){	
  			$('span.count').counterUp({
  				delay: 10, // the delay time in ms
  			  time: 1500 // the speed time in ms
  			});
  		}
  	});


  }());

}
main();

  $(".learned_item").click(function() {
    $( this ).toggleClass("selected");
  });
  
  var $container = $('.portfolio-items');
  $container.isotope({
    filter: '*',
    animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    }
  });
      
  $('.cat li a').on( 'click' , function() {
    var filterValue = $(this).attr('data-filter');
    
    $(this).addClass('active');
      $container.isotope({
        filter: filterValue,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
        }
    });
});