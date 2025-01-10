<script setup lang="ts">
import { DEFAULT_MODEL, DEFAULT_CONFIG } from "./default";
import { useId } from "@/hooks";
import type { SnowflakeLazyLoad } from "./types";
defineOptions({
    name: "snowflake-lazy-load",
});

const {} = withDefaults(defineProps<SnowflakeLazyLoad>(), {});
const emit = defineEmits(["show"]);
const { proxy }: any = getCurrentInstance();

const snowflakeID: string = useId();
// 来自页面
const fromPage: boolean | null = inject("fromPage", null);

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
    emit("show");
};

// 开启监听器事件
const openEmit = () => {
    if (!fromPage) return;
    uni.$on("observer_status", (type) => {
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
    if (!fromPage) return;
    uni.$off("observer_status");
};
// 懒加载
const lazyLoad = () => {
    setTimeout(() => {
        // #ifdef MP-WEIXIN
        observer.value = proxy.createIntersectionObserver({
            thresholds: DEFAULT_CONFIG.THRESHOLDS,
        });
        // #endif
        // #ifndef MP-WEIXIN
        observer.value = uni.createIntersectionObserver(this, {
            thresholds: DEFAULT_CONFIG.THRESHOLDS,
        });
        // #endif
        observer.value
            .relativeToViewport(DEFAULT_CONFIG.MARGINS)
            .observe("#" + snowflakeID, (res: any) => {
                if (res.intersectionRatio > 0) {
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
