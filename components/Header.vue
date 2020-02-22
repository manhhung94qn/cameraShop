<template>
  <div class="header">
    <section class="top-link bg-color-secondary">
      <v-container class="py-0 h-wrap">
        <v-row>
          <v-col cols="12" class="d-flex py-1 justify-space-between align-item-center">
            <ul class="topmenu-contact">
              <li class="text-color-accent d-flex">
                <v-icon class="mr-1" small color="textAccent">mdi-cellphone-iphone</v-icon>
                <span>Hotline: 0344895969</span>
              </li>
            </ul>

            <ul class="topmenu topmenu-link d-none d-lg-flex">
              <li class="ml-4" v-if="!computedIsLogined">
                <nuxt-link class="d-flex topmenu-link" to="/account/signin">
                  <v-icon small class="mr-1 topmenu-link-icon">mdi-account-key-outline</v-icon>Đăng nhập
                </nuxt-link>
              </li>
              <li class="ml-4" v-if="!computedIsLogined">
                <nuxt-link class="d-flex topmenu-link" to="/account/signup">
                  <v-icon small class="mr-1 topmenu-link-icon">mdi-key-outline</v-icon>Đăng ký
                </nuxt-link>
              </li>
              <li class="ml-4" v-if="computedIsLogined">
                <nuxt-link class="d-flex topmenu-link" to="/account">
                  <v-icon small class="mr-1 topmenu-link-icon">mdi-key-outline</v-icon>Tài khoản
                </nuxt-link>
              </li>
              <li class="ml-4" v-if="computedIsLogined">
                <div style="cursor: pointer;" class="d-flex topmenu-link" @click="onLogout">
                  <v-icon small class="mr-1 topmenu-link-icon">mdi-key-outline</v-icon>Đăng xuất
                </div>
              </li>
              <li class="ml-4">
                <nuxt-link class="d-flex topmenu-link" to="/inspire">
                  <v-icon small class="mr-1 topmenu-link-icon">mdi-file-document-edit-outline</v-icon>Kiểm tra giỏ hàng
                </nuxt-link>
              </li>
              <li class="ml-4">
                <nuxt-link class="d-flex topmenu-link" to="/inspire">
                  <v-icon small class="mr-1 topmenu-link-icon">mdi-basket-outline</v-icon>Giỏ hàng
                </nuxt-link>
              </li>
            </ul>

            <div class="topmenu d-flex d-lg-none">
              <v-menu :absolute="false" :offset-x="true" :offset-y="true">
                <template v-slot:activator="{ on }">
                  <v-icon class="mr-2" v-on="on">mdi-account-circle</v-icon>
                </template>
                <v-list class="bg-color-secondary-im">
                  <v-list-item v-if="!computedIsLogined">
                    <v-list-item-title>
                      <nuxt-link class="topmenu-link d-flex align-center text-color-accent-im" to="/account/signin">
                        <v-icon small class="mr-1">mdi-account-key-outline</v-icon>Đăng nhập
                      </nuxt-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item v-if="!computedIsLogined">
                    <v-list-item-title>
                      <nuxt-link class="topmenu-link d-flex align-center text-color-accent-im" to="/account/signup">
                        <v-icon small class="mr-1">mdi-key-outline</v-icon>Đăng ký
                      </nuxt-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item v-if="computedIsLogined">
                    <v-list-item-title>
                      <nuxt-link class="topmenu-link d-flex align-center text-color-accent-im" to="/account">
                        <v-icon small class="mr-1">mdi-key-outline</v-icon>Tài khoản
                      </nuxt-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item v-if="computedIsLogined">
                    <v-list-item-title>
                      <div class="topmenu-link d-flex align-center text-color-accent-im" @click="onLogout">
                        <v-icon small class="mr-1  text-color-accent-im">mdi-key-outline</v-icon>Đăng xuất
                      </div>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-menu :absolute="false" :offset-x="true" :offset-y="true">
                <template v-slot:activator="{ on }">
                  <v-icon class="mr-2" v-on="on">mdi-format-list-bulleted</v-icon>
                </template>
                <v-list class="bg-color-secondary-im">
                  <v-list-item>
                    <v-list-item-title>
                      <nuxt-link class="topmenu-link d-flex align-center" to="/inspire">
                        <v-icon small class="mr-1">mdi-file-document-edit-outline</v-icon>Kiểm tra đơn hàng
                      </nuxt-link>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                    <v-list-item-title>
                      <nuxt-link class="topmenu-link d-flex align-center" to="/inspire">
                        <v-icon small class="mr-1">mdi-basket-outline</v-icon>Giỏ hàng
                      </nuxt-link>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <header id="header">
      <div id="header_main" class="d-none d-lg-block">
        <div class="container">
          <div class="row justify-space-between align-center">
            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-8">
              <h1 class="pull-left">
                <nuxt-link class="text-color-accent" to="/" title="HungKing.io-Web developer">
                  <img
                    style="height:50px"
                    src="/images/logo.png"
                    alt="HungKing.io-Web developer"
                    title="HungKing.io-Web developer"
                  />
                </nuxt-link>
              </h1>
            </div>
            <div class="col-lg-6 col-md-5 col-sm-4 d-none d-lg-block">
              <div class="search-pc">
                <input class="search-pc-input" type="text" placeholder="Nhập từ khóa tìm kiếm..." />
                <v-btn text icon class="search-pc-bottom" color="textAccent">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 d-none d-lg-flex justify-end">
              <v-menu
                open-on-hover
                left
                :offset-y="true"
                :close-on-content-click="false"
                transition="slide-y-reverse-transition"
                max-width="350px"
                min-width="350px"
              >
                <template v-slot:activator="{ on }">
                  <div v-on="on">
                    <nuxt-link class="d-flex align-center" to="/test">
                      <v-icon
                        v-if="computedCountListProductInCard===0"
                        class="mr-1 icon-border"
                      >mdi-basket-outline</v-icon>
                      <v-badge v-else overlap :content="computedCountListProductInCard">
                        <v-icon class="mr-1 icon-border">mdi-basket-outline</v-icon>
                      </v-badge>
                      <span>Giỏ hàng</span>
                    </nuxt-link>
                  </div>
                </template>
                <p
                  v-if="computedCountListProductInCard == 0"
                  class="bg-color-accent ma-0 pa-3"
                >Giỏ hàng của bạn vẫn chưa có sản phẩm nào.</p>
                <div v-else>
                  <div class="wrap-list-card">
                    <v-list>
                      <template v-for="(item,i) in computedListProductInCard">
                        <v-list-item :key="item.id">
                          <v-list-item-avatar>
                            <v-img :src="item.imageSrc"></v-img>
                          </v-list-item-avatar>
                          <v-list-item-content>
                            <v-list-item-title class="text-truncate">{{item.title}}</v-list-item-title>
                            <v-list-item-subtitle>Số lượng: {{item.quatity}}</v-list-item-subtitle>
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-btn @click="deleteProductFromShopCard(item)" icon>
                              <v-icon color="grey lighten-1">mdi-close</v-icon>
                            </v-btn>
                          </v-list-item-action>
                        </v-list-item>
                        <v-divider :key="i + 'a'"></v-divider>
                      </template>
                    </v-list>
                  </div>

                  <div class="d-flex justify-space-between bg-color-accent px-5 pb-3 pt-1">
                    <v-btn rounded color="primary">Xem giỏ hàng</v-btn>
                    <v-btn rounded color="bgSuccess">Thanh toán</v-btn>
                  </div>
                </div>
              </v-menu>
            </div>
          </div>
        </div>
      </div>

      <div id="header_mobile" class="d-block d-lg-none">
        <div class="container">
          <div class="row">
            <div class="col-12 d-flex justify-space-between align-center">
              <v-btn icon @click.stop="drawer = !drawer">
                <v-icon>mdi-menu</v-icon>
              </v-btn>
              <div class="logo logo-mobile">
                <nuxt-link to="/" title="HungKing.io-Web developer">
                  <img
                    style="height:50px"
                    src="/images/logo.png"
                    alt="HungKing.io-Web developer"
                    title="HungKing.io-Web developer"
                  />
                </nuxt-link>
              </div>
              <div class="cart_header">
                <nuxt-link class="d-flex align-center" to="/test">
                  <v-icon
                    v-if="computedCountListProductInCard===0"
                    class="mr-1 icon-border"
                  >mdi-basket-outline</v-icon>
                  <v-badge v-else overlap :content="computedCountListProductInCard">
                    <v-icon class="mr-1 icon-border">mdi-basket-outline</v-icon>
                  </v-badge>
                </nuxt-link>
              </div>
            </div>
            <div class="search_mobile col-md-12 d-flex justify-space-around">
              <div class="search-mobile">
                <input class="search-pc-input" type="text" placeholder="Nhập từ khóa tìm kiếm..." />
                <v-btn text icon class="search-pc-bottom" color="textAccent">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </div>
        <v-navigation-drawer v-model="drawer" absolute temporary>
          <v-list-item class="bg-color-secondary">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>John Leider</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>
                  <nuxt-link to="/">Trang chủ</nuxt-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>

            <v-list-group v-model="activeList" no-action>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>San pham</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item class="pl-9" link>
                <v-list-item-content>
                  <v-list-item-title>
                    <nuxt-link to="/">Sản phẩm 1</nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="ml-9"></v-divider>
              <v-list-item class="pl-9" link>
                <v-list-item-content>
                  <v-list-item-title>
                    <nuxt-link to="/">Sản phẩm 2</nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="ml-9"></v-divider>
              <v-list-item class="pl-9" link>
                <v-list-item-content>
                  <v-list-item-title>
                    <nuxt-link to="/">Sản phẩm 3</nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-divider></v-divider>

            <v-list-group v-model="activeList2" no-action>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <nuxt-link to="/test">Ho tro khach hang</nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item class="pl-9" link>
                <v-list-item-content>
                  <v-list-item-title>
                    <nuxt-link to="/">Kien thuc san pham</nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider class="ml-9"></v-divider>

              <v-list-item class="pl-9" link>
                <v-list-item-content>
                  <v-list-item-title>
                    <nuxt-link to="/test">Chinh sach &#38; Kiem tra bao hanh</nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-divider></v-divider>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>Sản phẩm</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title>Giới thiệu</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
          </v-list>
        </v-navigation-drawer>
      </div>
    </header>

    <nav class="navbar-main d-none d-lg-block">
      <div id="mb_mainnav" class="bg-color-primary">
        <div class="container py-0">
          <div class="row">
            <div class="col-md-3 col-sm-12 col-xs-12 py-0 vertical_menu">
              <div
                @mouseover="changeIshowMenu(true)"
                @mouseleave="changeIshowMenu(false)"
                id="mb_verticle_menu"
                class="menu-quick-select"
              >
                <div class="title_block py-2 px-5 d-flex justify-space-between">
                  <span>DANH MỤC SẢN PHẨM</span>
                  <v-icon color="textSecondary">mdi-menu</v-icon>
                </div>
                <div class="block_content" v-show="computedIsShowListMenu">
                  <v-list class="py-0">
                    <template v-for="item in 10">
                      <v-list-item class="pa-0" link :key="item">
                        <v-list-item-content class="pa-0">
                          <v-menu
                            transition="slide-x-reverse-transition"
                            right
                            open-on-hover
                            offset-x
                            v-if="item%2!==0"
                          >
                            <template v-slot:activator="{ on }">
                              <v-list-item-title class="pa-4" v-on="on">Danh mục sản phẩm {{item}}</v-list-item-title>
                            </template>
                            <v-list
                              @mouseover="changeIshowMenu(true)"
                              @mouseleave="changeIshowMenu(false)"
                            >
                              <v-list-item link v-for="key in 5" :key="key">
                                <v-list-item-title>Danh muc con {{ item + '-' + key}}</v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                          <v-list-item-title class="pa-4" v-else>Danh mục sản phẩm {{ item }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                      <v-divider :key="item + 'a'"></v-divider>
                    </template>
                  </v-list>
                </div>
              </div>
            </div>
            <nav class="col-md-9 col-sm-12 col-xs-12 p-l-0 py-0">
              <ul class="menu nav navbar-nav menu_hori d-flex justify-start">
                <li class="pr-5 py-2">
                  <nuxt-link to="/" class="nav-link">Trang chủ</nuxt-link>
                </li>
                <li class="pr-5 py-2">
                  <nuxt-link to="/test" class="nav-link">Giới thiệu</nuxt-link>
                </li>
                <li class="pr-5 py-2">
                  <nuxt-link to="/test" class="nav-link">Tin tuc</nuxt-link>
                </li>
                <li class="pr-5 py-2">
                  <nuxt-link to="/test" class="nav-link">Lien he</nuxt-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      activeList: false,
      activeList2: false,
      sumMoneyCard: 10000,
      postY: 100,
      pstSelected: 1,
      drawer: false,
      isShowListMenu: false,
      timeOutShowListMenu: null
    };
  },
  created() {},
  methods: {
    async onLogout() {
      this.setIsOverlay({
        value: true
      });
      try {
        await this.$axios.$get("/user/logout");
        this.setUserInfor({
          id: null,
          username: null,
          isLogined: false
        });
        this.setIsOverlay({
          value: false
        });
        this.$toast.global.n_success({
          message: "Đăng xuất thành công."
        });
      } catch (error) {
        console.log(error);
        this.setIsOverlay({
          value: false
        });
      }
    },
    changeIshowMenu(status) {
      if (this.$route.path == "/") return;
      if (status === this.computedIsShowListMenu) return;
      this.timeOutShowListMenu && clearTimeout(this.timeOutShowListMenu);
      if (!this.status) {
        this.timeOutShowListMenu = setTimeout(() => {
          this.$store.commit("view/setIsShowListMenu", { value: status });
        }, 1000);
      } else {
        this.$store.commit("view/setIsShowListMenu", { value: status });
      }
    },
    ...mapActions({
      deleteProductFromShopCard: "product/deleteItemInCard"
    }),
    ...mapMutations({
      setUserInfor: "user/setUserInfor",
      setIsOverlay: "view/setIsOverlay"
    })
  },
  computed: {
    computedIsShowListMenu() {
      return this.$store.state.view.isShowListMenu;
    },
    computedListProductInCard() {
      return this.$store.state.product.listProductInCard;
    },
    computedIsLogined() {
      return this.$store.state.user.isLogined;
    },
    ...mapGetters({
      computedCountListProductInCard: "product/countListProductInCard"
    })
  },
  watch: {
    "$route.path"(value) {
      this.drawer = false;
    }
  }
};
</script>

<style scoped lang="scss">
.icon-border {
  padding: 5px;
  border: 2px solid;
  border-radius: 50%;
}
.wrap-list-card {
  max-height: 265px;
  overflow-y: auto;
}
.header {
  #header_main {
    height: 95px;
  }
  ul,
  li {
    list-style-type: none;
    padding: 0;
  }

  .topmenu-link {
    color: var(--v-textInfo-base) !important;
    &:hover {
      color: var(--v-textAccent-base) !important;
    }
    &.nuxt-link-exact-active {
      color: var(--v-textAccent-base) !important;
    }
  }
  .search-pc {
    position: relative;
    width: 640px;
    &-input {
      border: 1px var(--v-bgSecondary-base) solid;
      border-radius: 22px;
      box-shadow: 0 1px 5px 0 rgba(32, 33, 36, 0.28);
      width: 100%;
      position: relative;
      padding: 7px 40px 7px 25px;
      outline: none;
      color: var(--v-textInfo-base);
      background-color: rgba(236, 226, 226, 0.07);
      &:focus {
        color: var(--v-textPrimary-base);
        background-color: transparent;
      }
    }
    &-bottom {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
  .search-mobile {
    position: relative;
    width: 95%;
    &-input {
      border: 1px var(--v-bgSecondary-base) solid;
      border-radius: 22px;
      box-shadow: 0 1px 5px 0 rgba(32, 33, 36, 0.28);
      width: 100%;
      position: relative;
      padding: 7px 40px 7px 25px;
      outline: none;
      color: var(--v-textInfo-base);
      background-color: rgba(236, 226, 226, 0.07);
      &:focus {
        color: var(--v-textPrimary-base);
        background-color: transparent;
      }
    }
    &-bottom {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
}
.navbar-main {
  .nav-link {
    color: var(--v-textSecondary-base);
    font-weight: 450px;
  }
  .menu-quick-select {
    position: relative;
    .title_block {
      font-weight: 450;
      color: var(--v-textSecondary-base);
      background-color: var(--v-bgSuccess-base);
    }
    .block_content {
      position: absolute;
      border-left: 1px solid rgba(0, 0, 0, 0.12);
      border-right: 1px solid rgba(0, 0, 0, 0.12);
      z-index: 1;
      width: 100%;
    }
  }
}
</style>