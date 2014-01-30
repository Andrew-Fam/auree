// detect images with lazy load
// currently can only have 1 carousel on one page. 

// setup package
window.lazyCarousel = {};
window.lazyCarousel.images = [];

// load current image 
lazyCarousel.loadImage = function () {
	var img = $('.lazy-carousel > .item.active > figure > img[data-src]');
	

	if(img.length==0) {
		
		lazyCarousel.loadImage();
		return;
	}
	if(img.attr('src')==undefined || img.attr('src')==""){
		img.attr('src',img.data('src'));
	}

	

}


lazyCarousel.startSlide = function () {
	lazyCarousel.slideTimer = setInterval(lazyCarousel.slide,5000);
	if($('.lazy-carousel > .item.active ').length==0)
	{
		$($('.lazy-carousel > .item')[0]).addClass('active');
		$('#testimonial-display').html($('.lazy-carousel > .item.active .testimonial').html());
	}
}

lazyCarousel.slide = function () {
	var current = $('.lazy-carousel > .item.active ');
	current.removeClass('active');
	if(current.next().length>0){
		current.next().addClass('active');
	}else {
		$($('.lazy-carousel > .item')[0]).addClass('active');
	}
	//lazyCarousel.loadImage();
	$('#testimonial-display').html($('.lazy-carousel > .item.active .testimonial').html());
}




$(document).ready(function(){
	window.lazyCarousel.images = $('.lazy-carousel > .item > img[data-src]');

	// load the .active element or the first element on page entry

	//lazyCarousel.loadImage();

	lazyCarousel.startSlide();
});