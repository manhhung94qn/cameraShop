<template>
  <div class="sign-up">
    <v-row>
      <v-col cols="12" md="3" class="pt-0" outlined>
        <v-list-group class="list-content" v-model="computedIsShowListAccountMenu" no-action>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link to="/account">Tài khoản</nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </template>
          <v-divider></v-divider>
          <v-list-item active-class="deep-purple--text text--accent-4" class="pl-9" link>
            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link to="/account/signup">Đăng ký</nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="ml-9"></v-divider>
          <v-list-item active-class="deep-purple--text text--accent-4" class="pl-9" link>
            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link to="/account/signin">Đăng nhập</nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="ml-9"></v-divider>
          <v-list-item active-class="deep-purple--text text--accent-4" class="pl-9" link>
            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link to="/">Quên mật khẩu</nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-col>
      <v-col cols="12" md="9">
        <nuxt-child />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeList: false
    };
  },
  computed: {
    computedIsShowListAccountMenu: {
      get() {
        return this.$store.state.view.isShowListAccountMenu;
      },
      set(value){
        this.$store.commit("view/setIsShowListAccountMenu", { value: value });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.list-content {
  border: 1px solid var(--v-textInfo-base);
}
.sign-up {
  background-color: white;
}
</style>