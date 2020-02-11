export const state = () => ({
    listProductInCard: []
});

export const mutations = {
    setListProductInCard(state, payload) {
        state.listProductInCard = payload.data
    },
    setListProductInCard(state, payload) {
        state.listProductInCard = payload.data;
    }
};

export const getters = {
    countListProductInCard: state => state.listProductInCard.length
}

export const actions = {
    deleteItemInCard: ({ commit, state }, payload) => {
        let data = [...state.listProductInCard].filter(x => x.id != payload.id);
        commit('setListProductInCard', { data });
    },
    addItemInCard: ({ commit, state }, payload) => {
        let data;
        let itemPre = state.listProductInCard.find(x => x.id === payload.id);
        if (itemPre) {
            let newItem = {
                quatity: itemPre.quatity + 1,
                id: itemPre.id,
                imageSrc: itemPre.imageSrc,
                title: itemPre.title
            }
            let listOld = state.listProductInCard;
            data = [newItem, ...listOld.filter(x => x.id !== payload.id)];
        } else {
            data = [payload, ...state.listProductInCard]
        };
        commit('setListProductInCard', { data });
    }
}