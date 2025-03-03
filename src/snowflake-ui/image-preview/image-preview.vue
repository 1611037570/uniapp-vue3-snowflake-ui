<script setup lang="ts">
const props = defineProps<{
  list: any[]
}>()
const close = () => {
  console.log('close')
}
</script>

<template>
  <view style="width: 100%; display: flex">
    <sf-image v-for="item in props.list" :src="item"></sf-image>
    <view class="make">
      <view style="width: auto; border: 2px solid palegreen">12323</view>
      <view @tap="close">关闭</view>
      <view>查看原图</view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
.make {
  position: fixed;
  transform: translate(0px, 0px);
  /* top: 0;
        left: 0;
        right: 0;
        bottom: 0; */
  width: 100%;
  height: 100%;
  border: 2px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
