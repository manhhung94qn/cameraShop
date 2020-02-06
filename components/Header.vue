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
                            <li class="order-check">
                                <nuxt-link to="/test">
                                    <i class="fa fa-pencil-square-o"></i> Kiểm tra đơn hàng
                                </nuxt-link>
                            </li>
                            <li class="order-cart">
                                <a href="/gio-hang.html">
                                    <i class="fa fa-shopping-cart"></i> Giỏ hàng
                                </a>
                            </li>
                            <li class="account-login">
                                <a href="/dang-nhap.html">
                                    <i class="fa fa-sign-in"></i> Đăng nhập
                                </a>
                            </li>
                            <li class="account-register">
                                <a href="/dang-ky.html">
                                    <i class="fa fa-key"></i> Đăng ký
                                </a>
                            </li>
                        </ul>
                        <div class="topmenu d-flex d-lg-none">
                            <v-menu :absolute="absolute" :offset-x="offsetX" :offset-y="offsetY">
                                <template v-slot:activator="{ on }">
                                    <v-icon class="mr-2" v-on="on">mdi-account-circle-outline</v-icon>
                                </template>
                                <v-list class="bg-color-secondary-im">
                                    <v-list-item>
                                        <v-list-item-title class="d-flex align-center">
                                            <nuxt-link class="text-color-info-im" to="/">
                                                <v-icon small class="mr-1">mdi-account-key-outline</v-icon> Đăng nhập
                                            </nuxt-link>
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title class="d-flex align-center">
                                            <nuxt-link class="text-color-info-im" to="/inspire">
                                                <v-icon small class="mr-1">mdi-key-outline</v-icon> Đăng ký
                                            </nuxt-link>
                                        </v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                            <v-menu content-class="bg-color-secondary" :absolute="absolute" :offset-x="offsetX" :offset-y="offsetY">
                                <template v-slot:activator="{ on }">
                                    <v-icon v-on="on">mdi-format-list-bulleted</v-icon>
                                </template>
                                <v-list class="bg-color-secondary-im">
                                    <v-list-item>
                                        <v-list-item-title class="d-flex align-center">
                                            <nuxt-link class="text-color-info-im" to="/inspire">
                                                <v-icon small class="mr-1">mdi-file-document-edit-outline</v-icon> Kiểm tra đơn hàng
                                            </nuxt-link>
                                        </v-list-item-title>
                                    </v-list-item>
                                    <v-list-item>
                                        <v-list-item-title class="d-flex align-center">
                                            <nuxt-link class="text-color-info-im" to="/inspire">
                                                <v-icon small class="mr-1">mdi-basket-outline</v-icon> Giỏ hàng
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
        <!-- <header id="header">
                <div id="header_main">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-8">
                                <h1 class="pull-left">
                                    <a href="/" class="logo"
                                        title="C&#212;NG TY TNHH PH&#193;T TRIỂN C&#212;NG NGHỆ RUNTIME">
                                        <img src="/Uploads/shop2005/images/logo.png"
                                            alt="C&#212;NG TY TNHH PH&#193;T TRIỂN C&#212;NG NGHỆ RUNTIME"
                                            title="C&#212;NG TY TNHH PH&#193;T TRIỂN C&#212;NG NGHỆ RUNTIME">
                                    </a>
                                </h1>
                            </div>
                            <div class="col-lg-6 col-md-5 col-sm-4 hidden-xs">
                                <div class="search_box">
                                    <div class="search_wrapper">
                                        <input type="text" name="search" class="index_input_search" id="txtsearch"
                                            onblur="if(this.value=='')this.value='Nhập từ khóa tìm kiếm...'"
                                            onfocus="if(this.value=='Nhập từ khóa tìm kiếm...')this.value=''"
                                            value="Nhập từ kh&#243;a t&#236;m kiếm..." />
                                        <button class="btn_search_submit btn " type="button" id="btnsearch"><span>Tìm
                                                ngay</span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                                <div class="cart_header">
                                    <a href="/gio-hang.html" title="Giỏ hàng">
                                        <span class="cart_header_icon"></span>
                                        <span class="box_text">
                                            <strong class="cart_header_count">Giỏ hàng <span>(0)</span></strong>
                                            <span class="cart_price">0₫</span>
                                        </span>
                                    </a>
                                    <div class="cart_clone_box">
                                        <div class="cart_box_wrap hidden">
                                            <div class="cart_item original clearfix">
                                                <div class="cart_item_image"></div>
                                                <div class="cart_item_info-im">
                                                    <p class="cart_item_title"><a href="" title=""></a></p>
                                                    <span class="cart_item_quantity"></span>
                                                    <span class="cart_item_price"></span>
                                                    <span class="remove"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cart_header_top_box">
                                        <div class="cart_empty">Giỏ hàng của bạn vẫn chưa có sản phẩm nào.</div>
                                    </div>
                                </div>
                                <div class="user_login">
                                    <div class="user_login_icon"></div>
                                    <div class="box_text">
                                        <strong>Tài khoản</strong>
                                    </div>
                                    <div class="user_box">
                                        <ul>
                                            <li><a href="/dang-nhap.html">Đăng nhập</a></li>
                                            <li><a href="/dang-ky.html">Đăng ký</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header_mobile">
                    <div class="container">
                        <div class="row">
                            <button type="button" class="navbar-toggle collapsed" id="trigger_click_mobile">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                            <div id="mobile_wrap_menu" class="visible-xs visible-sm">
                                <div class="user_mobile">
                                    <div class="icon_user_mobile">
                                        <img src="/assets/100004/images/user_mobile.png" alt="account">
                                    </div>
                                    <div class="login_mobile">

                                        <a href="/dang-nhap.html" class="login-btn">Đăng nhập </a><a
                                            href="/dang-ky.html" class="login-btn"> / Đăng ký</a>
                                    </div>
                                    <div class="close_menu"></div>
                                </div>
                                <div class="content_menu">
                                    <ul>
                                        <li class="level0"><a class='' href='/trang-chu.html'><span>Trang chủ</span></a>
                                        </li>
                                        <li class="level0"><a class='' href='/gioi-thieu.html'><span>Giới
                                                    thiệu</span></a></li>
                                        <li class="level0"><a class='' href='/san-pham.html'><span>Sản phẩm</span></a>
                                        </li>
                                        <li class="level0"><a class='' href='/tin-tuc.html'><span>Tin tức</span></a>
                                        </li>
                                        <li class="level0"><a class='' href='/lien-he.html'><span>Liên hệ</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pull-right mobile-menu-icon-wrapper">
                                <div class="logo logo-mobile">
                                    <a href="/" title="C&#212;NG TY TNHH PH&#193;T TRIỂN C&#212;NG NGHỆ RUNTIME">
                                        <img src="/Uploads/shop2005/images/logo.png"
                                            alt="C&#212;NG TY TNHH PH&#193;T TRIỂN C&#212;NG NGHỆ RUNTIME">
                                    </a>
                                </div>
                                <div class="cart_header" id="cart-target">
                                    <a href="/gio-hang.html" title="Giỏ hàng">
                                        <div class="cart_header_icon"></div>
                                        <div class="box_text">
                                            <strong class="cart_header_count"><span>0</span></strong>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="search_mobile col-md-12">
                                <div class="search_box">
                                    <div class="search_wrapper">
                                        <input type="text" name="search" class="index_input_search" id="txtsearch2"
                                            onblur="if(this.value=='')this.value='Nhập từ khóa tìm kiếm...'"
                                            onfocus="if(this.value=='Nhập từ khóa tìm kiếm...')this.value=''"
                                            value="Nhập từ kh&#243;a t&#236;m kiếm..." />
                                        <button class="btn_search_submit btn " type="button" id="btnsearch2"><span><i
                                                    class="fa fa-search"></i></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </header>-->
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
            offsetX: true,
            offsetY: true
        }
    },
};
</script>

<style scoped lang="scss">
ul,
li {
    list-style-type: none;
    padding: 0;
}

/* .topmenu-contact {
    color: #0f9ed8;
}
.colorTextHeader {
    color: #aaa;
}
.backgroundHeader {
    background-color: #f5f5f5;
}
.topmenu-link a {
    color: #aaa;
    text-decoration: none;
}

ul,
li {
    list-style-type: none;
}
a {
    margin: 0 !important;
    padding: 0 !important;
} */
</style>