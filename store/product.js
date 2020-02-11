export const state = () => ({
    listProductInCard: [
        {
            id: 1,
            url: "/images/logo.png",
            title: "Camera Wifi 2412",
            quatity: 1
        },
        {
            id: 2,
            url: "/images/logo.png",
            title:
                "Camera thường 2412 Camera thường 2412 Camera thường 2412 Camera thường 2412",
            quatity: 3
        },
        {
            id: 3,
            url: "/images/logo.png",
            title: "Camera xịn 2412",
            quatity: 2
        },
        {
            id: 4,
            url: "/images/logo.png",
            title: "Camera ngon 2412",
            quatity: 5
        },
        {
            id: 5,
            url: "/images/logo.png",
            title:
                "Camera thường 2412 Camera thường 2412 Camera thường 2412 Camera thường 2412",
            quatity: 1
        }
    ]
});

export const mutations = {
    setListProductInCard(state, payload) {
        state.listProductInCard = payload.data
    }
}