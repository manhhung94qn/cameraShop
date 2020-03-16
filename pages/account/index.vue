<template>
  <div class="account">
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
          <v-list-item
            v-if="!computedIsLogined"
            active-class="deep-purple--text text--accent-4"
            class="pl-9"
            link
          >
            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link to="/account/signup">Đăng ký</nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="ml-9"></v-divider>
          <v-list-item
            v-if="!computedIsLogined"
            active-class="deep-purple--text text--accent-4"
            class="pl-9"
            link
          >
            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link to="/account/signin">Đăng nhập</nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider class="ml-9"></v-divider>
          <v-list-item
            v-if="computedIsLogined"
            active-class="deep-purple--text text--accent-4"
            class="pl-9"
            link
          >
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
          <v-list-item
            v-if="!computedIsLogined"
            active-class="deep-purple--text text--accent-4"
            class="pl-9"
            link
          >
            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link to="/account/signup">Đăng ký</nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="!computedIsLogined" class="ml-9"></v-divider>
          <v-list-item
            v-if="!computedIsLogined"
            active-class="deep-purple--text text--accent-4"
            class="pl-9"
            link
          >
            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link to="/account/signin">Đăng nhập</nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="!computedIsLogined" class="ml-9"></v-divider>
          <v-list-item
            v-if="computedIsLogined"
            active-class="deep-purple--text text--accent-4"
            class="pl-9"
            link
          >
            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link to="/">Thông tin tài khoản</nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="computedIsLogined" class="ml-9"></v-divider>
          <v-list-item
            v-if="!computedIsLogined"
            active-class="deep-purple--text text--accent-4"
            class="pl-9"
            link
          >
            <v-list-item-content>
              <v-list-item-title>
                <nuxt-link to="/">Quên mật khẩu</nuxt-link>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider v-if="!computedIsLogined" class="ml-9"></v-divider>
        </v-list>
      </v-col>

      <v-col v-if="computedIsLogined" cols="12" md="9" lg="5">
        <ValidationObserver ref="formSignup" v-slot="{ }">
          <form>
            <div class="mx-3">
              <div>
                <v-text-field
                  @focus="isForcusInFullname = true"
                  @blur="isForcusInFullname = false"
                  v-model="email"
                  readonly
                  background-color="blue-grey lighten-5"
                  label="Email:"
                />
              </div>
              <div>
                <v-text-field
                  @focus="isForcusInFullname = true"
                  @blur="isForcusInFullname = false"
                  v-model="fullname"
                  :label="(isForcusInFullname||fullname)?'Họ tên:':'Họ tên (Vd: Nguyễn Văn A)'"
                />
              </div>
              <div>
                <v-text-field
                  @focus="isForcusInPhoneNumber = true"
                  @blur="isForcusInPhoneNumber = false"
                  v-model="phoneNumber"
                  :label="(isForcusInPhoneNumber||phoneNumber)?'Số điện thoại:':'Số điện thoại (Nhập SĐT để trải nghiệm tốt hơn)'"
                />
              </div>
              <div class="d-flex align-center">
                <span class="mr-3">Giới tính:</span>
                <v-radio-group v-model="gender" row>
                  <v-radio label="Nam" value="1"></v-radio>
                  <v-radio label="Nữ" value="2"></v-radio>
                  <v-radio label="Khác" value="3"></v-radio>
                </v-radio-group>
              </div>
              <div class="d-flex align-center">
                <span class="mr-3">Ngày sinh:</span>
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="birthday"
                      label="Chọn ngày sinh"
                      prepend-icon="mdi-calendar-range"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker locale="vi" v-model="birthday" @input="menu2 = false"></v-date-picker>
                </v-menu>
              </div>
            </div>
            <div class="mx-3">
              <v-expansion-panels v-model="changePasswordEX" :flat="true">
                <v-expansion-panel>
                  <v-expansion-panel-header
                    @click="changePassword = ! changePassword"
                    :disable-icon-rotate="true"
                    class="pa-0"
                  >
                    Thay đổi mật khẩu:
                    <template v-slot:actions>
                      <v-switch
                        @click.stop
                        @change="changePasswordEX = changePassword ? 0: -1"
                        v-model="changePassword"
                      ></v-switch>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="v-expansion-panel-content-password">
                    <ValidationProvider name="oldPassword">
                      <v-text-field
                        v-model="oldPassword"
                        type="password"
                        label="Mật khẩu củ"
                      ></v-text-field>
                    </ValidationProvider>
                    <ValidationProvider v-slot="{ errors }" name="password" rules="required|min:6">
                      <v-text-field
                        v-model="password"
                        :error-messages="errors"
                        type="password"
                        vid="password"
                        label="Mật khẩu mới"
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
                        label="Xác nhận mật khẩu mới"
                      ></v-text-field>
                    </ValidationProvider>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
            <div class="text-center mb-3">
              <v-btn outlined @click="onSubmitUpdateInfor">Cập nhật</v-btn>
            </div>
          </form>
        </ValidationObserver>
      </v-col>
      <v-col v-else cols="12" md="9" class="mx-auto">Chưa đăng nhập</v-col>
    </v-row>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate";
import axios from 'axios';

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  head() {
    return {
      title: "Thông tin tài khoản",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Thông tin tài khoản tại ngoccamera.com"
        }
      ]
    };
  },
  data() {
    return {
      activeList: false,
      isForcusInFullname: false,
      isForcusInPhoneNumber: false,
      changePasswordEX: -1,
      changePassword: false,
      menu2: false,
      email: "manhhung94qn@gmail.com",
      fullname: "",
      phoneNumber: "",
      gender: "",
      birthday: "",
      oldPassword: "",
      password:"",
      confirmPassword: ""
    };
  },
  methods: {
    onSubmitUpdateInfor() {}
  },
  async asyncData(){
    const userInfor = await axios.get('/user/me');
  },
  computed: {
    computedIsLogined() {
      return this.$store.state.user.isLogined;
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .v-expansion-panel-content-password>div {
    padding: 0px !important;
}
.account {
  background-color: white;
}
</style>