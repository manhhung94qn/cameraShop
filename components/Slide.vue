<template>
  <div class="container pa-0">
    <div class="row justify-end pa-0">
      <div class="col-lg-9 py-0">
        <v-carousel :height="computedInnerWidth">
          <v-carousel-item        
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
            :to="item.to"
            link
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          to: '/test'
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          to: '/test'
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          to: '/test'
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          to: 'test'
        }
      ],
      innerWidth: 0
    };
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.innerWidth = window.innerWidth;
    }
  },
  computed: {
      computedInnerWidth() {
          return this.innerWidth > 1264 ? 510 : 200; 
      }
  },
};
</script>

<style lang="scss" scoped>

</style>