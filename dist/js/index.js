$(function(){
	var mySwiper = new Swiper('.swiper-container', {
	autoplay: true,//可选选项，自动滑动
	loop:true,
	pagination: {
    el: '.swiper-pagination',
    clickable :true,
  },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})

})
