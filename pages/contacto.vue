<template>
  <div class="contact">
    <Hero>
      <img
        :src="contact_background"
        slot="background"
      >
      <span
        slot="title"
        v-html="contact_title"
        data-aos="fade"
        data-aos-duration="700"
      ></span>
      <span
        slot="content"
        v-html="contact_content"
        data-aos="fade"
        data-aos-duration="700"
      ></span>
    </Hero>

    <section
      class="links"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <div
        class="link"
        v-for="social in contact_social"
        :key="social in contact_social"
      >
        <div class="link__header">
          <a
            :href="social.url"
            target="_blank"
            rel="noopner noreferrer"
          >
            <img :src="social.icon">
          </a>
          <p>{{ social.title }}</p>
        </div>
        <div class="link__links">
          <span
            v-html="item.name"
            v-for="item in social.contact"
            :key="item in social.contact"
          ></span>
        </div>
      </div>
    </section>

    <section class="addresses">
      <div
        class="address"
        v-for="address in contact_addresses"
        :key="address in contact_addresses"
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <img :src="address.icon">
        <h4>{{ address.name }}</h4>
        <p>{{ address.address }}</p>
      </div>
    </section>
  </div>
</template>

<script>
  import Hero from '@/components/Hero'

  export default {
    components: {
      Hero
    },
    data () {
      return {
        // Hero
        contact_title: this.$store.state.content.contact.hero.title,
        contact_content: this.$store.state.content.contact.hero.content,
        contact_background: this.$store.state.content.contact.hero.background,

        // Social
        contact_social: this.$store.state.content.contact.social,

        // Addresses
        contact_addresses: this.$store.state.content.contact.addresses
      }
    }
  }
</script>

<style lang="scss">
@import "../assets/scss/theme/colors";
@import "../assets/scss/theme/vars";

.links {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 100px var(--global_padding) 0 var(--global_padding);

  .link {
    margin: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:first-child {
      width: 80%;

      .link__header {
        flex-direction: row;
        justify-content: center;
        width: 80%;
      }

      .link__links {
        width: 100%;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        span {
          display: block;
          margin: 1rem;

          &:first-child {
            margin-top: 0;
            width: 100%;
          }
        }
      }
    }

    .link__header {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      align-items: flex-end;

      img {
        width: 80px;
        height: 80px;
        object-fit: contain;
        margin-left: 1rem;
      }

      p {
        font-size: 1rem;
        opacity: 0.5;
      }
    }

    .link__links {
      width: 100%;
      text-align: right;

      p {
        font-size: 1.8rem;
      }
    }
  }
}

.addresses {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 100px var(--global_padding);

  .address {
    max-width: 300px;
    width: 100%;
    margin: 30px;
    text-align: center;

    img {
      width: 100%;
      height: 300px;
      object-fit: contain;
      margin-bottom: -60px;
    }

    p {
      font-size: 1rem;
    }
  }
}
</style>


