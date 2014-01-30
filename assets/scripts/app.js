$(document).ready(function(){
	var lastScrollTop = 0;
	// handle nav toggle 

	$('.nav-toggle').click(function(){
		var nav= $('nav > ul');
		if(nav.hasClass('show')){
			nav.removeClass('show');
		}
		else {
			nav.addClass('show');
		}
	});

	// resize nav bar on scroll down the fold

	$(window).scroll(function(){
		if($(window).scrollTop()>=$('header').outerHeight()){
			$('header').addClass('shrink');
		} else {
			$('header').removeClass('shrink');
		}
	});

	
	$("nav a, a.anchor-scroll").click(function (e){
		var toggler = $('nav a[href="index'+this.hash+'"]');
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var hash = this.hash;
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      // scroll to anchor nav 
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				$('nav > ul').removeClass('show');
			}

			if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top - $('header').outerHeight()
		        }, 400, function () {
		        	$('nav li').removeClass('active');
					toggler.parent().addClass('active');
					$('html,body').animate({
			          scrollTop: target.offset().top - $('header').outerHeight()
			        }, 50);
		        });

		        return false;
		    }
			
	    }

	});

	

	// vertical animation for icons

	$(window).scroll(function(){

		var st = $(this).scrollTop();

		$('.featured-img-wrap').each(function(){
			if($(window).scrollTop()>$(this).offset().top - $(window).height()*0.6 && st > lastScrollTop) {
				$(this).addClass('animated bounceIn');
			}
			else if(st < lastScrollTop){
				$(this).removeClass('animated bounceIn');
			}
		});

		lastScrollTop = st;
	});

	// hover animation for call to action button 
	

	$('.front-form > button').hover(function(){
		$(this).addClass('animated pulse');
	},function(){
		$(this).removeClass('pulse');
	});

	// scroll spy

	$('article[id]').on('scrollSpy:enter', function() {
		$('nav li').removeClass('active');
		$('nav li a[href="index#'+$(this).attr('id')+'"]').parent().addClass('active');
        console.log('enter:', $(this).attr('id'));
    });

    $('article[id]').on('scrollSpy:exit', function() {
        console.log('exit:', $(this).attr('id'));
    });

    $('article[id]').scrollSpy();


    // display other 

    $('select[name="where"]').change(function(){
    	if($(this).val()=="other"){
    		$('#other').css('display','block').css('opacity',1);
    	}
    	else {
    		$('#other').css('display','none').css('opacity',0);
    	}
    });
});