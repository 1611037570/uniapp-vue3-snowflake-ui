<script setup lang="ts">
import { getComponentNum } from "./getModule";
const goDemo = () => {
    uni.navigateTo({
        url: "/demo/index",
    });
};
</script>

<template>
    <view class="content">
        <image class="logo" src="/static/snow.svg" />
        <view class="title">{{ $t("name") }}</view>
        <view>{{ $t("info") }}</view>
        <view>目前已有 {{ getComponentNum() }} 个组件</view>
        <view class="title" @tap="goDemo">{{ $t("goDemo") }}</view>
    </view>
</template>

<style>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36rpx;
    color: #8f8f94;
}
</style>
