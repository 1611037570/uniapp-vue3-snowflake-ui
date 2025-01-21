<script setup lang="ts">
const props = defineProps({
    lazy: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <sf-skeleton>
        <sf-lazy-load v-if="lazy">
            <slot></slot>
        </sf-lazy-load>
        <slot v-else></slot>
    </sf-skeleton>
</template>
<style lang="scss" scoped></style>
