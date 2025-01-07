<script setup lang="ts">
import { ref } from "vue";
import { useSystemStore } from "@/stores";
import { useImageReload } from "@/hooks/useImageReload";
const systemStore = useSystemStore();
const cb = () => {
    console.log("点击了");
    src.value = `${Date.now()}`;
};
const src = ref(
    "https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/20241227/b14c8c6400facebc53b0befb046b7d58.webp"
);
useImageReload();
const width = ref(200);
const height = ref(200);
const radius = ref(12);
const updateWidth = (num: number) => {
    width.value += num;
};
const updateHeight = (num: number) => {
    height.value += num;
};
const updateRadius = (num: number) => {
    radius.value += num;
};
const updateLv = (num: number) => {
    if (num > 0 && systemStore.sizeLv >= 3) return;
    if (num < 0 && systemStore.sizeLv <= 0) return;
    systemStore.sizeLv += num;
};
const lvName: any = ref({
    0: "小",
    1: "默认",
    2: "大",
    3: "超大",
});
const status = ref("加载中");
const updateStatus = () => {
    status.value = "加载失败";
};
</script>

<template>
    <view
        style="
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
        "
    >
        <swiper style="width: 100%; height: 100%" :current="1">
            <swiper-item>
                <view class="swiper-item uni-bg-green">
                    <sf-lazy-load>
                        <view style="width: 100px;border: 1px solid red;">123</view>
                    </sf-lazy-load>
                </view>
            </swiper-item>

            <swiper-item>
                <sf-lazy-load>123</sf-lazy-load>
            </swiper-item>
            <swiper-item>
                <view class="swiper-item uni-bg-blue">
                    <sf-lazy-load>123</sf-lazy-load>
                </view>
            </swiper-item>
        </swiper>
    </view>
</template>
<style scoped>
page {
    width: 100%;
    height: 100%;
}
.swiper {
}
.swiper-item {
    display: block;
    height: 100%;
    text-align: center;
}
.btn {
    border: 1px solid #ccc;
    margin-right: 6px;
    padding: 2px 4px;
}
</style>
