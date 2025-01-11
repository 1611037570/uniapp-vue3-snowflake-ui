<script setup lang="ts">
const go = (path: string) => {
    uni.navigateTo({
        url: "/demo/" + path,
    });
};
import { components, functions } from "./config";
</script>

<template>
    <sf-page>
        <view
            v-for="(item, index) in components"
            :key="index"
            class="item"
            @tap="go(item.url)"
        >
            <view> {{ $t(`demo.${item.url}`) }} </view>
            <view>></view>
        </view>
        <view
            v-for="(item, index) in functions"
            :key="index"
            class="item"
            @tap="go(item.url)"
        >
            <view>
                {{ item.name }}
            </view>
            <view>></view></view
        >
    </sf-page>
</template>
<style scoped>
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* width: 100%; */

    padding: 12px;
    font-size: 20px;
}
</style>
