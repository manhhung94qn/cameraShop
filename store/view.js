export const state = ()=>({
    isShowListMenu : false,
    isShowSnackbar: false,
    isShowListAccountMenu: false,
    isOverlay: false
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
    },
    setIsOverlay(state,payload){
        state.isOverlay = payload.value
    }
}