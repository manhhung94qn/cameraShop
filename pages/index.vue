<template>
  <div class="index">
    <Slide />
    <Service />
    <v-sheet elevation="1">
      <div class="row" id="slides">
        <div class="col-3">
          <div style="border:1px solid;">OKI</div>
        </div>
        <div class="col-3">
          <div style="border:1px solid; height:250px">OKI</div>
        </div>
        <div class="col-3">
          <div style="border:1px solid;">OKI</div>
        </div>
        <div class="col-3">
          <div style="border:1px solid;">OKI</div>
        </div>
      </div>
    </v-sheet>
  </div>
</template> 

<script>
import Slide from "@/components/Slide.vue";
import Service from "@/components/Service.vue";
//var Carousel = require('carousel');
export default {
  components: {
    Slide,
    Service
  },
  head() {
    return {
      title:
        "Ngọc camera, chuyên cung cấp các loại camera chất lượng cao với mức giá hợp lý.",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Ngọc camera, chuyên cung cấp các loại camera chất lượng cao với mức giá hợp lý."
        }
      ]
    };
  },
  // mounted () {
  //   new Carousel('#slides');;
  // },
  data() {
    return {
      model: 1
    };
  }
};
</script>
