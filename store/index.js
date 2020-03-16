export const actions = {
    async nuxtServerInit({ commit }, { req, app }) {
        if (req.cookies.n_token_key) {
            try {
                let {data}  = await app.$axios.get('/user/me');
                if(data.id && data.username){
                    commit('user/setUserInfor',{
                        id: data.id,
                        username: data.username,
                        isLogined: true
                    })
                }
            } catch (error) {
                console.log('Người dùng chưa đăng nhập');
            }
        }

    }
}