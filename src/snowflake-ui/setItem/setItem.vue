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
    <view class="set-box">
        <input
            v-if="type === 'input'"
            :maxlength="props.maxlength || 200"
            :placeholder="props.placeholder || ''"
            :type="props.type || 'number'"
            style="
                width: 100%;
                height: 100%;
                background: rgb(243, 243, 243);
                padding-left: 12px;
                border-radius: 10px;
            "
        />
        <template v-else>
            <view class="left"></view>
            <view class="right">
                <slot>
                    <switch
                        v-if="type == 'switch'"
                        color="#337FFF"
                        :checked="props.checked"
                        @change="change"
                    ></switch>
                    <!-- type === picker 选择框模板 -->
                    <picker
                        v-else-if="type == 'picker'"
                        @change="change"
                        :rangeKey="props.rangeKey"
                        :range="props.range"
                        :value="props.value"
                    >
                        <view
                            style="
                                display: flex;
                                align-items: center;
                                height: 100%;
                            "
                        >
                            <text>{{ props.text }}</text>
                            <!-- <osx-icon
                                icon="fluent--chevron-right-24-regular"
                                size="20"
                            /> -->
                        </view>
                    </picker>
                </slot>
            </view>
        </template>
        <view v-if="line" style="padding: 0 16px">
            <view class="divider"></view>
        </view>
    </view>
</template>
<style scoped>
.set-box {
    width: 100%;
    height: 52px;
    border-radius: 6px;
    display: flex;
    padding: 0 16px;
    background: #fff;
    border-radius: 24rpx;
    font-family: PuHui;
}
.left,
.right {
    display: flex;
    align-content: center;
    flex-wrap: wrap !important;
    height: 100%;
}
.left {
    font-size: 28rpx;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 400;
    flex: 1 1 0%;
    overflow: hidden;
}

.right {
    font-size: 28rpx;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
}
.divider {
    width: 100%;
    padding: 0 16px;
    height: 0.5px;
    opacity: 0.3;
    background: #bfbfbf;
}
/deep/.uni-switch-input {
    margin-right: 0 !important;
}
</style>
