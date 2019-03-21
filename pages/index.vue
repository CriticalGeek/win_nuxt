<template>
  <section class="container">
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
      class="section1"
      id="vidas"
      v-rellax="{ speed: 1 }"
    >
      <div class="circles">
        <img
          v-for="( circle, index ) in section1_circles"
          :key="`section1Circles-${index}`"
          :src="circle.img"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
      </div>
      <h5
        data-aos="fade-up"
        data-aos-duration="700"
      ><strong>{{ section1_title }}</strong></h5>
      <h1
        data-aos="fade-up"
        data-aos-duration="700"
      >{{ section1_subtitle }}</h1>
      <p
        data-aos="fade-up"
        data-aos-duration="700"
      >{{ section1_content }}</p>
      <img
        class="texture"
        v-rellax="{ speed: -3 }"
        :src="section1_texture"
      >
    </section>

    <section
      class="section2"
      id="success"
    >
      <img
        class="section2__background"
        :src="section2_background"
      >
      <div class="section2__content">
        <div class="section2__content__data">
          <h3
            data-aos="fade-up"
            data-aos-duration="700"
          >{{ section2_title }}</h3>
          <h1
            data-aos="fade-up"
            data-aos-duration="700"
          >{{ section2_subtitle }}</h1>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            v-html="section2_content"
          ></div>
        </div>
        <div class="section2__content__gallery">
          <iframe
            data-aos="fade-up"
            data-aos-duration="700"
            class="media"
            width="300"
            height="300"
            v-for="(item, index) in section2_gallery"
            :key="`section2Gallery-${index}`"
            :src="item.src"
            frameborder="0"
            allowFullScreen
            mozallowfullscreen
            webkitAllowFullScreen
          ></iframe>
        </div>
      </div>
    </section>

    <section
      class="section3"
      id="yeah"
    >
      <span
        data-aos="fade-right"
        data-aos-duration="700"
        v-html="section3_title"
      ></span>
      <div
        class="section3__content"
        v-html="section3_content"
        data-aos="fade-up"
        data-aos-duration="700"
      ></div>
    </section>

    <section
      class="activators_carousel"
      id="activadoresyasesores"
      v-swiper:mySwiper="swiperOption"
    >
      <div class="swiper-wrapper">
        <div
          class="swiper-slide activators-slide"
          v-for="(activator, index) in activators"
          :key="`activators-${index}`"
        >
          <img :src="activator.photo">
          <div class="slide_text">
            <h4
              data-aos="fade-up"
              data-aos-duration="700"
              class="title"
            >{{ activator.speach }}</h4>
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              class="slide_text_name"
            >
              <p>{{ activator.name }}</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              class="slide_text_position"
            >
              <p>{{ activator.position }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
    </section>

    <section
      class="section4"
      id="principios"
    >
      <span>
        <h1
          data-aos="fade-up"
          data-aos-duration="700"
          class="section4__title"
        ><em>{{ section4_title }}</em></h1>
      </span>
      <p
        data-aos="fade-up"
        data-aos-duration="700"
        class="section4__content"
      >{{ section4_content }}</p>
      <div class="section4__principles">
        <div
          class="principle"
          v-for="(principle, index) in section4_principles"
          :key="`principles-${index}`"
        >
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            class="principle__text"
            @click="principleModal (principle.icon, principle.background, principle.description, principle.content)"
          >
            <h2>{{ principle.name }}</h2>
            <p>{{ principle.description }}</p>
            <p style="font-size: .8rem"><strong>{{ section4_action }}</strong></p>
          </div>
          <div class="principle__circle">
            <img :src="principle.icon">
          </div>
          <div class="separator"></div>
        </div>
      </div>
    </section>

    <section
      class="video_carousel"
      id="testimonios"
    >
      <div class="video_carousel__wrapper">
        <no-ssr>
          <VideoCarousel>
            <div
              class="swiper-slide"
              v-for="(video, index) in video_carousel"
              :key="`videoCarousel-${index}`"
            >
              <iframe
                width="100%"
                height="380"
                :src="video.url"
                frameborder="0"
                allowFullScreen
                mozallowfullscreen
                webkitAllowFullScreen
              ></iframe>
            </div>
          </VideoCarousel>
        </no-ssr>
      </div>
    </section>

    <section
      class="compensation_plan"
      id="compensacion"
    >
      <h1
        data-aos="fade-up"
        data-aos-duration="700"
      ><em>{{ compensation_title }}</em></h1>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        v-html="compensation_subtitle"
      ></div>
    </section>

    <no-ssr>
      <Carousel>
        <div
          class="swiper-slide compensation-carousel"
          v-for="(level, index) in compensation_levels"
          :key="`compensationLevels-${index}`"
        >
          <img :src="level.background">
          <img
            class="compensation-carousel__icon"
            :src="level.icon"
          >
          <div class="compensation-carousel__wrapper">
            <h1>{{ level.title }}</h1>
            <p>{{ level.subtitle }}</p>
            <div class="separator"></div>
            <p v-html="level.content"></p>
          </div>
        </div>
      </Carousel>
    </no-ssr>

    <section
      class="highlighted_activator"
      id="testimonio"
    >
      <img :src="highlighted_photo">
      <div class="highlighted_separator"></div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        class="highlighted_info"
      >
        <h5>{{ highlighted_speach }}</h5>
        <p><strong>{{ highlighted_position }}, {{ highlighted_name }}</strong></p>
      </div>
    </section>

    <section
      class="section5"
      id="activate"
    >
      <div class="section5__images">
        <img
          v-for="(image, index) in section5_images"
          :key="`section5Images-${index}`"
          :src="image.url"
          data-aos="zoom-out-right"
          data-aos-duration="700"
        >
      </div>
      <p
        data-aos="fade-up"
        data-aos-duration="700"
      >{{ section5_title }}</p>
      <h1
        data-aos="fade-up"
        data-aos-duration="700"
      ><em>{{ section5_subtitle }}</em></h1>
      <p
        data-aos="fade-up"
        data-aos-duration="700"
      >{{ section5_content }}</p>
      <button
        data-aos="fade-up"
        data-aos-duration="700"
        class="btn"
        @click="showFormMenu"
      >{{ section5_action }}</button>
    </section>
  </section>
</template>

<script>
  import Hero from '@/components/Hero'
  import VideoCarousel from '@/components/VideoCarousel'
  import Carousel from '@/components/Carousel'

  export default {
    components: {
      Hero,
      VideoCarousel,
      Carousel
    },
    methods: {
      principleModal (icon, background, title, content) {
        this.$swal.fire({
          position: 'top',
          padding: '0',
          html: `
            <div style="width: 100%; position: relative;">
              <div style="position: absolute; top: -50px; left: -50px; height: 130px; width: 130px; padding: 30px; background: #1EBCA9; border-radius: 50%;" >
                <img src="${icon}" style="width: 100%; height: 100%; object-fit: contain;" >
              </div>
              <img src="${background}" style="width: 100%; height: 200px; object-fit: cover; margin-top: -15px;" >
              <div style="width: 100%; padding: 25px; font-size: .8rem; text-align: left; margin-top: -15px;">
                <h4 style="margin-bottom: 1rem;">${title}</h4>
                ${content}
              </div>
            </div>
          `,
        })
      },
      showFormMenu () {
        this.$store.commit('nav/updateNavMenu', 'form')
        this.$store.commit('nav/updateStatus', 'play')

        let menu = document.getElementById('navContent')
        menu.classList.remove('fadeOut')
        menu.classList.add('fadeIn')
        menu.style.display = 'block'
        menu.style.display = 'flex'
      }
    },
    data () {
      return {
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          autoplay: {
            delay: 5000,
          },
        },

        // Hero
        heroBackground: this.$store.state.content.home.hero.background,
        heroTitle: this.$store.state.content.home.hero.title,
        heroContent: this.$store.state.content.home.hero.content,

        // Section 1
        section1_title: this.$store.state.content.home.section1.title,
        section1_subtitle: this.$store.state.content.home.section1.subtitle,
        section1_content: this.$store.state.content.home.section1.content,
        section1_texture: this.$store.state.content.home.section1.texture,
        section1_circles: this.$store.state.content.home.section1.circles,

        // Section 2
        section2_title: this.$store.state.content.home.section2.title,
        section2_subtitle: this.$store.state.content.home.section2.subtitle,
        section2_content: this.$store.state.content.home.section2.content,
        section2_background: this.$store.state.content.home.section2.background,
        section2_gallery: this.$store.state.content.home.section2.gallery,

        // section 3
        section3_title: this.$store.state.content.home.section3.title,
        section3_content: this.$store.state.content.home.section3.content,

        // section 4
        section4_title: this.$store.state.content.home.section4.title,
        section4_content: this.$store.state.content.home.section4.content,
        section4_principles: this.$store.state.content.home.section4.principles,
        section4_action: this.$store.state.content.home.section4.action,

        // section 5
        section5_title: this.$store.state.content.home.section5.title,
        section5_subtitle: this.$store.state.content.home.section5.subtitle,
        section5_content: this.$store.state.content.home.section5.content,
        section5_background: this.$store.state.content.home.section5.background,
        section5_action: this.$store.state.content.home.section5.action,
        section5_images: this.$store.state.content.home.section5.images,

        // compensation plan
        compensation_title: this.$store.state.content.home.compensation_plan.title,
        compensation_subtitle: this.$store.state.content.home.compensation_plan.subtitle,
        compensation_levels: this.$store.state.content.home.compensation_plan.levels,

        // video_carousel
        video_carousel: this.$store.state.content.home.video_carousel,

        // Activator carousel
        activators: this.$store.state.content.home.activator_carousel,

        //highlighted activator
        highlighted_name: this.$store.state.content.home.highlighted_activator.name,
        highlighted_photo: this.$store.state.content.home.highlighted_activator.photo,
        highlighted_speach: this.$store.state.content.home.highlighted_activator.speach,
        highlighted_position: this.$store.state.content.home.highlighted_activator.position,
      }
    }
  }
</script>

<style lang="scss">
@import "../assets/scss/theme/colors";
@import "../assets/scss/theme/vars";

.swal2-popup {
  margin-top: 100px !important;
  margin-bottom: 50px !important;
}

.swal2-actions {
  margin: 0 1.25em 1.25rem 1.25rem !important;
}

.container {
  overflow-y: hidden;

  & > .hero {
    .heroContent {
      align-items: flex-end;
      justify-content: flex-start;
      text-align: left;
      padding: 100px var(--global_padding);
    }
  }
}

.header-class {
  display: none;
}

%section {
  padding: 150px var(--global_padding) 100px var(--global_padding);
  position: relative;
}

.section1 {
  @extend %section;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    width: 100%;
    max-width: 800px;
    margin-top: 2rem;
  }

  img.texture {
    width: 200px;
    object-fit: contain;
    position: absolute;
    right: 100px;
    top: 100px;
    z-index: -1;
    opacity: 0.1;
  }

  .circles {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    margin-bottom: 70px;

    img {
      border-radius: 50%;
      object-fit: cover;
      position: absolute;
      border: 8px solid #fff;
      box-shadow: 0 1px 8px rgba(#000, 0.3);

      &:nth-of-type(1),
      &:nth-of-type(7) {
        width: 80px;
        height: 80px;
        z-index: 4;
        bottom: -10px;
        animation-delay: 1.5s;
      }
      &:nth-of-type(1) {
        right: 290px;
      }
      &:nth-of-type(7) {
        left: 290px;
      }

      &:nth-of-type(2),
      &:nth-of-type(6) {
        width: 120px;
        height: 120px;
        z-index: 3;
        bottom: -5px;
        animation-delay: 1s;
      }
      &:nth-of-type(2) {
        right: 220px;
      }
      &:nth-of-type(6) {
        left: 220px;
      }

      &:nth-of-type(3),
      &:nth-of-type(5) {
        width: 160px;
        height: 160px;
        z-index: 2;
        bottom: 5px;
        animation-delay: 0.5s;
      }
      &:nth-of-type(3) {
        right: 130px;
      }
      &:nth-of-type(5) {
        left: 130px;
      }

      &:nth-of-type(4) {
        width: 200px;
        height: 200px;
        position: relative;
        z-index: 1;
      }
    }
  }
}

.section2 {
  padding: 0;
  position: relative;

  .section2__background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    object-fit: cover;
  }

  .section2__content {
    width: 100%;
    height: 100%;
    background: rgba($s_color, 0.85);
    padding: 100px 5%;
    z-index: 2;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .section2__content__data {
      color: #fff;
      max-width: 500px;
      width: 100%;

      h3 {
        color: #000;
      }

      h1 {
        margin-bottom: 20px;
      }
    }

    .section2__content__gallery {
      width: 500px;
      margin-left: 100px;
      position: relative;

      .media {
        position: absolute;
        background: rgba(68, 68, 68, 0.3);
        width: 300px;
        height: 300px;
        object-fit: cover;

        &:nth-of-type(1) {
          top: -150px;
          left: 220px;
        }
        &:nth-of-type(2) {
          top: 50px;
          left: -70px;
        }
        &:nth-of-type(3) {
          top: 230px;
          left: 210px;
        }
      }
    }
  }
}

.section3 {
  @extend %section;

  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  span h1 {
    font-size: 13rem;
    font-weight: 500;
    margin: -70px 100px 0 100px;

    strong {
      font-weight: 500;
    }
  }

  .section3__content {
    width: 100%;
    max-width: 400px;
  }
}

.activators_carousel {
  background-image: linear-gradient(135deg, #1475cd 10%, #08477c 100%);

  .activators-slide {
    padding: 0 var(--global_padding);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100vw;
    height: 600px;
    color: #fff;

    img {
      height: 100%;
      width: 500px;
      padding-top: 10%;
      object-fit: contain;
      object-position: bottom;
    }

    .slide_text {
      display: flex;
      flex-direction: column;

      .title {
        font-weight: 500;
        margin-bottom: 40px;
      }

      .slide_text_name {
        p {
          display: inline;
          @extend %a_color;
          padding: 0.5rem;
          text-transform: uppercase;
          font-size: 1rem;
          font-weight: 700;
        }
      }

      .slide_text_position {
        margin-top: 15px;
        margin-left: 4rem;

        p {
          display: inline;
          background: #d6d6d6;
          color: #000;
          padding: 0.5rem;
          font-size: 1rem;
        }
      }
    }
  }

  .swiper-button-prev {
    margin-left: 3%;
  }

  .swiper-button-next {
    margin-right: 3%;
  }
}

.section4 {
  @extend %section;

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .section4__title {
    margin-bottom: 2rem;
  }

  .section4__content {
    width: 100%;
    max-width: 700px;
  }
  .section4__principles {
    display: flex;
    flex-direction: column;
    margin-top: 100px;

    .principle {
      $separator_size: 30px;
      display: flex;
      align-items: center;
      position: relative;
      margin-bottom: $separator_size;

      &:nth-of-type(even) {
        flex-direction: row-reverse;

        .principle__text {
          left: 125%;
          text-align: left;
        }
      }

      .principle__text {
        cursor: pointer;
        text-align: right;
        position: absolute;
        right: 125%;
        top: -15px;
        width: 25vw;

        & > h2 {
          word-wrap: normal;
          display: bloc;
        }
      }

      .principle__circle {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid $p_color;
        padding: 25px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      &:last-child > .separator {
        display: none;
      }

      .separator {
        width: 1px;
        height: $separator_size;
        background: $p_color;
        position: absolute;
        top: 100%;
        left: 50%;
      }
    }
  }
}

.video_carousel {
  display: flex;
  justify-content: center;

  .video_carousel__wrapper {
    width: 100%;
    max-width: 900px;
  }
}

.compensation_plan {
  @extend %section;

  padding-bottom: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    max-width: 700px;
    margin-top: 50px;
  }
}

.compensation-carousel {
  position: relative;
  height: 100%;
  background: #eee;

  &:nth-child(2) > .compensation-carousel__wrapper {
    background: rgba($s_color, 0.5);
  }

  img {
    position: absolute;
    right: 0;
    right: 0;
    width: 70%;
    height: 100%;
    z-index: 2;
    object-fit: cover;
  }

  .compensation-carousel__icon {
    position: absolute;
    z-index: 1;
    height: 80%;
    width: 50%;
    object-fit: contain;
    left: 0;
    top: 10%;
  }

  .compensation-carousel__wrapper {
    position: absolute;
    width: 70%;
    height: 100%;
    top: 0;
    right: 0;
    background: rgba($p_color, 0.5);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding: 0 10%;
    z-index: 3;

    h1 {
      margin-bottom: -20px;
    }

    .separator {
      width: 50%;
      height: 4px;
      background: #fff;
      margin-bottom: 1rem;
    }
  }
}

.highlighted_activator {
  @extend %section;

  padding-left: calc(var(--global_padding) * 2);
  padding-right: calc(var(--global_padding) * 2);
  padding-bottom: 100px;
  display: flex;
  align-items: flex-end;

  img {
    min-width: 200px;
    max-width: 200px;
    height: 250px;
    object-fit: cover;
  }

  .highlighted_separator {
    width: 3px;
    height: 200px;
    background: $p_color;
    margin: 0 50px;
  }

  .highlighted_info {
    & * {
      font-style: italic;
      font-weight: 500;
    }

    h5 {
      margin-bottom: 1rem;
    }
  }
}

.section5 {
  @extend %section;

  padding-bottom: 200px;
  padding-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  text-align: center;

  h1 {
    margin-bottom: 50px;
  }

  button {
    margin-top: 20px;
  }

  .section5__images {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    img {
      width: 25%;
      margin: 30px;
    }
  }
}

@media screen and (max-width: 1300px) {
  .section2__content {
    flex-direction: column-reverse;
    align-items: center;

    .section2__content__data {
      margin-top: 550px;
    }
  }
}

@media screen and (max-width: 1000px) {
  .activators-slide {
    img {
      display: none;
    }
  }

  .principle {
    display: block !important;

    .principle__circle,
    .separator {
      display: none;
    }

    .principle__text {
      position: initial !important;
      text-align: center !important;
      width: auto !important;
    }
  }

  .compensation-carousel {
    & > img,
    .compensation-carousel__wrapper {
      width: 100%;
    }

    .compensation-carousel__icon {
      display: none;
    }
  }

  .highlighted_activator {
    padding-left: var(--global_padding);
    padding-right: var(--global_padding);

    .highlighted_separator {
      margin: 0 25px;
    }
  }

  .section5 {
    padding: 100px var(--global_padding);

    .section5__images {
      display: none !important;
    }
  }
}

@media screen and (max-width: 800px) {
  .highlighted_activator {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 50px;

    & > img {
      max-width: 300px;
      height: 300px;
    }

    .highlighted_separator {
      width: 80%;
      height: 3px;
      margin: 50px 0;
    }
  }

  .section2__content__gallery {
    display: none;
  }

  .section2__content__data {
    margin-top: 0 !important;
  }
}

@media screen and (max-width: 600px) {
  .circles {
    transform: scale(0.6);
    margin-bottom: 20px !important;
  }

  .section3 span h1 {
    font-size: 8rem;
    margin-left: 0;
    margin-right: 0;
  }
}

@media screen and (max-width: 400px) {
  .circles {
    transform: scale(0.5);
    margin-bottom: 10px !important;
  }
}
</style>
