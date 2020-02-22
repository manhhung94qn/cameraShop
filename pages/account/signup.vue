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
        <ValidationObserver ref="formSignup" v-slot="{ }">
          <form>
            <div class="mx-3">
              <ValidationProvider v-slot="{ errors }" name="username" rules="required">
                <v-text-field v-model="username" :error-messages="errors" label="Tên đăng nhập"></v-text-field>
              </ValidationProvider>

              <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                <v-text-field v-model="email" :error-messages="errors" label="E-mail" required></v-text-field>
              </ValidationProvider>

              <ValidationProvider v-slot="{ errors }" name="password" rules="required|min:6">
                <v-text-field
                  v-model="password"
                  :error-messages="errors"
                  type="password"
                  vid="password"
                  label="Mật khẩu"
                ></v-text-field>
              </ValidationProvider>

              <ValidationProvider
                v-slot="{ errors }"
                name="confirmPassword"
                rules="confirmed:password"
              >
                <v-text-field
                  v-model="confirmPassword"
                  :error-messages="errors"
                  type="password"
                  label="Xác nhận mật khẩu"
                ></v-text-field>
              </ValidationProvider>
            </div>

            <div class="px-3">
              <v-expansion-panels v-model="addAddressEx" :flat="true">
                <v-expansion-panel>
                  <v-expansion-panel-header
                    @click="addAddress = ! addAddress"
                    :disable-icon-rotate="true"
                    class="pa-0"
                  >
                    Thêm địa chỉ nhận hàng:
                    <template v-slot:actions>
                      <v-switch
                        @click.stop
                        @change="addAddressEx = addAddress ? 0: -1"
                        v-model="addAddress"
                      ></v-switch>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <ValidationProvider
                      v-slot="{ errors }"
                      name="cityName"
                      :rules="addAddress ? 'required' : ''"
                    >
                      <v-autocomplete
                        v-model="cityId"
                        :items="listCity"
                        label="Tỉnh,Thành phố"
                        persistent-hint
                        item-text="name"
                        item-value="id"
                        :error-messages="errors"
                        prepend-icon="mdi-city"
                      ></v-autocomplete>
                    </ValidationProvider>
                    <ValidationProvider
                      v-if="cityId"
                      v-slot="{ errors }"
                      name="district"
                      :rules="addAddress ? 'required' : ''"
                    >
                      <v-autocomplete
                        v-model="districtId"
                        :items="listDistrict"
                        :label="`Quận, Huyện`"
                        persistent-hint
                        item-text="name"
                        item-value="id"
                        prepend-icon="mdi-home-city"
                        :error-messages="errors"
                      ></v-autocomplete>
                    </ValidationProvider>
                    <ValidationProvider
                      v-if="districtId"
                      v-slot="{ errors }"
                      name="ward"
                      :rules="addAddress ? 'required' : ''"
                    >
                      <v-autocomplete
                        v-model="wardsId"
                        :items="listWards"
                        :label="`Phường, xã`"
                        persistent-hint
                        item-text="name"
                        item-value="id"
                        :error-messages="errors"
                        prepend-icon="mdi-bank"
                      ></v-autocomplete>
                    </ValidationProvider>
                    <v-textarea
                      outlined
                      name="input-7-4"
                      :label="(isForcusInDetail||detail) ? 'Địa chỉ chi tiết': 'Chi tiết (vd: 51/4 đường Hòa Bình)'"
                      height="70px"
                      v-model="detail"
                      v-if="wardsId"
                      @focus="isForcusInDetail = true"
                      @blur="isForcusInDetail = false"
                    ></v-textarea>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>

            <div class="px-3">
              <v-checkbox v-model="saveStateLogin" label="Lưu đăng nhập"></v-checkbox>
            </div>
            <div class="text-center mb-3">
              <v-btn outlined @click="onSubmitSignUp">Đăng ký</v-btn>
            </div>
          </form>
        </ValidationObserver>
        <p class="mx-3">
          Đã có tài khoản?
          <nuxt-link to="/account/signin">Đăng nhập</nuxt-link>
        </p>

        <v-alert border="left" colored-border color="bgPrimary" outlined elevation="0" class="mx-3">
          <div class="text-center">
            <span>Đăng ký nhanh với</span>
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
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
const listCity = require("@/assets/address.json");

export default {
  components: {
    ValidationProvider,
    ValidationObserver
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
      addAddress: false,
      isForcusInDetail: false,
      addAddressEx: -1,
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      saveStateLogin: false,
      cityId: "",
      cityName: "",
      listCity: listCity.map(x => {
        return {
          name: x.name,
          id: x.id
        };
      }),
      districtId: "",
      districtName: "",
      listDistrict: [],
      wardsId: "",
      wardName: "",
      listWards: [],
      detail: ""
    };
  },
  methods: {
    async onSubmitSignUp() {
      this.$refs.formSignup.validate().then(async success => {
        if (!success) {
          return;
        }
        await this.createNewUser();
      });
    },
    async createNewUser() {
      this.$store.commit("view/setIsOverlay", {
        value: true
      });
      let user = await this.$axios.$post("/user", {
        email: this.email,
        username: this.username,
        password: this.password,
        saveStateLogin: this.saveStateLogin,
        address: this.addAddress
          ? [
              {
                cityId: this.cityId,
                cityName: this.cityName,
                districtId: this.districtId,
                districtName: this.districtName,
                wardId: this.wardsId,
                wardName: this.wardName,
                detail: this.detail,
                default: true
              }
            ]
          : []
      });
      this.$store.commit("user/setUserInfor", {
        id: user.id,
        username: user.username,
        isLogined: true
      });
      this.$store.commit("view/setIsOverlay", {
        value: false
      });
      this.$router.go(-1);
      this.$toast.global.n_success({
        message: "Đăng ký thành công."
      });
    }
  },
  watch: {
    cityId(newValue, oldValue) {
      let city = listCity.find(x => x.id == newValue);
      if (!city) {
        this.listDistrict = [];
        return;
      }
      this.cityName = city.name;
      this.districtId = "";
      this.districtName = "";
      this.listWards = [];
      this.wardsId = "";
      this.wardName = "";
      this.listDistrict =
        city.districts.map(x => {
          return {
            id: x.id,
            name: x.name
          };
        }) || [];
    },
    districtId(newValue) {
      this.wardsId = "";
      this.wardName = "";
      let city = listCity.find(x => x.id == this.cityId);
      if (!city) {
        this.listWards = [];
        return;
      }
      let district = city.districts.find(x => x.id == newValue);
      if (!district) {
        this.listWards = [];
        return;
      }
      this.districtName = district.name;
      this.listWards = district.wards.map(x => {
        return {
          id: x.id,
          name: `${x.prefix} ${x.name}`
        };
      });
    },
    wardsId(newValue) {
      let city = listCity.find(x => x.id == this.cityId);
      if (!city) {
        this.wardName = "";
        return;
      }
      let district = city.districts.find(x => x.id == this.districtId);
      if (!district) {
        this.wardName = "";
        return;
      }
      let ward = district.wards.find(x => x.id == newValue);
      if (!ward) {
        this.wardName = "";
        return;
      }
      this.wardName = ward.prefix + " " + ward.name;
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