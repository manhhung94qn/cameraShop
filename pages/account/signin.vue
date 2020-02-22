<template>
  <div>
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

          <ValidationProvider name="saveStateLogin">
            <v-checkbox v-model="saveStateLogin" label="Lưu trạng thái đăng nhập"></v-checkbox>
          </ValidationProvider>
        </div>
        <div class="text-center mb-3 mt-3">
          <v-btn outlined @click="onSubmitSignUp()">Đăng nhập</v-btn>
        </div>
      </v-form>
    </ValidationObserver>
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
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import {
  KEY_LOCAL_STORAGE_USE_ID,
  KEY_LOCAL_STORAGE_TOKEN
} from "@/configs/key";

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      username: "",
      password: "",
      saveStateLogin: false
    };
  },
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
</style>