<template>
  <v-hover v-slot:default="{ hover }">
    <v-card to="/inspire" class="mx-auto" width="344" :elevation="hover ? 3 : 0" :hover="true">
      <v-img v-once :src="getRandomUrlImage()" height="250px"></v-img>
      <v-card-title v-once class="text-title">{{getRandomName()}}</v-card-title>
      <v-card-subtitle>Giá: Liên hệ ngay để biết giá</v-card-subtitle>
      <v-card-text>
        <p>Miễn phí lắp đặt</p>
      </v-card-text>
      <v-card-actions class="d-flex justify-space-between">
        <v-btn text outlined rounded color="bgPrimary">Thêm vào giỏ</v-btn>
        <v-btn text rounded outlined color="bgSuccess">Mua ngay</v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    getRandomUrlImage() {
      return `/images/p${Math.floor(Math.random() * 3) + 1}.png`;
    },
    getRandomName() {
      let brands = ["Xiaomi", "KbVision", "HikVision"];
      let fu = ["Wifi", "360", "Hồng ngoại"];
      let num_1 = Math.floor(Math.random() * 2) + 1;
      let num_2 = Math.floor(Math.random() * 2) + 1;
      return `Camera ${brands[num_1]} A${num_1}${num_2}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.text-title {
  font-size: 1em;
}
</style>