<template>
  <div class="embajadores">
    <div class="embajadores__row">
      <div class="embajadores__row__tile">
        <img
          src="/img/partners/tata.jpg"
          alt="tata mezcaleria"
        >
        <div class="content">
          <p> Si te vas a meter a bañar, salpica, creemos que
            eso es precisamente lo que hace WEENJOY,
            y cambiará el mundo.</p>
          <p><b>Tata Mezcaleria</b></p>
        </div>
      </div>

      <div class="embajadores__row__tile">
        <div class="content">
          <p> WEENJOY es una idea disruptiva, tecnológica,
            con una gran dimensión social donde todos se
            benefician económicamente.</p>
          <p><b>Creditcar</b></p>
        </div>
        <img
          src="/img/partners/creditcar.jpg"
          alt="creditcar"
        >
      </div>
    </div>

    <div class="embajadores__row">
      <div class="embajadores__row__tile">
        <img
          src="/img/partners/colchas_camelinas.jpg"
          alt="vianney"
        >
        <div class="content">
          <p> Con WEENJOY incrementaremos nuestras ventas.</p>
          <p><b>Colchas Camelinas</b></p>
        </div>
      </div>
      <div class="embajadores__row__tile">
        <div class="content">
          <p> Weenjoy es una APP totalmente revolucionaria
            que va a cambiar la manera de hacer negocios.</p>
          <p><b>Grupo Leomar</b></p>
        </div>
        <img
          src="/img/partners/leomar.jpg"
          alt="Grupo leomar"
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.embajadores {
  margin-top: 50px;
  width: 100%;

  .embajadores__row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }

    .embajadores__row__tile {
      max-width: 49%;
      min-width: 450px;
      display: flex;
      margin-bottom: 25px;

      &:nth-child(2) {
        .content {
          background: #00bea9;
          margin-left: 0;
          margin-right: 10px;
          padding: 1rem 2.5rem 1rem 1.2rem;

          &::before {
            content: "";
            width: 0;
            height: 0;
            border: 20px solid transparent;
            border-right: 20px solid #fff;
            position: absolute;
            top: 60px;
            right: 0;
          }

          &:after {
            display: none;
          }
        }
      }

      img {
        width: 160px;
        height: 160px;
        object-fit: cover;
      }

      .content {
        width: calc(100% - 160px);
        background: #0578da;
        margin-left: 10px;
        padding: 1rem 1.2rem 1rem 2.5rem;
        max-height: 160px;
        position: relative;

        &::after {
          content: "";
          width: 0;
          height: 0;
          border: 20px solid transparent;
          border-left: 20px solid #fff;
          position: absolute;
          top: 60px;
          left: 0;
        }

        p,
        b {
          color: #fff;
          font-size: 0.9rem;
          text-align: left;
          margin-bottom: 0;

          &:last-child {
            margin-top: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
