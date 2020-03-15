<template>
  <v-overlay :value="computedIsOverlay">
    <div class="container">
      <svg class="loader" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
        <circle cx="170" cy="170" r="160" stroke="#FF0000" />
        <circle cx="170" cy="170" r="135" stroke="#0F9ED8" />
        <circle cx="170" cy="170" r="110" stroke="#1976D2" />
        <circle cx="170" cy="170" r="85" stroke="#FFFFFF" />
      </svg>
    </div>

    <!-- <v-progress-circular indeterminate 
      :width="3"
    color="red"></v-progress-circular>-->
  </v-overlay>
</template>

<script>
export default {
  computed: {
    computedIsOverlay() {
      return this.$store.state.view.isOverlay;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  max-width: 4rem;
  width: 100%;
  height: auto;
  stroke-linecap: round;
}

circle {
  fill: none;
  stroke-width: 10px;
  animation-name: preloader;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  transform-origin: 170px 170px;
  will-change: transform;

  &:nth-of-type(1) {
    stroke-dasharray: 550px;
  }

  &:nth-of-type(2) {
    stroke-dasharray: 500px;
  }

  &:nth-of-type(3) {
    stroke-dasharray: 450px;
  }

  &:nth-of-type(4) {
    stroke-dasharray: 300px;
  }

  @for $i from 1 through 4 {
    &:nth-of-type(#{$i}) {
      animation-delay: -#{$i * 0.15}s;
    }
  }
}

@keyframes preloader {
  50% {
    transform: rotate(360deg);
  }
}
</style>