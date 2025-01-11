<script setup lang="ts">
const go = (path: string) => {
    uni.navigateTo({
        url: "/demo/" + path,
    });
};

const components = ref([
    {
        name: "元素懒加载",
        url: "lazyLoad",
    },
    {
        name: "图片懒加载",
        url: "image",
    },
    {
        name: "虚拟列表开发中",
        url: "virtualList",
    },
    {
        name: "安全区域",
        url: "safeArea",
    },
    {
        name: "page容器",
        url: "page",
    },
]);

const functions = ref([
    {
        name: "跟随系统字体大小",
        url: "systemFontSize",
    },
    {
        name: "国际化",
        url: "i18n",
    },
]);
</script>

<template>
    <sf-page>
        <view
            v-for="(item, index) in components"
            :key="index"
            style="width: 100%; padding: 12px; font-size: 20px"
            @tap="go(item.url)"
            >{{ item.name }}</view
        >
        <view
            v-for="(item, index) in functions"
            :key="index"
            style="width: 100%; padding: 12px; font-size: 20px"
            @tap="go(item.url)"
            >{{ item.name }}</view
        >
    </sf-page>
</template>
<style lang="scss" scoped></style>
