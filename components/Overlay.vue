<template>
  <v-overlay :value="computedIsOverlay">
    <v-progress-circular indeterminate 
      :width="3"
      color="red"></v-progress-circular>
  </v-overlay>
</template>

<script>
export default {
    computed: {
        computedIsOverlay() {
            return this.$store.state.view.isOverlay 
        }
    },
};
</script>

<style lang="scss" scoped>
</style>