<template>
  <v-overlay :value="computedIsOverlay">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
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