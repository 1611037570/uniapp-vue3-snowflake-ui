<script setup lang="ts">
const emit = defineEmits(["change"]);
let type = "";
const props = defineProps({
    props: {
        type: Object,
    },
});
const change = (e: any) => {
    emit("change", e);
};
</script>

<template>
    <input
        v-if="type === 'input'"
        style="
            width: 100%;
            height: 100%;
            background: rgb(243, 243, 243);
            padding-left: 12px;
            border-radius: 10px;
        "
    />
</template>
<style scoped>
/deep/.uni-switch-input {
    margin-right: 0 !important;
}
</style>
