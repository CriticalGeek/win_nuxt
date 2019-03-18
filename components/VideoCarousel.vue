<template>
  <div
    class="carousel"
    v-swiper:mySwiper="videoSwiperOption"
  >
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
    <div class="swiper-button swiper-button-prev"></div>
    <div class="swiper-button swiper-button-next"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        videoSwiperOption: {
          loop: false,
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      }
    }
  }
</script>
