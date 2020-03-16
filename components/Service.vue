<template>
  <div>
    <div class="row justify-center">
      <v-expansion-panels class="px-3 py-1 mt-3 d-block d-sm-none">
        <v-expansion-panel>
          <v-expansion-panel-header class="d-flex align-center">
            <svg
              class="pulse ml-n5"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <circle id="Oval" cx="512" cy="512" r="512" />
              <circle id="Oval" cx="512" cy="512" r="512" />
              <circle id="Oval" cx="512" cy="512" r="512" />
            </svg>
            <p class="my-0 pl-1">Miễn phí vận chuyển, bảo hành...</p>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="px-0">
            <div
              class="mx-n6"
              :class="i==items.length-1?'mb-n5':''"
              v-for="(item, i) in items"
              :key="i"
            >
              <v-card class="py-5">
                <div
                  class="d-flex flex-no-wrap justify-space-around justify-lg-center align-center"
                >
                  <div class="border-icon">
                    <v-icon class="icon">{{item.icon}}</v-icon>
                  </div>
                  <div>
                    <v-card-title class="pr-lg-0" v-text="item.title"></v-card-title>
                    <v-card-subtitle class="pr-lg-0" v-text="item.artist"></v-card-subtitle>
                  </div>
                </div>
              </v-card>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <div class="col-sm-6 col-lg-4 py-1 py-sm-2 d-none d-sm-block" v-for="(item, i) in items" :key="i">
        <v-card class="py-5">
          <div class="d-flex flex-no-wrap justify-space-around justify-lg-center align-center">
            <div class="border-icon">
              <v-icon class="icon">{{item.icon}}</v-icon>
            </div>
            <div>
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
        icon: "mdi-airplane"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Bảo Hành Nhanh Chóng",
        artist: "Đảm bảo bảo hành nhanh chóng",
        icon: "mdi-shield-alert-outline"
      },
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Hỗ Trợ Tư Vấn 24/7",
        artist: "Hỗ trợ tư vấn nhiệt tình 24/7",
        icon: "mdi-lifebuoy"
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
.pulse {
	width:20px;
	max-width: 20px;
	
	circle {
		fill: #FF0000;
		transform: scale(0);
		opacity: 0;
		transform-origin: 50% 50%;
		animation: pulse 3s cubic-bezier(.5,.5,0,1) infinite;
		
		&:nth-child(2) {
			fill: #0F9ED8;
			animation: pulse 3s 1s cubic-bezier(.5,.5,0,1) infinite;
		}
		
		&:nth-child(3) {
			fill: #1976D2;
			animation: pulse 3s 2s cubic-bezier(.5,.5,0,1) infinite;
		}
		
	}
	
}

@keyframes pulse {
	
	25% {
		opacity: 0.2;
	}
	
	50% {
		opacity: 0.4;
	}
	
	100% {
		transform: scale(1);
	}
	
}
</style>