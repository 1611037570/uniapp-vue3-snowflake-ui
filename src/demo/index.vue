<script setup lang="ts">
const go = (path: string) => {
    uni.navigateTo({
        url: "/demo/" + path,
    });
};

const res = ref([
    {
        name: "元素懒加载",
        url: "lazy-load",
    },
    {
        name: "图片懒加载",
        url: "image",
    },
]);
</script>

<template>
    <view>
        <view
            v-for="(item, index) in res"
            style="width: 100%; padding: 12px; font-size: 20px"
            @tap="go(item.url)"
            >{{ item.name }}</view
        >
        <view
            style="width: 100%; padding: 12px; font-size: 20px"
            @tap="go('system-font-size')"
            >跟随系统字体大小</view
        >
    </view>
</template>
<style lang="scss" scoped></style>
