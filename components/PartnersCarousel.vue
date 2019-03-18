<template>
  <div
    class="carousel"
    v-swiper:mySwiper="partnerSwiperOption"
  >
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        partnerSwiperOption: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
          }
        },
      }
    }
  }
</script>
