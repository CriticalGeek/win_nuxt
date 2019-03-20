<template>
  <section class="profile">
    <div class="profile__header">
      <img
        data-aos="fade-up"
        data-aos-duration="700"
        :src="profile.cv.hero.image"
      >
      <div>
        <h1
          data-aos="fade-up"
          data-aos-duration="700"
        ><em>{{ profile.cv.hero.title }}</em></h1>
        <p
          data-aos="fade-up"
          data-aos-duration="700"
        >{{ profile.cv.hero.subtitle }}</p>
      </div>
    </div>

    <div class="profile__about">
      <img :src="profile.cv.about.photo">
      <div
        class="profile__about__info"
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <h2>{{ profile.cv.about.title }}</h2>
        <h4>{{ profile.cv.about.subtitle }}</h4>
        <span v-html="profile.cv.about.content"></span>
      </div>
    </div>

    <div class="profile__phrase">
      <h4
        data-aos="fade-up"
        data-aos-duration="700"
      >{{ profile.cv.phrase }}</h4>
    </div>

    <div class="profile__social">
      <img
        class="profile__social__thumbnail"
        :src="profile.cv.social.thumbnail"
      >
      <img
        class="profile__social__user"
        :src="profile.cv.social.user"
        data-aos="fade-up"
        data-aos-duration="700"
      >
      <div class="profile__social__networks">
        <a
          :href="social.url"
          v-for="(social, index) in profile.cv.social.networks"
          :key="`profileSocialNetworks-${index}`"
        >
          <img
            :src="social.icon"
            data-aos="fade-up"
            data-aos-duration="700"
          >
        </a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        id: this.$route.params.id,
        ambassadors: this.$store.state.content.ambassadors
      }
    },
    computed: {
      profile () {
        return this.ambassadors.find(ambassador => ambassador.id === this.id)
      }
    }
  }
</script>

<style lang="scss">
@import "../../assets/scss/theme/colors";
@import "../../assets/scss/theme/vars";

.profile {
  width: 100%;

  .profile__header {
    position: relative;
    height: 600px;
    display: flex;
    align-items: flex-end;
    padding: 100px var(--global_padding);

    img {
      position: absolute;
      top: 50px;
      right: var(--global_padding);
      width: 60%;
      height: 400px;
      object-fit: cover;
      z-index: -1;
    }

    p {
      @extend %s_color;
      display: inline-block;
    }
  }

  .profile__about {
    width: 100%;
    padding: 0 var(--global_padding);
    display: flex;

    & img {
      width: 400px;
      object-fit: contain;
      object-position: bottom;
    }

    .profile__about__info {
      margin-left: var(--global_padding);
      margin-bottom: 5rem;

      h4 {
        margin-bottom: 1rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }

  .profile__phrase {
    @extend %s_color;

    padding: 100px var(--global_padding);
    text-align: center;
  }

  .profile__social {
    padding: 100px var(--global_padding);
    height: 700px;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .profile__social__thumbnail {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    .profile__social__user {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
    }

    .profile__social__networks {
      a {
        img {
          width: 50px;
          height: 100px;
          object-fit: contain;
          margin: 1rem;
        }
      }
    }
  }
}

@media screen and (max-width: 980px) {
  .profile__about {
    & > img {
      display: none;
    }

    .profile__about__info {
      margin-left: 0 !important;
    }
  }
}
</style>
