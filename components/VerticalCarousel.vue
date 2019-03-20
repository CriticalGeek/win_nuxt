<template>
  <div
    class="carousel"
    v-swiper:mySwiper="verticalSwiperOption"
  >
    <div class="swiper-wrapper">
      <slot />
    </div>
    <div class="swiper-pagination swiper-pagination-bullets"></div>
    <div class="swiper-button-prev swiper-button-white"></div>
    <div class="swiper-button-next swiper-button-white"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        verticalSwiperOption: {
          slidesPerView: 1,
          spaceBetween: 0,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
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

<style lang="scss" scoped>
.swiper-wrapper {
  height: 500px;
}

.swiper-button-prev,
.swiper-button-next {
  z-index: 15;
}

.swiper-button-prev {
  margin-left: 2%;
}

.swiper-button-next {
  margin-right: 2%;
}
</style>

