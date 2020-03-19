export const state = ()=>({
    isShowListMenu : false,
    isShowSnackbar: false,
    isShowListAccountMenu: false
});

export const mutations = {
    setIsShowListMenu(state,payload){
        state.isShowListMenu = payload.value
    },
    setIsShowSnackbar(state,payload){
        state.isShowSnackbar = payload.value
    },
    setIsShowListAccountMenu(state,payload){
        state.isShowListAccountMenu = payload.value
    }
}