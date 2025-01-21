<script setup lang="ts">
import { provide } from "vue";
const props = defineProps({
    size: {
        type: String,
        default: "small",
    },
});
provide("globalSize", {
    size: props.size,
});
</script>

<template>
    <view style="width: 100%; height: 100%"><slot></slot> </view>
</template>
<style lang="scss" scoped></style>
