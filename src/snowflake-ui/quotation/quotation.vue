<script setup lang="ts">
import data from "./data.json";
import { getRandom } from "@/hooks";

const content = ref("");
const getContent = () => {
    const index = getRandom(0, data.length - 1);
    content.value = data[index];
};
getContent()
</script>

<template>
    <view @tap="getContent">{{ content }}</view>
</template>
<style lang="scss" scoped></style>
