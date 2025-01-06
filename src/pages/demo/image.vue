<script setup lang="ts">
import sfImg from "@/components/snowflake-image/snowflake-image.vue";
import { ref } from "vue";
import { useImgReloadV3 } from "@/components/snowflake-image/hooks/useImgReload";
import { useSystemStore } from "@/stores";
const systemStore = useSystemStore();
const cb = () => {
    console.log("点击了");
    src.value = `${Date.now()}`;
};
const src = ref(
    "https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/20241227/b14c8c6400facebc53b0befb046b7d58.webp"
);
useImgReloadV3();
const width = ref(200);
const height = ref(200);
const radius = ref(12);
const updateWidth = (num: number) => {
    width.value += num;
};
const updateHeight = (num: number) => {
    height.value += num;
};
const updateRadius = (num: number) => {
    radius.value += num;
};
const updateLv = (num: number) => {
    if (num > 0 && systemStore.sizeLv >= 3) return;
    if (num < 0 && systemStore.sizeLv <= 0) return;
    systemStore.sizeLv += num;
};
const lvName: any = ref({
    0: "小",
    1: "默认",
    2: "大",
    3: "超大",
});
const status = ref("加载中");
const updateStatus = () => {
    status.value = "加载失败";
};
</script>

<template>
    <view
        style="
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
        "
    >
        <swiper style="width: 100%; height: 100%" :current="1">
            <swiper-item>
                <view class="swiper-item uni-bg-green">
                    <sf-img @click="cb" border="3px solid red" :src="src" />
                </view>
            </swiper-item>

            <swiper-item>
                <sf-img
                    @click="cb"
                    :width="width"
                    :height="height"
                    :src="src"
                    :radius="radius"
                    border="2px solid red"
                />
                <view style="position: absolute; top: 12px; right: 12px">
                    <view>宽度：{{ width }}</view>
                    <view>高度：{{ height }}</view>
                    <view>圆角：{{ radius }}</view>
                </view>
                <view style="display: flex">
                    <view class="btn" @tap="updateWidth(2)">宽度增加</view>
                    <view class="btn" @tap="updateWidth(-2)">宽度减少</view>
                </view>
                <view style="display: flex">
                    <view class="btn" @tap="updateHeight(2)">高度增加</view>
                    <view class="btn" @tap="updateHeight(-2)">高度减少</view>
                </view>
                <view style="display: flex">
                    <view class="btn" @tap="updateRadius(2)">圆角增加</view>
                    <view class="btn" @tap="updateRadius(-2)">圆角减少</view>
                </view>
                <view>
                    <view style="display: flex">
                        <view>
                            系统字体等级:{{ lvName[systemStore.sizeLv] }}
                        </view>
                        <view class="btn" @tap="updateLv(1)">字体等级增加</view>
                        <view class="btn" @tap="updateLv(-1)"
                            >字体等级减少</view
                        >
                    </view>
                </view>
                <view>{{ status }}的图片</view>
                <sf-img
                    src="https://www.baiud.com/error-img.png"
                    @error="updateStatus"
                />
            </swiper-item>
            <swiper-item>
                <view class="swiper-item uni-bg-blue">
                    <sf-img :src="src" radius="50%" border="3px solid red" />
                </view>
            </swiper-item>
        </swiper>
    </view>
</template>
<style scoped>
page {
    width: 100%;
    height: 100%;
}
.swiper {
}
.swiper-item {
    display: block;
    height: 100%;
    text-align: center;
}
.btn {
    border: 1px solid #ccc;
    margin-right: 6px;
    padding: 2px 4px;
}
</style>
