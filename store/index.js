// import axios from 'axios'

export const actions = {
    async nuxtServerInit({ commit }, { req, app }) {
        if (req.cookies.n_user_id && req.cookies.n_token_key) {
            commit('user/setToken', {
                value: req.cookies.n_token_key
            });
            app.$axios.setToken(req.cookies.n_token_key,'Bearer')    

            try {
                let user = await app.$axios.get('/user/me');
                if(user.id && user.username){
                    commit('user/setUserInfor',{
                        id: user.id,
                        username: user.username,
                        isLogined: true
                    })
                }
                console.log(user);
            } catch (error) {
                console.log('Người dùng chưa đăng nhập');
            }
        }

    }
}