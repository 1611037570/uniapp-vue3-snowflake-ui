<script setup lang="ts">
const goImageLazy = () => {
    uni.navigateTo({
        url: "/demo/image",
    });
};
</script>

<template><view> 
    <view @tap="goImageLazy">图片懒加载</view>
</view></template>
<style lang="scss" scoped></style>
