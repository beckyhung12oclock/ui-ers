//距離400px時出現To Top, Header加上陰影
$(window).scroll(function(){      
	var $window =  $(window).scrollTop();
	var $header = $('header');
  
	if($window > 300){
	  $('a.totop').fadeIn(300);  
	  $('header').addClass('active');
		
	} else{
	  $('a.totop').fadeOut(300);  
	  $('header').removeClass('active');
	}
})	

$(function(){

	//To top effect   
	$('a.totop').on('click',function(){
	  $('html, body').animate({scrollTop: 0}, 1500);
	  return false;
	}) 

	//To top effect   
	$('a.btn-anchor').on('click',function(){
		var dest = 0;
		if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
			dest = $(document).height() - $(window).height();
		} else {
			dest = $(this.hash).offset().top-100;
		}
		//go to destination
		$('html,body').animate({
			scrollTop: dest
		}, 1500, 'swing');
	  }) 

})	