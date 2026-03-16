/* NETFLIX SLIDER */

new Swiper(".gallerySwiper",{

loop:true,
centeredSlides:true,
slidesPerView:1.5,
spaceBetween:30,

autoplay:{
delay:2500,
disableOnInteraction:false
},

breakpoints:{

768:{
slidesPerView:2.2
},

1024:{
slidesPerView:3
}

}

});
