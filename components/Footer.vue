<template>
  <footer class="footer">
    <div class="footer__links">
      <a
        v-for="link in footer_links"
        :key="link in footer_links"
        :href="link.url"
      >{{ link.name }}</a>
    </div>
    <img
      class="footer__logo"
      :src="footer_logo"
    >
    <div class="footer__social">
      <a
        :href="social.url"
        v-for="social in footer_social"
        :key="social in footer_social"
      >
        <img :src="social.icon">
      </a>
    </div>

    <p class="footer_rights">{{ footer_rights }}</p>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        footer_links: this.$store.state.content.footer.links,
        footer_logo: this.$store.state.content.footer.logo,
        footer_social: this.$store.state.content.footer.social,
        footer_rights: this.$store.state.content.footer.rights,
      }
    }
  }
</script>


<style lang="scss" scoped>
@import "../assets/scss/theme/colors";
@import "../assets/scss/theme/vars";

.footer {
  @extend %dark_background;

  padding: 80px var(--global_padding);

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .footer__links {
    & > a {
      color: inherit;
      text-decoration: none;
      margin: 0.5rem;
      font-size: 1rem;
    }
  }

  .footer__logo {
    height: 50px;
    object-fit: contain;
    margin: 50px 0 50px 120px;
  }

  .footer__social {
    img {
      width: 35px;
      height: 35px;
      object-fit: contain;
      margin: 0 10px;
      filter: grayscale(100%);
      transition: ease 0.3s;

      &:hover {
        filter: grayscale(0);
      }
    }
  }

  .footer_rights {
    margin-top: 50px;
    font-size: 1rem;
  }
}
</style>
