<template>
  <section>
    <Hero>
      <img
        :src="heroBackground"
        slot="background"
      >
      <span
        slot="title"
        v-html="heroTitle"
      ></span>
      <span
        slot="content"
        v-html="heroContent"
      ></span>
    </Hero>

    <section class="news_banner">
      <img
        data-aos="fade-up"
        data-aos-duration="700"
        :src="bannerIcon"
      >
      <div>
        <h1
          data-aos="fade-up"
          data-aos-duration="700"
        >{{ bannerTitle }}</h1>
        <p
          data-aos="fade-up"
          data-aos-duration="700"
        >{{ bannerContent }}</p>
      </div>
    </section>

    <section class="news">
      <div
        class="new"
        v-for="(item, index) in news"
        :key="`newsItems-${index}`"
      >
        <img :src="item.images.main">
        <div class="new__content">
          <div
            class="new__content__text"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h5>{{ item.title }}</h5>
            <p>{{ item.content }}</p>
            <p class="date">{{ item.date }}</p>
            <div class="newSeparator"></div>
            <button
              :v-if="item.images.gallery"
              @click="modalGallery(`${index}`)"
              class="btn"
            >VER MÁS</button>
          </div>
          <img :src="item.images.landscape">
        </div>
      </div>
    </section>

    <section class="partners">
      <div>
        <p
          data-aos="fade-up"
          data-aos-duration="700"
        > {{ partners_title }}</p>
        <h1
          data-aos="fade-up"
          data-aos-duration="700"
        ><em>{{ partners_subtitle }}</em></h1>
      </div>
      <Embajadores
        data-aos="fade-up"
        data-aos-duration="700"
      />
    </section>
  </section>
</template>

<script>
  import Hero from '@/components/Hero'
  import Embajadores from '@/components/Embajadores'

  export default {
    components: {
      Hero,
      Embajadores
    },
    methods: {
      modalGallery (num) {
        this.$swal.fire({
          position: 'top',
          padding: '0',
          html: `<h1>${num}</h1>`,
        })
      }
    },
    data () {
      return {
        // Hero
        heroBackground: this.$store.state.content.news.hero.background,
        heroTitle: this.$store.state.content.news.hero.title,
        heroContent: this.$store.state.content.news.hero.content,

        // News Banner
        bannerIcon: this.$store.state.content.news.news_banner.icon,
        bannerTitle: this.$store.state.content.news.news_banner.title,
        bannerContent: this.$store.state.content.news.news_banner.content,

        // News
        news: this.$store.state.content.news.news,

        // partners
        partners_title: this.$store.state.content.news.partners.title,
        partners_subtitle: this.$store.state.content.news.partners.subtitle,
      }
    }
  }
</script>


<style lang="scss" scoped>
@import "../assets/scss/theme/colors";
@import "../assets/scss/theme/vars";

.news_banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px var(--global_padding);
  background: #fbfbfb;

  img {
    height: 70px;
    object-fit: contain;
    margin-left: 40px;
  }

  & > div {
    margin-top: 20px;
    text-align: center;
  }
}

.news {
  .new {
    display: flex;
    height: 600px;

    &:nth-of-type(odd) {
      flex-direction: row-reverse;
    }

    img {
      width: calc(100% - 500px);
      height: 100%;
      object-fit: cover;
    }

    .new__content {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 500px;

      .new__content__text {
        text-align: justify;
        padding: 50px;
        width: 100%;
        height: calc(100% - -150px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h5,
        p:last-child {
          text-align: center;
        }

        p {
          font-size: 0.9rem;
        }

        .date {
          margin-top: 1rem;
        }

        .newSeparator {
          width: 50px;
          height: 1px;
          background: #444;
          margin: 1rem 0;
        }

        .btn {
          background: $a_color;

          &:hover {
            background: darken($a_color, 10%);
          }
        }
      }

      img {
        height: 150px;
        width: 100%;
        object-fit: cover;
      }
    }
  }
}

.partners {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px var(--global_padding);
  text-align: center;
}

@media screen and (max-width: 700px) {
  .new > img {
    display: none;
  }

  .new__content {
    width: 100% !important;
  }
}
</style>



