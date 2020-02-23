<template>
  <div class="sign-up">
    <v-row>
      <v-col cols="12" md="3" class="pt-0 d-md-none" outlined>
        <v-list-group class="list-content" v-model="activeList" no-action>
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

      <v-col cols="12" md="3" class="pt-0 d-none d-md-block" outlined>
        <v-list class="list-content notRadius" no-action>
          <v-subheader>
            <nuxt-link to="/account">Tài khoản</nuxt-link>
          </v-subheader>
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
        </v-list>
      </v-col>

      <v-col cols="12" md="9" lg="5" class="mx-auto">
        <ValidationObserver ref="formSignin" v-slot="{ }">
          <v-form>
            <div class="mx-3">
              <ValidationProvider v-slot="{ errors }" name="username" rules="required">
                <v-text-field
                  v-model="username"
                  :error-messages="errors"
                  label="Tên đăng nhập hoặc email"
                ></v-text-field>
              </ValidationProvider>

              <ValidationProvider v-slot="{ errors }" name="password" rules="required">
                <v-text-field
                  v-model="password"
                  :error-messages="errors"
                  type="password"
                  label="Mật khẩu"
                ></v-text-field>
              </ValidationProvider>

              <ValidationProvider
                class="d-flex align-center justify-space-between"
                name="saveStateLogin"
              >
                <v-checkbox v-model="saveStateLogin" label="Lưu đăng nhập"></v-checkbox>
                <nuxt-link to="/test">Quên mật khẩu</nuxt-link>
              </ValidationProvider>
            </div>
            <div class="text-center mb-3 mt-3">
              <v-btn outlined @click="onSubmitSignUp()">Đăng nhập</v-btn>
            </div>
          </v-form>
        </ValidationObserver>
        <p class="mx-3">
          Chưa có tài khoản?
          <nuxt-link to="/account/signup">Đăng ký</nuxt-link>
        </p>
        <v-alert border="left" colored-border color="bgPrimary" outlined elevation="0" class="mx-3">
          <div class="text-center">
            <span>Đăng nhập với</span>
          </div>
          <div class="text-center">
            <v-btn color="textAccent" fab outlined>
              <v-icon large>mdi-facebook</v-icon>
            </v-btn>
            <span>hoặc</span>
            <v-btn color="textAccent" fab outlined>
              <v-icon large>mdi-google</v-icon>
            </v-btn>
          </div>
        </v-alert>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  head() {
    return {
      title: "Đăng nhập tài khoản",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Đăng nhập tài khoản mới tại ngoccamera.com"
        }
      ]
    };
  },
  data() {
    return {
      activeList: false,
      username: "",
      password: "",
      saveStateLogin: true
    };
  },
//   computed: {
//     computedIsShowListAccountMenu: {
//       get() {
//         return this.$store.state.view.isShowListAccountMenu;
//       },
//       set(value) {
//         this.$store.commit("view/setIsShowListAccountMenu", { value: value });
//       }
//     }
//   },
  methods: {
    async onSubmitSignUp() {
      this.$refs.formSignin.validate().then(async success => {
        if (!success) {
          return;
        }
        await this.login();
      });
    },
    async login() {
      this.$store.commit("view/setIsOverlay", {
        value: true
      });
      let user = await this.$axios.$post("/user/me", {
        username: this.username,
        password: this.password,
        saveStateLogin: this.saveStateLogin
      });
      this.$store.commit("user/setUserInfor", {
        id: user.id,
        username: this.username,
        isLogined: true
      });
      this.$axios.setToken(user.token, "Bearer");
      this.$store.commit("view/setIsOverlay", {
        value: false
      });
      this.$router.go(-1);
      this.$toast.global.n_success({
        message: "Đăng nhập thành công."
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.list-content {
  border: 1px solid var(--v-textInfo-base);
  &.notRadius {
    border-radius: 0;
  }
}
.sign-up {
  background-color: white;
}
</style>