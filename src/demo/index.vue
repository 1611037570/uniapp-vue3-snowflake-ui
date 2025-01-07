<script setup lang="ts">
const go = (path: string) => {
    uni.navigateTo({
        url: "/demo/" + path,
    });
};
</script>

<template>
    <view>
        <view @tap="go('lazy-load')">元素懒加载</view>
        <view @tap="go('image')">图片懒加载</view>
    </view>
</template>
<style lang="scss" scoped></style>
