<template>
  <section class="ambassadors">
    <div>
      <h1
        data-aos="fade-up"
        data-aos-duration="700"
      ><em>Embajadores Weenjoy</em></h1>
    </div>

    <div class="ambassadors_wrapper">
      <nuxt-link
        class="ambassador"
        v-for="(ambassador, index) in ambassadors"
        :key="`ambassador-${index}`"
        :to="ambassador.url"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <img :src="ambassador.photo">

        <div class="ambassador__info">
          <p>{{ ambassador.name }}</p>
          <p>{{ ambassador.position }}</p>
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        ambassadors: this.$store.state.content.ambassadors,
      }
    }
  }
</script>

<style lang="scss">
@import "../assets/scss/theme/colors";
@import "../assets/scss/theme/vars";

.ambassadors {
  padding: 50px var(--global_padding) 80px var(--global_padding);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .ambassadors_wrapper {
    margin-top: 50px;
    display: flex;

    .ambassador {
      width: 250px;
      height: 330px;
      position: relative;
      display: flex;
      justify-content: center;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .ambassador__info {
        width: calc(100% - 25px);
        position: absolute;
        bottom: 10px;
        background: #000;
        color: #fff;
        padding: 1rem;
        text-align: center;

        p {
          font-weight: 700;
        }

        p:last-child {
          font-size: 1rem;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
