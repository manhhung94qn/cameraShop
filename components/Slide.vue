<template>
  <div class="slide">
    <div class="row justify-end py-0">
      <div class="col-lg-9 py-0">
        <v-carousel cycle interval="10000" :height="computedInnerWidth">
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
          src: "/images/b0.jpg",
          to: '/test'
        },
        {
          src: "/images/b1.jpg",
          to: '/test'
        },
        {
          src: "/images/b2.jpg",
          to: '/test'
        },
        {
          src: "/images/b3.jpg",
          to: 'test'
        }
      ],
      innerWidth: 0
    };
  },
  beforeMount() {
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