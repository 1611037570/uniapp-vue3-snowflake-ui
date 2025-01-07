<script setup lang="ts">
import { ref } from "vue";
import { useReloadObserver } from "@/hooks/useReloadObserver";
const cb = () => {
    console.log("点击了");
    src.value = `${Date.now()}`;
};
const src = ref(
    "https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/20241227/b14c8c6400facebc53b0befb046b7d58.webp"
);
useReloadObserver();
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
                <view class="swiper-item">
                    <sf-image @click="cb" border="3px solid red" :src="src" />
                </view>
            </swiper-item>

            <swiper-item>
                <sf-image
                    @click="cb"
                    :width="width"
                    :height="height"
                    :src="src"
                    :radius="radius"
                    border="2px solid red"
                />
                <observer :data="{ width, height, radius }"></observer>

                <view style="display: flex">
                    <view class="btn" @tap="updateWidth(2)">宽度增加</view>
                    <view class="btn" @tap="updateWidth(-2)">宽度减少</view>
                </view>
                <view style="display: flex">
                    <view class="btn" @tap="updateHeight(2)">高度增加</view>
                    <view class="btn" @tap="updateHeight(-2)">高度减少</view>
                </view>
                <view style="display: flex">
                    <view class="btn" @tap="updateRadius(2)">圆角增加</view>
                    <view class="btn" @tap="updateRadius(-2)">圆角减少</view>
                </view>
                <view>{{ status }}的图片</view>
                <sf-image
                    src="https://www.baiud.com/error-img.png"
                    @error="updateStatus"
                />
            </swiper-item>
            <swiper-item>
                <view class="swiper-item uni-bg-blue">
                    <sf-image :src="src" radius="50%" border="3px solid red" />
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
