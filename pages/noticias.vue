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

    <section
      class="news_banner"
      id="juntos"
    >
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

    <section
      class="news"
      id="eventos"
    >
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
            <template v-if="item.images.gallery">
              <div class="newSeparator"></div>
              <button
                @click="modalGallery(`${item.images.gallery}`)"
                class="btn"
              >VER MÁS</button>
            </template>
          </div>
          <img :src="item.images.landscape">
        </div>
      </div>
    </section>

    <section
      class="partners"
      id="partners"
    >
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

    <div
      class="gallery animated fadeIn"
      @click="closeGallery"
    >
      <div
        class="gallery__wrapper"
        @click.stop=""
      >
        <no-ssr>
          <Carousel slidesPerView="3">
            <div
              class="swiper-slide"
              v-for="(route, index) in routes"
              :key="`routes-${index}`"
            >
              <img :src="route">
            </div>
          </Carousel>
        </no-ssr>
      </div>
    </div>
  </section>
</template>

<script>
  import Hero from '@/components/Hero'
  import Embajadores from '@/components/Embajadores'
  import Carousel from '@/components/Carousel'

  export default {
    components: {
      Hero,
      Embajadores,
      Carousel
    },
    methods: {
      modalGallery (gallery) {
        let domGallery = document.querySelector('.gallery')

        domGallery.style.display = 'block'
        domGallery.style.display = 'flex'

        this.routes = []
        let gallerySplit = gallery.split(',')
        this.routes = gallerySplit
        console.log(this.routes)
      },
      closeGallery () {
        let domGallery = document.querySelector('.gallery')
        domGallery.style.display = "none"
      }
    },
    data () {
      return {
        // Hero
        heroBackground: this.$store.state.content.news.hero.background,
        heroTitle: this.$store.state.content.news.hero.title,
        heroContent: this.$store.state.content.news.hero.content,
        routes: [],

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

        h5 {
          margin-bottom: 1rem;
        }

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

.gallery {
  background: rgba(#000, 0.8);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 200;

  .gallery__wrapper {
    width: 80%;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
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



