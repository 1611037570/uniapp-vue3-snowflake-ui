<script setup lang="ts">
import { DEFAULT_MODEL, DEFAULT_CONFIG } from "./default";
import { getID } from "../image/utils";
const { proxy }: any = getCurrentInstance();
const snowflakeID: string = getID();
const imgFromPage: boolean | null = inject("imgFromPage", null);
defineOptions({
    name: "snowflake-lazy-load",
});
const emit = defineEmits(["show"]);
// 正方形大小
const size = defineModel<number | string>("size", {
    default: DEFAULT_MODEL.SIZE,
});
// 宽度
const width = defineModel<number | string>("width", {
    default: DEFAULT_MODEL.WIDTH,
});
// 高度
const height = defineModel<number | string>("height", {
    default: DEFAULT_MODEL.HEIGHT,
});

const useSize = computed(() => {
    return {
        width: size.value || width.value || "auto",
        height: size.value || height.value || "auto",
    };
});
// 是否显示
const show = ref<boolean>(false);
const observer = ref<any>();
// 开启
const open = () => {
    show.value = true;
    console.log("show");
    emit("show");
};

// 开启监听器事件
const openEmit = () => {
    if (!imgFromPage) return;
    uni.$on("image_observer_status", (type) => {
        if (show.value) return;
        // #ifndef APP-NVUE
        if (type === "open") {
            lazyLoad();
        } else if (type === "close") {
            closeObserver();
        }
        // #endif
    });
};
// 卸载监听器
const closeObserver = () => {
    observer.value && observer.value.disconnect();
};
// 卸载监听器事件
const closeEmit = () => {
    if (!imgFromPage) return;
    uni.$off("image_observer_status");
};
// 懒加载
const lazyLoad = () => {
    setTimeout(() => {
        let that;
        // #ifdef MP-WEIXIN
        that = proxy;
        // #endif
        // #ifndef MP-WEIXIN
        that = uni;
        // #endif

        observer.value = that.createIntersectionObserver({
            thresholds: DEFAULT_CONFIG.THRESHOLDS,
        });

        observer.value
            .relativeToViewport(DEFAULT_CONFIG.MARGINS)
            .observe("#" + snowflakeID, (res: any) => {
                if (res.intersectionRatio > 0) {
                    console.log('res',res);
                    
                    open();
                    closeEmit();
                    closeObserver();
                }
            });
    }, 0);
};
// n-vue懒加载
const nVueLazyLoad = () => {
    // 非懒加载无需操作
    if (show.value) {
        return;
    }
    open();
};

onMounted(() => {
    // #ifndef APP-NVUE
    openEmit();
    lazyLoad();
    // #endif
});

onBeforeUnmount(() => {
    closeEmit();
    closeObserver();
});
</script>

<template>
    <view
        :id="snowflakeID"
        :key="snowflakeID"
        @appear="nVueLazyLoad"
        :style="[useSize]"
    >
        <slot v-if="show"></slot>
    </view>
</template>
<style lang="scss" scoped></style>
