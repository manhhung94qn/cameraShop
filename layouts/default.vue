<template>
  <v-app>
    <Header />
    <v-content class="app-content">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer absolute app>
      <span>&copy; 2019</span>
    </v-footer>
    <Overlay />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";
import Overlay from "@/components/Overlay.vue";
export default {
  components: {
    Header,
Overlay
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
.app-content {
  background-color:aliceblue !important;
}
a {
  i {
    color: inherit !important;
  }
}
</style>
