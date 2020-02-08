<template>
  <div>
    <div class="row">
      <div class="col-lg-4" v-for="(item, i) in items" :key="i">
        <v-card class="py-5">
          <div class="d-flex flex-no-wrap justify-space-around justify-lg-center align-center">
            <div class="border-icon">
              <v-icon class="icon">{{item.icon}}</v-icon>
            </div>
            <div >
              <v-card-title class="pr-lg-0" v-text="item.title"></v-card-title>
              <v-card-subtitle class="pr-lg-0" v-text="item.artist"></v-card-subtitle>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "MIỄN PHÍ GIAO HÀNG",
        artist: "Cho hóa đơn từ 450,000đ",
        icon: 'mdi-airplane'
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Bảo Hành Nhanh Chóng",
        artist: "Đảm bảo bảo hành nhanh chóng",
        icon: 'mdi-shield-alert-outline'
      },
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Hỗ Trợ Tư Vấn 24/7",
        artist: "Hỗ trợ tư vấn nhiệt tình 24/7",
        icon: 'mdi-lifebuoy'
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.border-icon {
    border: 2px solid var(--v-bgSuccess-base);
    border-radius: 50%;
    .icon {
        padding: 5px;
        font-size: 2em;
        color: var(--v-textAccent-base);
    }
}
</style>