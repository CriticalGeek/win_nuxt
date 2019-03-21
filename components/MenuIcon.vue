<template>
  <div
    :class="'shapeshifter ' + status"
    style="background-image: url('/img/menu-icon.svg')"
  ></div>
</template>

<script>
  export default {
    data () {
      return {
        menuIcon: this.$store.state.content.navbar.menuIcon,
      }
    },
    computed: {
      status () {
        return this.$store.state.nav.menuStatus
      }
    }
  }
</script>


<style>
@keyframes play30 {
  0% {
    background-position: 0px 0px;
  }
  100% {
    background-position: -1500px 0px;
  }
}

@keyframes reverse30 {
  0% {
    background-position: -1500px 0px;
  }
  100% {
    background-position: 0px 0px;
  }
}

.shapeshifter {
  animation-duration: 500ms;
  animation-timing-function: steps(30);
  animation-fill-mode: forwards;
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;
  cursor: pointer;
}

.shapeshifter.play {
  animation-name: play30;
}

.shapeshifter.reverse {
  animation-name: reverse30;
}
</style>
