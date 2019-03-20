<template>
  <div class="navbar">
    <div class="safearea"></div>
    <div class="nav_background"></div>
    <nav>
      <nuxt-link to="/">
        <img
          :src="navbar_img"
          class="brand"
        >
      </nuxt-link>
      <div class="nav_actions">
        <a
          :href="navbar_actionURL"
          class="btn login"
        >{{ navbar_action }}</a>
        <div v-on:click="navMenu">
          <MenuIcon :status="menuStatus" />
        </div>
      </div>
    </nav>

    <div
      class="menu animated fadeIn"
      id="menu"
    >
      <div class="links">
        <nuxt-link
          v-for="(link, index) in menu_links"
          :key="`menuLinks-${index}`"
          :to="link.url"
          v-on:click.native="navMenu"
        >{{ link.name }}</nuxt-link>
      </div>

      <div class="menu__separator"></div>

      <div class="menu__social">
        <a
          :href="social.url"
          target="_blank"
          rel="noopener noreferrer"
          v-for="(social, index) in menu_social"
          :key="`menuSocual-${index}`"
        >
          <img :src="social.icon">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import MenuIcon from '@/components/MenuIcon'

  export default {
    data () {
      return {
        // Navbar
        navbar_img: this.$store.state.content.navbar.logo,
        navbar_action: this.$store.state.content.navbar.action,
        navbar_actionURL: this.$store.state.content.navbar.actionURL,

        // Menu
        menu_links: this.$store.state.content.menu.links,
        menu_social: this.$store.state.content.menu.social,

        menuStatus: 'reverse'
      }
    },
    components: {
      MenuIcon
    },
    methods: {
      navMenu: function (e) {
        let menu = document.getElementById('menu')

        if (menu.classList.contains('active') == false) {
          menu.classList.remove('fadeOut')
          menu.classList.add('fadeIn')
          menu.classList.add('active')
          menu.style.display = 'block'
          menu.style.display = 'flex'
          this.menuStatus = 'play'
        } else {
          this.menuStatus = 'reverse'
          menu.classList.remove('active')
          menu.classList.remove('fadeIn')
          menu.classList.add('fadeOut')
          setTimeout(() => {
            menu.style.display = "none"
          }, 300)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "../assets/scss/theme/colors";
@import "../assets/scss/theme/vars";

.navbar {
  .safearea {
    width: 100%;
    height: var(--navbar_height);
  }

  .nav_background {
    background: $dark_background;
    transform: translate3d(0, 0, 0);

    width: 100%;
    height: var(--navbar_height);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 90;
  }

  nav {
    @extend %dark_background;

    background: transparent;
    width: 100%;
    height: var(--navbar_height);
    padding: 0 var(--global_padding);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 101;

    & > a {
      height: 60%;

      .brand {
        height: 100%;
        object-fit: contain;
      }
    }

    .nav_actions {
      display: flex;
      align-items: center;

      a {
        padding: 0.3rem 1rem;
        font-size: 0.8rem;
        font-weight: 700;
        margin-right: 2rem;
        font-size: 1rem;
      }

      svg {
        fill: #fff;
        cursor: pointer;
        width: 40px;
        height: 40px;
      }
    }
  }

  .menu {
    width: 100%;
    height: 100vh;
    background: $s_color;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation-duration: 500ms;
    animation-fill-mode: forwards;

    .links {
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      a {
        color: inherit;
        font-size: 1.7rem;
        text-decoration: none;
      }
    }

    .menu__separator {
      width: 80%;
      max-width: 300px;
      margin: 40px 0;
      height: 2px;
      background: #fff;
    }

    .menu__social {
      display: flex;
      align-items: center;

      a {
        display: block;
        width: 50px;
        height: 50px;
        margin: 0 15px;

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: grayscale(100%);
          transition: ease 0.3s;
          opacity: 0.5;
        }

        &:hover > img {
          filter: grayscale(0);
          opacity: 1;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  .login {
    position: fixed;
    bottom: 25px;
    left: 25px;
  }
}
</style>

