<template>
  <section class="compensacion">

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

    <section class="plan">
      <img :src="plan.img">
      <h3><strong> {{ plan.title }} </strong></h3>
      <h1> {{ plan.subtitle }} </h1>
      <span v-html="plan.content"></span>
    </section>

    <section class="nivel1">
      <div class="nivel1__intro">
        <div class="nivel1__intro__title">
          <h5> {{ nivel1.title }} </h5>
          <h3> {{ nivel1.subtitle }} </h3>
          <hr>
        </div>
        <img
          v-for="(image, index) in nivel1.gallery"
          :key="`lvl1-img-${index}`"
          :src="image"
        >
      </div>

      <div
        class="nivel1__content"
        v-html="nivel1.content"
      ></div>

      <div class="nivel1__plan">
        <img :src="plan.img">
        <div class="nivel1__plan__tiles">
          <div
            class="tile_wrapper"
            v-for="(tile, index) in nivel1.tiles"
            :key="`plantiles${index}`"
          >
            <div class="up-tile">
              <img :src="tile.img">
              <p> {{ tile.name }} </p>
            </div>
            <div class="down-tile">
              <h1> {{ tile.quantity }} </h1>
              <p> {{ tile.description }} </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="nivel2">
      <div class="nivel2__intro">
        <div class="nivel2__intro__title">
          <h5> {{ nivel2.title }} </h5>
          <h3> {{ nivel2.subtitle }} </h3>
          <hr>
        </div>
        <img
          v-for="(image, index) in nivel2.gallery"
          :key="`lvl2-img-${index}`"
          :src="image"
        >
      </div>

      <div
        class="nivel2__content"
        v-html="nivel2.content"
      ></div>

      <div class="nivel2__table">
        <img :src="plan.img">

        <table style="color: #fff;">
          <tr>
            <td></td>
            <td style="background: #5C5C5C; font-size: 1rem;">Nivel 1</td>
            <td style="background: #459829; font-size: 1rem;">Nivel 2</td>
            <td style="background: #008985; font-size: 1rem;">Nivel 3</td>
            <td style="background: #00698F; font-size: 1rem;">Nivel 4</td>
            <td style="background: #005EA8; font-size: 1rem;">Nivel 5</td>
            <td style="background: #003C73; font-size: 1rem;">Nivel 6</td>
            <td style="background: #ff2d2d; font-size: 1rem;">TOTALES</td>
          </tr>
          <tr>
            <td style="background: #ff2d2d; text-align: center;">
              <img
                style="height: 40px; margin-bottom: -20px;"
                src="/img/negocios.svg"
              > <br>
              <span>NEGOCIOS</span>
            </td>
            <td style="background: #7C7B7B; line-height: 1.2;">6 <br> <span>DIRECTOS</span></td>
            <td style="background: #7CAE50; line-height: 1.2;">18 <br> <span>INDIRECTOS</span></td>
            <td style="background: #4BAAA0; line-height: 1.2;">54 <br> <span>INDIRECTOS</span></td>
            <td style="background: #3D84A5; line-height: 1.2;">162 <br> <span>INDIRECTOS</span></td>
            <td style="background: #458EC8; line-height: 1.2;">486 <br> <span>INDIRECTOS</span></td>
            <td style="background: #004D8B; line-height: 1.2;">1458 <br> <span>INDIRECTOS</span></td>
            <td style="background: #ff2d2d; line-height: 1.2;">2184 <br> <span>NEGOCIOS</span></td>
          </tr>
          <tr>
            <td style="background: #ff2d2d; text-align: center;">
              <img
                style="height: 40px; margin-bottom: -20px;"
                src="/img/joyners.svg"
              > <br>
              <span>JOYNERS</span>
            </td>
            <td style="background: #9e9d9d; line-height: 1.2;">3 <br> <span>DIRECTOS</span></td>
            <td style="background: #A4C477; line-height: 1.2;">9 <br> <span>INDIRECTOS</span></td>
            <td style="background: #7FC1BD; line-height: 1.2;">27 <br> <span>INDIRECTOS</span></td>
            <td style="background: #72A1C0; line-height: 1.2;">81 <br> <span>INDIRECTOS</span></td>
            <td style="background: #67B7E4; line-height: 1.2;">243 <br> <span>INDIRECTOS</span></td>
            <td style="background: #4F71A8; line-height: 1.2;"></td>
            <td style="background: #ff2d2d; line-height: 1.2;">363 <br> <span>JOYNERS</span></td>
          </tr>
          <tr>
            <td style="background: #ff2d2d; text-align: center;">
              <img
                style="height: 40px; margin-bottom: -20px;"
                src="/img/ganancias.svg"
              > <br>
              <span>GANANCIAS</span>
            </td>
            <td style="background: #006E8F;">.20%</td>
            <td style="background: #006E8F;">.10%</td>
            <td style="background: #006E8F;">.10%</td>
            <td style="background: #006E8F;">.10%</td>
            <td style="background: #006E8F;">.10%</td>
            <td style="background: #006E8F;">.10%</td>
            <td style="background: #ff2d2d;">.70%</td>
          </tr>
        </table>
      </div>
    </section>

    <section class="earnings">
      <h1><em> {{ earnings.title }} </em></h1>
      <p> {{ earnings.description }} </p>

      <table style="margin-bottom: 0;">
        <tr>
          <td><img src="/img/ico-potencialdeganancias-01.svg"></td>
          <td><img src="/img/ico-potencialdeganancias-02.svg"></td>
          <td><img src="/img/ico-potencialdeganancias-03.svg"></td>
          <td><img src="/img/ico-potencialdeganancias-04.svg"></td>
          <td><img src="/img/ico-potencialdeganancias-05.svg"></td>
        </tr>
      </table>
      <table style="color: #fff; margin-top: 0;">
        <tr style="background: #13829E">
          <td style="font-size: 1rem;">Nivel 1</td>
          <td style="font-size: 1rem;">Nivel 2</td>
          <td style="font-size: 1rem;">Nivel 3</td>
          <td style="font-size: 1rem;">Nivel 4</td>
          <td style="font-size: 1rem;">Nivel 5</td>
          <td style="font-size: 1rem;">Nivel 6</td>
        </tr>
        <tr>
          <td style="background: #7D7C80; line-height: 1.2;">$240 <br> <span>MXN</span></td>
          <td style="background: #79C06F; line-height: 1.2;">$120 <br> <span>MXN</span></td>
          <td style="background: #41BDB2; line-height: 1.2;">$120 <br> <span>MXN</span></td>
          <td style="background: #4596B0; line-height: 1.2;">$120 <br> <span>MXN</span></td>
          <td style="background: #4E9CCE; line-height: 1.2;">$120 <br> <span>MXN</span></td>
          <td style="background: #00659C; line-height: 1.2;">$120 <br> <span>MXN</span></td>
        </tr>
        <tr style="background: #ff2d2d;">
          <td>.20%</td>
          <td>.10%</td>
          <td>.10%</td>
          <td>.10%</td>
          <td>.10%</td>
          <td>.10%</td>
        </tr>
        <tr>
          <td style="background: #7D7C80; line-height: 1.2;">x6 <br> <span>NEGOCIOS</span></td>
          <td style="background: #79C06F; line-height: 1.2;">x18 <br> <span>NEGOCIOS</span></td>
          <td style="background: #41BDB2; line-height: 1.2;">x54 <br> <span>NEGOCIOS</span></td>
          <td style="background: #4596B0; line-height: 1.2;">x162 <br> <span>NEGOCIOS</span></td>
          <td style="background: #4E9CCE; line-height: 1.2;">x486 <br> <span>NEGOCIOS</span></td>
          <td style="background: #00659C; line-height: 1.2;">x1458 <br> <span>NEGOCIOS</span></td>
        </tr>
        <tr>
          <td style="background: #7D7C80; opacity: .7; line-height: 1.2;">x3 <br> <span>JOYNERS</span></td>
          <td style="background: #79C06F; opacity: .7; line-height: 1.2;">x9 <br> <span>JOYNERS</span></td>
          <td style="background: #41BDB2; opacity: .7; line-height: 1.2;">x27 <br> <span>JOYNERS</span></td>
          <td style="background: #4596B0; opacity: .7; line-height: 1.2;">x81 <br> <span>JOYNERS</span></td>
          <td style="background: #4E9CCE; opacity: .7; line-height: 1.2;">x243 <br> <span>JOYNERS</span></td>
          <td style="background: #00659C; opacity: .7; line-height: 1.2;"></td>
        </tr>
        <tr style="background: #13829E">
          <td style="font-size: 1rem;">$1,440</td>
          <td style="font-size: 1rem;">$2,160</td>
          <td style="font-size: 1rem;">$6,480</td>
          <td style="font-size: 1rem;">$19,440</td>
          <td style="font-size: 1rem;">$58,320</td>
          <td style="font-size: 1rem;">$174,960</td>
        </tr>
        <tr>
          <td
            colspan="6"
            style="color: #000; font-size: 1rem;"
          >Acumulado</td>
        </tr>
        <tr style="background: #686868;">
          <td style="font-size: 1rem;">$1,440</td>
          <td style="font-size: 1rem;">$3,600</td>
          <td style="font-size: 1rem;">$10,080</td>
          <td style="font-size: 1rem;">$29,520</td>
          <td style="font-size: 1rem;">$87,840</td>
          <td style="font-size: 1rem;">$262,800</td>
        </tr>
        <tr style="background: #ff2d2d;">
          <td colspan="3">2184 NEGOCIOS</td>
          <td colspan="3">
            <div style="display: flex; align-items: center; justify-content: space-around;">
              <div style="font-size: 1rem">
                Ingresos <br> residuales
              </div>
              <div style="display: flex;">
                TOTAL: $262,800
              </div>
            </div>
          </td>
        </tr>
      </table>

      <div v-html="earnings.text"></div>
    </section>
  </section>
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
        heroBackground: this.$store.state.content.compensation.hero.background,
        heroTitle: this.$store.state.content.compensation.hero.title,
        heroContent: this.$store.state.content.compensation.hero.content,

        // Section 1 - Plan
        plan: {
          img: this.$store.state.content.compensation.plan.img,
          title: this.$store.state.content.compensation.plan.title,
          subtitle: this.$store.state.content.compensation.plan.subtitle,
          subtitle: this.$store.state.content.compensation.plan.subtitle,
          content: this.$store.state.content.compensation.plan.content,
        },

        // Nivel #1
        nivel1: {
          title: this.$store.state.content.compensation.nivel1.title,
          subtitle: this.$store.state.content.compensation.nivel1.subtitle,
          content: this.$store.state.content.compensation.nivel1.content,
          gallery: this.$store.state.content.compensation.nivel1.gallery,
          tiles: this.$store.state.content.compensation.nivel1.tiles
        },

        // Nivel #2
        nivel2: {
          title: this.$store.state.content.compensation.nivel2.title,
          subtitle: this.$store.state.content.compensation.nivel2.subtitle,
          content: this.$store.state.content.compensation.nivel2.content,
          gallery: this.$store.state.content.compensation.nivel2.gallery
        },

        // Earnings
        earnings: {
          title: this.$store.state.content.compensation.earnings.title,
          description: this.$store.state.content.compensation.earnings.description,
          table: this.$store.state.content.compensation.earnings.table,
          text: this.$store.state.content.compensation.earnings.text
        }
      }
    }
  }
</script>

<style lang="scss">
@import "../assets/scss/theme/colors";
@import "../assets/scss/theme/vars";

.plan {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px var(--global_padding);
  text-align: center;
  background: #fbfbfb;

  & > img {
    margin-bottom: 20px;
    width: 300px;
    object-fit: contain;
  }

  & > span {
    width: 100%;
    max-width: 700px;
  }
}

.nivel1 {
  padding: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .nivel1__intro {
    display: flex;

    .nivel1__intro__title {
      width: 25%;

      & > hr {
        border-top: 4px solid $a_color;
      }
    }

    & > img {
      object-fit: cover;

      &:nth-of-type(1) {
        width: calc(50% - 40px);
        margin: 0 20px;
      }

      &:nth-of-type(2) {
        width: 25%;
      }
    }
  }

  .nivel1__content {
    margin-top: 50px;
    margin-left: calc(25% + 20px);
    width: 500px;
  }

  .nivel1__plan {
    margin-top: 50px;
    margin-left: calc(25% - 30px);
    display: flex;

    & > img {
      width: 200px;
      object-fit: contain;
      object-position: top;
    }

    .nivel1__plan__tiles {
      display: flex;

      .tile_wrapper {
        width: 180px;
        margin: 0 15px;

        .up-tile {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 130px;
          padding: 10px 0;
          text-align: center;
          background: red;
          color: #fff;
          margin-bottom: 30px;

          & > img {
            width: 60px;
            height: 60px;
            object-fit: contain;
            margin-bottom: 5px;
          }
        }

        &:nth-child(2) > .down-tile {
          background: #7c7b7b;
        }

        &:nth-child(3) > .down-tile {
          background: #0d809d;
        }

        .down-tile {
          background: #5c5c5c;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 130px;
          color: #fff;

          & > p {
            margin-top: -1rem;
          }
        }
      }
    }
  }
}

.nivel2 {
  background: #f5f9fd;
  padding: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .nivel2__intro {
    display: flex;
    flex-direction: row-reverse;

    .nivel2__intro__title {
      width: 25%;

      & > hr {
        border-top: 4px solid $a_color;
      }
    }

    & > img {
      object-fit: cover;

      &:nth-of-type(1) {
        width: calc(50% - 40px);
        margin: 0 20px;
      }

      &:nth-of-type(2) {
        width: 25%;
      }
    }
  }

  .nivel2__content {
    margin-top: 50px;
    margin-right: calc(25% + 20px);
    width: 500px;
    text-align: right;
  }

  .nivel2__table {
    margin-right: calc(25% + 20px);
    margin-top: 50px;
    display: flex;
    align-items: center;

    & > img:first-child {
      width: 200px;
      object-fit: contain;
      object-position: top;
    }
  }
}

.earnings {
  padding: 100px var(--global_padding);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & > img {
    margin: 50px;
  }

  & > div {
    width: 100%;
    max-width: 800px;
  }
}

table {
  width: 100%;
  max-width: 700px;
  margin: 50px 0;

  & > tr td {
    box-sizing: border-box;
    font-size: 1.4rem;
    text-align: center;
    padding: 0.7rem;
    font-weight: 700;

    & > span {
      font-size: 0.8rem;
      font-weight: 400;
    }
  }
}
</style>
