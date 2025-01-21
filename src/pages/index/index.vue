<script setup lang="ts">
import { getComponentNum } from "./getModule";
const goDemo = () => {
    uni.navigateTo({
        url: "/demo/index",
    });
};
</script>

<template>
    <sf-page>
        <view class="content">
            <image class="logo" src="/static/snow.svg" />
            <view class="title">{{ $t("name") }}</view>

            <view style="width: 100%; display: flex;">
                {{ $t("info") }}
            </view>
            <view>目前已有 {{ getComponentNum() }} 个组件</view>
            <view class="title" @tap="goDemo">{{ $t("goDemo") }}</view>
        </view>
    </sf-page>
</template>

<style>
.content {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 100rpx;
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
