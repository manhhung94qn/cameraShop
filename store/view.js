export const state = ()=>({
    isShowListMenu : false
});

export const mutations = {
    setIsShowListMenu(state,payload){
        state.isShowListMenu = payload.value
    }
}