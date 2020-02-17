export const state = () => ({
    id: '',
    username: '',
    isAdmin: false,
    isLogined: false,
    token: ''
});

export const mutations = {
    setUserInfor(state, payload) {
        state.id = payload.id;
        state.username = payload.username;
        isLogined = payload.isLogined
    },
    setToken(state,payload){
        state.token = payload.value
    }
}

export const getters =  {
    getIsLogined: (state) => state.isLogined
  }
