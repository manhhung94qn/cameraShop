import { required, email, min, confirmed } from "vee-validate/dist/rules";
import {
    extend,
    setInteractionMode
} from "vee-validate";


setInteractionMode("eager");
export const message = {
    username: "tên đăng nhập",
    email: "địa chỉ email",
    password: "mật khẩu",
    cityName: 'tỉnh, thành phố',
    district: 'quận, huyện',
    ward: 'phường, xã'
};

extend("required", {
    ...required,
    params: ["name"],
    message: fieldName => {
        return `Bạn chưa nhập ${message[fieldName]}.`;
    }
});

extend("min", {
    ...min,
    message: "Mật khẩu tối thiểu 6 kí tự"
});

extend("email", {
    ...email,
    message: fieldName => `Bạn chưa nhập ${message[fieldName]}.`
});

extend("confirmed", {
    ...confirmed,
    message: fieldName => `Xác nhận mật khẩu không đúng.`
});