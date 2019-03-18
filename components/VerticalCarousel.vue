<template>
  <div
    class="carousel"
    v-swiper:mySwiper="verticalSwiperOption"
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
        verticalSwiperOption: {
          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 0,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
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
</style>

