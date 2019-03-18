<template>
  <section class="post">
    <article>
      <div class="header">
        <img :src="post.thumbnail">
        <div class="header__text">
          <span>
            <h3
              data-aos="fade-left"
              data-aos-duration="700"
            ><em>{{ post.title }}</em></h3>
          </span>
        </div>
      </div>
      <div
        class="content"
        v-html="post.entry"
        data-aos="fade-right"
        data-aos-duration="700"
      ></div>
    </article>

    <aside>
      <h5>{{ relatedText }}</h5>
      <hr>
      <ul>
        <li
          v-for="related in relatedPost"
          :key="related in relatedPost"
        >
          <nuxt-link :to="related.url">
            <img :src="related.thumbnail">
            <div clasS="related__description">
              <h5>{{ related.name }}</h5>
              <p>{{ related.title }}</p>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </aside>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        id: this.$route.params.id,
        posts: this.$store.state.content.resources.entries.articles,
        relatedText: this.$store.state.content.resources.entries.related,
      }
    },
    computed: {
      post () {
        return this.posts.find(post => post.id === this.id)
      },
      relatedPost () {
        return this.posts.filter(post => post.id !== this.id)
      }
    }
  }
</script>

<style lang="scss">
@import "../../assets/scss/theme/colors";
@import "../../assets/scss/theme/vars";

.post {
  width: 100%;
  padding: 50px;
  display: flex;
  align-items: flex-start;

  article {
    width: calc(100% - 430px);
    margin-right: 30px;

    .header {
      width: 100%;
      position: relative;
      height: 400px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .header__text {
        width: 50%;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        padding: 50px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        background-image: linear-gradient(
          75deg,
          rgb(114, 238, 242) 10%,
          rgb(81, 81, 229) 100%
        );
        color: #fff;
      }
    }

    .content {
      padding: 50px;
      width: 100%;

      ol,
      ul {
        margin: 2rem 4rem;
      }

      img {
        margin: 2rem 0;
        width: 100%;
        max-height: 400px;
        object-fit: contain;
        text-align: center;
      }
    }
  }

  aside {
    width: 400px;
    padding: 25px;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
    text-align: center;

    hr {
      opacity: 0.5;
      margin: 1rem 0;
    }

    ul {
      list-style: none;
      width: 100%;
      margin: 0;

      li {
        margin-bottom: 1rem;
        width: 100%;

        a {
          width: 100%;
          display: flex;
          text-decoration: none;
          color: #000;

          img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin-right: 20px;
          }

          .related__description {
            width: calc(100% - 120px);
            text-align: left;

            p {
              font-size: 0.9rem;
            }
          }
        }
      }
    }
  }
}
</style>
