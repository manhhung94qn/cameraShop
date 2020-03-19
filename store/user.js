export const state = () => ({
    user_id: '',
    username: '',
    token: ''
});

export const mutations = {
    setUserInfor(state, payload) {
        state.user_id = payload.id;
        state.username = payload.username;
        state.token = payload.token
    },
}