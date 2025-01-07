<script setup lang="ts">
const go = (path: string) => {
    uni.navigateTo({
        url: "/demo/" + path,
    });
};
</script>

<template>
    <view>
        <view style="width: 100%; padding: 12px; font-size: 20px;" @tap="go('lazy-load')">元素懒加载</view>
        <view style="width: 100%; padding: 12px; font-size: 20px;" @tap="go('system-font-size')">跟随系统字体大小</view>
        <view style="width: 100%; padding: 12px; font-size: 20px;" @tap="go('image')">图片懒加载</view>
    </view>
</template>
<style lang="scss" scoped></style>
