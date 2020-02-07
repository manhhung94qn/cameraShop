<template>
  <div class="header">
    <!-- <script src="/Scripts/common/login.js" type="text/javascript"></script> -->
    <section class="top-link bg-color-secondary">
      <v-container class="py-0">
        <v-row>
          <v-col cols="12" class="d-flex py-1 justify-space-between align-item-center">
            <ul class="topmenu-contact">
              <li class="text-color-accent d-flex">
                <v-icon class="mr-1" small color="textAccent">mdi-cellphone-iphone</v-icon>
                <span>Hotline: 0344895969</span>
              </li>
            </ul>

            <ul class="topmenu topmenu-link d-none d-lg-flex">
              <li v-for="(item, i) in listMenuTop" class="ml-4" :key="i">
                <nuxt-link class="d-flex topmenu-link" :to="item.to">
                  <v-icon small class="mr-1 topmenu-link-icon">{{item.icon}}</v-icon>
                  {{' ' + item.title}}
                </nuxt-link>
              </li>
            </ul>

            <div class="topmenu d-flex d-lg-none">
              <v-menu
                v-for="(item, i) in listMenuTopMobile"
                :key="i"
                :absolute="absolute"
                :offset-x="offsetX"
                :offset-y="offsetY"
              >
                <template v-slot:activator="{ on }">
                  <v-icon class="mr-2" v-on="on">{{item.icon}}</v-icon>
                </template>
                <v-list class="bg-color-secondary-im">
                  <v-list-item v-for="(menu,i) in getListMenuByType(item.type)" :key="i">
                    <v-list-item-title>
                      <nuxt-link class="topmenu-link d-flex align-center" :to="menu.to">
                        <v-icon small class="mr-1">{{menu.icon}}</v-icon>
                        {{menu.title}}
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

    <!-- Header -->
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
                :offset-y="offsetY"
                :close-on-content-click="false"
                transition="slide-y-reverse-transition"
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
                  v-if="listProductInCard.length == 0"
                  class="bg-color-accent ma-0 pa-3"
                >Giỏ hàng của bạn vẫn chưa có sản phẩm nào.</p>
                <v-list v-else>
                  <v-list-item v-for="item in listProductInCard" :key="item.id">
                    <v-list-item-avatar>
                      <v-img :src="item.url"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>{{item.title}}</v-list-item-title>
                      <v-list-item-subtitle>Số lượng: {{item.quatity}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-btn @click="deleteProductFromShopCard(item)" icon>
                        <v-icon color="grey lighten-1">mdi-close</v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
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
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title>
                    <nuxt-link to="/">San pham 1</nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item link>
                <v-list-item-content>
                  <v-list-item-title>
                    <nuxt-link to="/test">San pham 1</nuxt-link>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-divider></v-divider>

            <v-list-group v-model="activeList2" no-action>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                      <nuxt-link to="test">Ho tro khach hang</nuxt-link>
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
    <!-- <script type="text/javascript">
                $("#btnsearch").click(function () {
                    SearchProduct();
                });
                $("#btnsearch2").click(function () {
                    SearchProduct2();
                });
                $("#txtsearch").keydown(function (event) {
                    if (event.keyCode == 13) {
                        SearchProduct();
                    }
                });
                $("#txtsearch2").keydown(function (event) {
                    if (event.keyCode == 13) {
                        SearchProduct2();
                    }
                });
                function SearchProduct() {
                    var key = $('#txtsearch').val();
                    if (key == '' || key == 'Tìm kiếm...') {
                        $('#txtsearch').focus();
                        return;
                    }
                    window.location = '/tim-kiem.html?key=' + key;
                }
                function SearchProduct2() {
                    var key = $('#txtsearch2').val();
                    if (key == '' || key == 'Tìm kiếm...') {
                        $('#txtsearch2').focus();
                        return;
                    }
                    window.location = '/tim-kiem.html?key=' + key;
                }
    </script>-->
    <!-- <nav class="navbar-main">
                <div id="mb_mainnav">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-3 col-sm-12 col-xs-12 vertical_menu">
                                <div id="mb_verticle_menu" class="menu-quick-select">
                                    <div class="title_block">
                                        <span>Danh mục sản phẩm</span>
                                    </div>
                                    <div id="menuverti" class="block_content navbar_menuvertical">
                                        <ul class='nav_verticalmenu'>
                                            <li class="has-child level0"><a class=''
                                                    href='/san-pham/nghao-so-oc-33804'><img class='icon-menu'
                                                        src='/Uploads/shop2005/images/icon/s1.png'
                                                        alt='Nghao - Sò - Ốc'> <span>Nghao - Sò - Ốc</span></a>
                                                <ul class='level1'>
                                                    <li class="level1"><a class=''
                                                            href='/san-pham/ngao-33820'><span>Ngao</span></a></li>
                                                    <li class="level1"><a class=''
                                                            href='/san-pham/so-33821'><span>Sò</span></a></li>
                                                    <li class="level1"><a class=''
                                                            href='/san-pham/oc-33822'><span>Ốc</span></a></li>
                                                    <li class="level1"><a class=''
                                                            href='/san-pham/hau-33823'><span>Hàu</span></a></li>
                                                </ul>
                                            </li>
                                            <li class="level0"><a class='' href='/san-pham/bao-ngu-33805'><img
                                                        class='icon-menu' src='/Uploads/shop2005/images/icon/s2.png'
                                                        alt='Bào ngư'> <span>Bào ngư</span></a></li>
                                            <li class="level0"><a class='' href='/san-pham/tom-33806'><img
                                                        class='icon-menu' src='/Uploads/shop2005/images/icon/s3.png'
                                                        alt='Tôm'> <span>Tôm</span></a></li>
                                            <li class="level0"><a class='' href='/san-pham/muc-33807'><img
                                                        class='icon-menu' src='/Uploads/shop2005/images/icon/s4.png'
                                                        alt='Mực'> <span>Mực</span></a></li>
                                            <li class="has-child level0"><a class='' href='/san-pham/ca-33808'><img
                                                        class='icon-menu' src='/Uploads/shop2005/images/icon/s5.png'
                                                        alt='Cá'> <span>Cá</span></a>
                                                <ul class='level1'>
                                                    <li class="level1"><a class=''
                                                            href='/san-pham/ca-ngu-dai-duong-33824'><span>Cá ngừ đại
                                                                dương</span></a></li>
                                                    <li class="level1"><a class=''
                                                            href='/san-pham/ca-hoi-33825'><span>Cá hồi</span></a></li>
                                                </ul>
                                            </li>
                                            <li class="has-child level0"><a class=''
                                                    href='/san-pham/cua-nghe-33809'><img class='icon-menu'
                                                        src='/Uploads/shop2005/images/icon/s6.png' alt='Cua nghẹ'>
                                                    <span>Cua nghẹ</span></a>
                                                <ul class='level1'>
                                                    <li class="level1"><a class=''
                                                            href='/san-pham/cua-33826'><span>Cua</span></a></li>
                                                    <li class="level1"><a class=''
                                                            href='/san-pham/nghe-33827'><span>Nghẹ</span></a></li>
                                                </ul>
                                            </li>
                                            <li class="level0"><a class='' href='/san-pham/sua-33810'><img
                                                        class='icon-menu' src='/Uploads/shop2005/images/icon/s7.png'
                                                        alt='Sứa'> <span>Sứa</span></a></li>
                                            <li class="level0"><a class=''
                                                    href='/san-pham/hai-san-dong-hop-che-bien-33811'><img
                                                        class='icon-menu' src='/Uploads/shop2005/images/icon/s8.png'
                                                        alt='Hải sản đóng hộp - chế biến'> <span>Hải sản đóng hộp - chế
                                                        biến</span></a></li>
                                            <li class="has-child level0"><a class=''
                                                    href='/san-pham/hai-san-kho-33812'><img class='icon-menu'
                                                        src='/Uploads/shop2005/images/icon/s9.png' alt='Hải sản khô'>
                                                    <span>Hải sản khô</span></a>
                                                <ul class='level1'>
                                                    <li class="level1"><a class=''
                                                            href='/san-pham/hai-san-kho-33828'><span>Hải sản
                                                                khô</span></a></li>
                                                </ul>
                                            </li>
                                            <li class="level0"><a class='' href='/san-pham/san-pham-khac-33813'><img
                                                        class='icon-menu' src='/Uploads/shop2005/images/icon/s9.png'
                                                        alt='Sản phẩm khác'> <span>Sản phẩm khác</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <nav class="col-md-9 col-sm-12 col-xs-12 p-l-0">
                                <ul class='menu nav navbar-nav menu_hori'>
                                    <li class="level0"><a class='' href='/trang-chu.html'><span>Trang chủ</span></a>
                                    </li>
                                    <li class="level0"><a class='' href='/gioi-thieu.html'><span>Giới thiệu</span></a>
                                    </li>
                                    <li class="level0"><a class='' href='/san-pham.html'><span>Sản phẩm</span></a></li>
                                    <li class="level0"><a class='' href='/tin-tuc.html'><span>Tin tức</span></a></li>
                                    <li class="level0"><a class='' href='/lien-he.html'><span>Liên hệ</span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
    </nav>-->
    <!-- <script type="text/javascript">
                $(document).ready(function () {
                    var str = location.href.toLowerCase();
                    $("ul.menu li a").each(function () {
                        if (str.indexOf(this.href.toLowerCase()) >= 0) {
                            $("ul.menu li").removeClass("active");
                            $(this).parent().addClass("active");
                        }
                    });
                });
    </script>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      absolute: false,
      activeList: false,
      activeList2: false,
      pstSelected: 1,
      offsetX: true,
      offsetY: true,
      drawer: false,
      listMenuTopMobile: [
        {
          icon: "mdi-account-circle-outline",
          type: 1
        },
        {
          icon: "mdi-format-list-bulleted",
          type: 2
        }
      ],
      listMenuTop: [
        {
          title: "Kiểm tra đơn hàng",
          icon: "mdi-file-document-edit-outline",
          to: "/inspire",
          type: 2
        },
        {
          title: "Giỏ hàng",
          icon: "mdi-basket-outline",
          to: "/test",
          type: 2
        },
        {
          title: "Đăng nhập",
          icon: "mdi-account-key-outline",
          to: "/test",
          type: 1
        },
        {
          title: "Đăng ký",
          icon: "mdi-key-outline",
          to: "/test",
          type: 1
        }
      ],
      listProductInCard: [
        {
          id: 1,
          url: "/images/logo.png",
          title: "Camera Wifi 2412",
          quatity: 1
        },
        {
          id: 2,
          url: "/images/logo.png",
          title: "Camera thường 2412",
          quatity: 3
        },
        {
          id: 3,
          url: "/images/logo.png",
          title: "Camera xịn 2412",
          quatity: 2
        },
        {
          id: 4,
          url: "/images/logo.png",
          title: "Camera ngon 2412",
          quatity: 5
        }
      ],
      items: [
        {
          action: "mdi-menu",
          title: "Attractions",
          items: [{ title: "List Item" }]
        },
        {
          action: "mdi-menu",
          title: "Dining",
          active: false,
          items: [
            { title: "Breakfast & brunch" },
            { title: "New American" },
            { title: "Sushi" }
          ]
        },
        {
          action: "mdi-menu",
          title: "Education",
          items: [{ title: "List Item" }]
        },
        {
          action: "mdi-menu",
          title: "Family",
          items: [{ title: "List Item" }]
        },
        {
          action: "mdi-menu",
          title: "Health",
          items: [{ title: "List Item" }]
        },
        {
          action: "mdi-menu",
          title: "Office",
          items: [{ title: "List Item" }]
        },
        {
          action: "mdi-menu",
          title: "Promotions",
          items: [{ title: "List Item" }]
        }
      ]
    };
  },
  created() {},
  methods: {
    getListMenuByType(type) {
      return this.listMenuTop.filter(x => x.type === type);
    },
    deleteProductFromShopCard(item) {
      let i = this.listProductInCard.indexOf(item);
      if (i >= 0) this.listProductInCard.splice(i, 1);
      return;
    }
  },
  computed: {
    computedCountListProductInCard() {
      return this.listProductInCard.length;
    }
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
    color: var(--v-textInfo-base);
    &:hover {
      color: var(--v-textAccent-base);
    }
    &.nuxt-link-exact-active {
      color: var(--v-textAccent-base);
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
</style>