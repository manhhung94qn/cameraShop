<template>
  <div class="index">
    <Slide />
    <Service />
  </div>    
</template>

<script>
import Slide from '@/components/Slide.vue';
import Service from '@/components/Service.vue';
export default {
  components: {
    Slide,
    Service
  }
}
</script>
