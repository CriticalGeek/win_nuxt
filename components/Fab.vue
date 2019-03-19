<template>
  <div class="fab">
    <div class="fab__wrapper">
      <div class="fab__wrapper__content">
        <h4>{{ fab }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        fab: this.$store.state.content.fab,
      }
    }
  }
</script>


<style lang="scss">
@import "../assets/scss/theme/colors";
@import "../assets/scss/theme/vars";

@keyframes fabAnimation {
  50% {
    transform: translateX(-25px);
  }
}
.fab {
  position: fixed;
  right: -170px;
  bottom: 40px;
  cursor: pointer;
  z-index: 100;
  transition: ease 0.3s;
  animation: fabAnimation 2s infinite;

  &:hover {
    right: 0;
    animation: none;
  }

  .fab__wrapper {
    position: relative;
    height: 80px;
    width: 250px;
    padding: 1.5rem 2rem;

    &::before {
      position: absolute;
      top: 0;
      right: -50px;
      content: "";
      width: 100%;
      height: 100%;
      background: $a_color;
      transform: skewX(12deg);
    }

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 25px;
      height: 100%;
      background: $a_color;
      transform: skewX(12deg);
    }

    .fab__wrapper__content {
      padding-left: 50px;
      width: 250px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      h4 {
        color: #fff;
        margin: 0;
        margin-left: 1rem;
        font-weight: 700;
        user-select: none;
      }
    }
  }
}
</style>
