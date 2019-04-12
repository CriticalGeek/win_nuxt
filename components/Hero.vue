<template>
  <div class="hero">
    <div v-rellax="{ speed: -5 }">
      <slot name="background" />
    </div>
    <div class="heroContent">
      <div v-rellax="{ speed: 3 }">
        <slot name="title" />
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/scss/theme/colors";
@import "../assets/scss/theme/vars";

.hero {
  width: 100%;
  height: calc(90vh - var(--navbar_height));
  min-height: 400px;
  position: relative;
  overflow: hidden;

  & > div {
    width: 100%;
    height: 100%;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .heroContent {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: radial-gradient(
      ellipse closest-side,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.8)
    );
    padding: 0 var(--global_padding);
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
      width: 100%;
      max-width: 900px;

      h1 {
        @extend %a_color;
        display: inline-block;
        line-height: 1;
      }

      p {
        margin-top: 2rem;
      }
    }
  }
}
</style>

