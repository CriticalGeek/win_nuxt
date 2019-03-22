<template>
  <section class="ambassadors">
    <div>
      <h1
        data-aos="fade-up"
        data-aos-duration="700"
      ><em>Embajadores Weenjoy</em></h1>
    </div>

    <div class="ambassadors_wrapper">
      <a
        class="ambassador animated fadeInUp"
        v-for="(ambassador, index) in ambassadors"
        :key="`ambassador-${index}`"
        :href="ambassador.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="ambassador.photo">

        <div class="ambassador__info">
          <p>{{ ambassador.name }}</p>
          <p>{{ ambassador.position }}</p>
        </div>
      </a>
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
    justify-content: center;
    flex-wrap: wrap;

    .ambassador {
      width: 250px;
      height: 330px;
      position: relative;
      display: flex;
      margin: 25px;
      justify-content: center;
      cursor: pointer;

      &:hover > .ambassador__info {
        color: $p_color;
        transform: translate(50px, 50px);
        box-shadow: 0 1px 12px rgba(#000, 0.5);
      }

      &:hover > img {
        transform: scale(1.05);
        box-shadow: 0 1px 12px rgba(#000, 0.5);
      }

      img {
        overflow: hidden;
        box-shadow: 0 1px 8px rgba(#000, 0.2);
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: ease 0.8s;
      }

      .ambassador__info {
        width: calc(100% - 25px);
        box-shadow: 0 1px 8px rgba(#000, 0.2);
        position: absolute;
        bottom: 10px;
        background: #000;
        color: #fff;
        padding: 1rem;
        text-align: center;
        transition: ease 0.8s;

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
