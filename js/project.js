   
	
	
	function swipperBannerPc(){
	var swiper = new Swiper('.swipper_banner', {
      slidesPerView: 1,
      spaceBetween: 30,
	  speed:500,
      centeredSlides: true,
	  loop:true,
	   navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
	   
      pagination: {
        el: '#banner_pag',
        clickable: true,
      }
    });
	
	
	
	 var swiper = new Swiper('.swipper_product', {
      direction: 'vertical',
      pagination: {
        el: '.product_pag',
        clickable: true,
      },
    });
	
	
}


function loadHTMLonPage(container, url){
				$('.'+container).load(url, function(htmldata){
					return true;
				});
		}