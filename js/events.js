/*
          	$('.main-menu li').on('click',function(e){
      		e.preventDefault();
      		$('body').removeClass('nav-expanded');

      	});
*/
       		$(".temp-scroll").click(function(prevent) {

    $('html, body').animate({

        scrollTop: $(".free-temp-banner").offset().top
    }, 1000);
           prevent.preventDefault();
});



       $(".navbar-brand").click(function(prevent) {

    $('html, body').animate({

        scrollTop: $("header").offset().top
    }, 1000);
           prevent.preventDefault();
});



       		$(".back-to-top").click(function(prevent) {

    $('html, body').animate({

        scrollTop: $("header").offset().top
    }, 1000);
           prevent.preventDefault();
});
 