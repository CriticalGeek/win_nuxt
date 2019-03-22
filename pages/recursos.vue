<template>
  <section class="resources">
    <Hero>
      <img
        :src="resources_background"
        slot="background"
      >
      <span
        slot="title"
        v-html="resources_title"
        data-aos="fade"
        data-aos-duration="700"
      ></span>
    </Hero>

    <section
      class="brochures"
      id="#folletos"
    >
      <h5
        data-aos="fade-up"
        data-aos-duration="700"
      >{{ brochures_title }}</h5>

      <div class="brochures_wrapper">
        <div
          class="brochure"
          data-aos="fade-up"
          data-aos-duration="700"
          v-for="(file, index) in brochures_files"
          :key="`brochureFiles-${index}`"
        >
          <img :src="file.background">
          <div class="brochure__title">
            <h5><em>{{ file.title }}</em></h5>
          </div>
          <div class="brochure__content">
            <a
              :href="file.pdf"
              class="btn"
              target="_blank"
              rel="noopener noreferrer"
            >{{ file.action }}</a>
          </div>
        </div>
      </div>
    </section>

    <section
      class="videos"
      id="#videos"
    >
      <h5
        data-aos="fade-up"
        data-aos-duration="700"
      >
        {{ videos_title }}
      </h5>
      <div class="videos__wrapper">
        <div
          class="video"
          v-for="(video, index) in videos_files"
          :key="`resourcesVideoFiles-${index}`"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <iframe
            width="400"
            height="220"
            :src="video.url"
            frameborder="0"
            allowFullScreen
            mozallowfullscreen
            webkitAllowFullScreen
          ></iframe>
          <div class="video__title">
            <h5>{{ video.title }}</h5>
          </div>
        </div>
      </div>
    </section>

    <section
      class="entries"
      id="entradas"
    >
      <h5
        data-aos="fade-up"
        data-aos-duration="700"
      >{{ entry_title }}</h5>

      <div class="entries__wrapper">
        <a
          :href="entry.url"
          target="_blank"
          rel="noopener noreferrer"
          class="entry"
          v-for="(entry, index) in entry_articles"
          :key="`entry-${index}`"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <img :src="entry.thumbnail">
          <div class="entry__resume">
            <h4>{{ entry.name }}</h4>
            <p>{{ entry.title }}</p>
          </div>
        </a>
      </div>
    </section>

    <section
      class="faqs"
      id="faqs"
    >
      <h5
        data-aos="fade-up"
        data-aos-duration="700"
      >{{ faqs_title }}</h5>

      <div class="faqs_wrapper">
        <Faqs />
      </div>
    </section>
  </section>
</template>

<script>
  import Hero from '@/components/Hero'
  import Faqs from '@/components/Faqs'

  export default {
    components: {
      Hero,
      Faqs
    },
    data () {
      return {
        // Hero
        resources_title: this.$store.state.content.resources.hero.title,
        resources_background: this.$store.state.content.resources.hero.background,

        // brochures
        brochures_title: this.$store.state.content.resources.brochures.title,
        brochures_files: this.$store.state.content.resources.brochures.files,

        // videos
        videos_title: this.$store.state.content.resources.videos.title,
        videos_files: this.$store.state.content.resources.videos.files,

        // entries
        entry_title: this.$store.state.content.resources.entries.title,
        entry_articles: this.$store.state.content.resources.entries.articles,

        // Faq's
        faqs_title: this.$store.state.content.resources.faqs.title

      }
    }
  }
</script>

<style lang="scss">
@import "../assets/scss/theme/colors";
@import "../assets/scss/theme/vars";

.brochures {
  padding: 100px 2%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .brochures_wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 40px;

    .brochure {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      margin: 25px;
      width: 100%;
      max-width: 250px;

      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
      }

      .brochure__title {
        position: absolute;
        top: 130px;
      }

      .brochure__content {
        width: 100%;
        background: #eee;
        padding: 3rem 2rem 2rem 2rem;
        text-align: center;
      }
    }
  }
}

.videos {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 var(--global_padding) 100px var(--global_padding);
  text-align: center;

  .videos__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;

    .video {
      width: 400px;
      margin: 0 20px 50px 20px;
      background: #eee;
    }

    .video__title {
      padding: 1rem;
      border-top: 6px solid $p_color;
      margin-top: -10px;
    }
  }
}

.entries {
  width: 100%;
  padding: 0 var(--global_padding) 100px var(--global_padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .entries__wrapper {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .entry {
      width: 350px;
      display: block;
      position: relative;
      margin: 25px;
      margin-bottom: 140px;

      img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        transition: ease 0.3s;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }

        & > .entry__resume {
          top: 10%;

          h4 {
            color: $p_color;
          }
        }
      }

      .entry__resume {
        width: 90%;
        height: 230px;
        position: absolute;
        left: 5%;
        top: 40%;
        background: rgba(#eee, 0.92);
        padding: 25px;
        text-align: left;
        color: #000;
        transition: ease 0.3s;

        h4 {
          line-height: 1;
          transition: ease 0.3s;
        }

        p {
          font-size: 1.1rem;
          margin-top: 0.5rem;
        }
      }
    }
  }
}

.faqs {
  width: 100%;
  padding: 0 var(--global_padding) 100px var(--global_padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .faqs_wrapper {
    margin-top: 50px;
    width: 100%;
    max-width: 1200px;
    box-shadow: 0 1px 16px rgba(0, 0, 0, 0.2);
  }
}
</style>
