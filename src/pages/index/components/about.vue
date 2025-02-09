<script setup lang="ts">
const touchmove = (e: any) => {
  console.log('e', e.changedTouches[0].clientY)
}
</script>

<template>
  <view style="height: 100%; width: 100%; border: 2px solid red; position: absolute; top: -100%">
    <view style="position: absolute; bottom: -40px; left: 0" @touchstart="" @touchmove="touchmove">
      下拉我哈哈哈
    </view>
  </view>
</template>
<style lang="scss" scoped></style>
