<template>
    <div class="index">
        <Slide />
        <Service />
        <v-sheet elevation="1" class="sheet-slide mt-10 pt-8">
            <client-only>
                <carousel
                    :autoplay="owlOption1.autoplay"
                    :dots="owlOption1.dots"
                    :rewind="owlOption1.rewind"
                    :nav="owlOption1.nav"
                    :responsive="owlOption1.responsive"
                    :margin="owlOption1.margin"
                    class="carousel"
                >
                    <template slot="prev">
                        <v-btn class="control prev" text icon color="textAccent">
                            <v-icon>mdi-chevron-left</v-icon>
                        </v-btn>
                    </template>

                    <ItemCard v-for="item in 10" :key="item" />

                    <template slot="next">
                        <v-btn class="control next" text icon color="textAccent">
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-btn>
                    </template>
                </carousel>
            </client-only>
        </v-sheet>
        <v-snackbar :right="true" :timeout="1000" :top="true" color="textAccent" v-model="computedIsShowSnackbar">
            Sản phẩm đã được thêm vào giỏ hàng
            <v-btn text @click="computedIsShowSnackbar = false">Close</v-btn>
        </v-snackbar>
    </div>
</template> 

<script>
import Slide from "@/components/Slide.vue";
import Service from "@/components/Service.vue";
import ItemCard from "@/components/ItemCard.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    components: {
        Slide,
        Service,
        ItemCard
    },
    head() {
        return {
            title:
                "Ngọc camera, chuyên cung cấp các loại camera chất lượng cao với mức giá hợp lý.",
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: "description",
                    name: "description",
                    content:
                        "Ngọc camera, chuyên cung cấp các loại camera chất lượng cao với mức giá hợp lý."
                }
            ]
        };
    },
    created() {
        this.$store.commit("view/setIsShowListMenu", { value: true });
    },
    data() {
        return {
            model: 1,
            snackbar: false,
            owlOption1: {
                autoplay: false,
                dots: false,
                rewind: false,
                margin: 4,
                nav: false,
                responsive: {
                    0: { items: 1 },
                    1264: { items: 4 }
                }
            }
        };
    },
    methods: {
      ...mapMutations({
      setIsShowSnackbar: 'view/setIsShowSnackbar'
    })
    },
    computed: {
      computedIsShowSnackbar: {
        get(){
          return this.$store.state.view.isShowSnackbar;
        },
        set(value){
          this.setIsShowSnackbar({value});
        }
      }
    },
    beforeDestroy() {
        this.$store.commit("view/setIsShowListMenu", { value: false });
    }
};
</script>

<style lang="scss" scoped>
.carousel {
    position: relative;
    .control {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        //border: 1px solid var(--v-textAccent-base);
        background-color: #0f9fd836;
        opacity: 0.4;
        border-radius: 50%;
        &:hover {
            opacity: 1;
        }
        &.prev {
            left: 3px;
        }
        &.next {
            right: 3px;
        }
    }
}
.sheet-slide {
    position: relative;
    &::before {
        display: block;
        position: absolute;
        content: "";
        width: 500px;
        max-width: 90%;
        height: 100px;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--v-textAccent-base);
        background: url("/images/km.png") no-repeat;
        background-position: center;
        font-weight: 500;
        font-size: 1.8em;
    }
}
</style>