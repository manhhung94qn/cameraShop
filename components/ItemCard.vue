<template>
  <v-hover v-slot:default="{ hover }">
    <v-card to="/inspire" class="mx-auto" width="344" :elevation="hover ? 3 : 0" :hover="true">
      <v-img v-once :src="product.imageSrc" height="250px"></v-img>
      <v-card-title v-once class="text-title">{{product.title}}</v-card-title>
      <v-card-subtitle>Giá: Liên hệ ngay để biết giá</v-card-subtitle>
      <v-card-text>
        <p>Miễn phí lắp đặt</p>
      </v-card-text>
      <v-card-actions class="d-flex justify-space-between">
        <v-btn text outlined rounded color="bgPrimary" @click.stop.prevent="addItemInToCard(product)">Thêm vào giỏ</v-btn>
        <v-btn text rounded outlined color="bgSuccess" @click.stop.prevent>Mua ngay</v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      product: {
        id: Math.floor(Math.random() * 3) + 1,
        imageSrc: `/images/p${Math.floor(Math.random() * 3) + 1}.png`,
        title: this.getRandomName(),
        quatity: 1
      }
    };
  },
  methods: {
    getRandomName() {
      let brands = ["Xiaomi", "KbVision", "HikVision"];
      let fu = ["Wifi", "360", "Hồng ngoại"];
      let num_1 = Math.floor(Math.random() * 2) + 1;
      let num_2 = Math.floor(Math.random() * 2) + 1;
      return `Camera ${brands[num_1]} A${num_1}${num_2}`;
    },
    addItemInToCard(item){
      this.setIsShowSnackbar({value: true});
      this.addItemInCard(item)
    },
    ...mapActions({
      addItemInCard: 'product/addItemInCard'
    }),
    ...mapMutations({
      setIsShowSnackbar: 'view/setIsShowSnackbar'
    })
  }
};
</script>

<style lang="scss" scoped>
.text-title {
  font-size: 1em;
}
</style>