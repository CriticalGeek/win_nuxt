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
        <div v-on:click="navMenu('links')">
          <MenuIcon :status="menuStatus" />
        </div>
      </div>
    </nav>

    <Fab v-on:click.native="navMenu('form')" />

    <div
      id="navContent"
      class="menu animated fadeIn"
    >
      <div v-if="showNavMenu == 'links'">
        <div class="links">
          <nuxt-link
            v-for="(link, index) in menu_links"
            :key="`menuLinks-${index}`"
            :to="link.url"
            v-on:click.native="navMenu('links')"
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

      <div
        v-else-if="showNavMenu == 'form'"
        class="menuForm"
      >
        <h1>{{ form.title }}</h1>
        <p>{{ form.subtitle }}</p>
        <form>
          <div class="form-group">
            <input
              id="name"
              name="name"
              type="text"
              required
            >
            <label for="name">Nombre:</label>
          </div>
          <div class="form-group">
            <input
              id="phone"
              name="phone"
              type="text"
              required
            >
            <label for="phone">Teléfono:</label>
          </div>
          <div class="form-group">
            <input
              id="email"
              name="email"
              type="text"
              required
            >
            <label for="email">Correo eléctronico</label>
          </div>
          <div class="form-group">
            <textarea
              id="msg"
              name="msg"
              required
            ></textarea>
            <label for="msg">Mensaje</label>
          </div>

          <button class="btn">{{ form.action }}</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
  import MenuIcon from '@/components/MenuIcon'
  import Fab from '@/components/Fab'

  export default {
    data () {
      return {
        menuStatus: 'reverse',
        showNavMenu: 'links',

        // Navbar
        navbar_img: this.$store.state.content.navbar.logo,
        navbar_action: this.$store.state.content.navbar.action,
        navbar_actionURL: this.$store.state.content.navbar.actionURL,

        // Menu
        menu_links: this.$store.state.content.menu.links,
        menu_social: this.$store.state.content.menu.social,

        // Form
        form: {
          title: this.$store.state.content.form.title,
          subtitle: this.$store.state.content.form.subtitle,
          fields: this.$store.state.content.form.fields,
          action: this.$store.state.content.form.action
        }
      }
    },
    components: {
      MenuIcon,
      Fab
    },
    methods: {
      navMenu: function (status) {
        this.showNavMenu = status

        let menu = document.getElementById('navContent')

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
    background: darken($s_color, 10%);
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
      padding: 0;

      a {
        color: inherit;
        font-size: 1.7rem;
        text-decoration: none;
      }
    }

    .menu__separator {
      width: 100%;
      max-width: 400px;
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

.menuForm {
  text-align: center;
  color: #fff;

  h1 {
    color: $p_color;
  }

  form {
    margin-top: 50px;
    .form-group {
      display: flex;
      align-items: center;
      position: relative;
      margin-bottom: 1rem;

      label {
        position: absolute;
        left: 0.5rem;
        top: 10px;
        font-size: 1rem;
        padding: 0 5px;
        background: darken($s_color, 10%);
        transition: ease.3s;
      }

      input,
      textarea {
        background: none;
        border: 1px solid #fff;
        border-radius: 5px;
        outline: none;
        padding: 0.5rem;
        width: 100%;
        color: #fff;
        font-size: 1rem;
      }

      input {
        height: 3rem;
      }

      textarea {
        width: 100%;
        resize: vertical;
        height: 12rem;
        max-height: 16rem;
        min-height: 8rem;
        margin-bottom: 2rem;
      }

      input:focus + label,
      textarea:focus + label {
        top: -13px;
        left: 0;
        transform: scale(0.8);
        color: $p_color;
      }

      input:focus,
      textarea:focus {
        border: 1px solid $p_color;
      }

      input:valid + label,
      textarea:valid + label {
        top: -13px;
        left: 0;
        transform: scale(0.8);
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

