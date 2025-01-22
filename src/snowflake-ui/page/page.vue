<script setup lang="ts">
const { bottom, top }: any = uni.getSystemInfoSync().safeAreaInsets

type SafeArea = {
  fixed?: boolean
  mode?: 'top' | 'bottom'
  customHeader?: boolean
}
const props = withDefaults(defineProps<SafeArea>(), {
  fixed: true,
  mode: 'top',
  customHeader: false
})
</script>

<template>
  <view style="width: 100%; height: 100%; display: flex; flex-direction: column">
    <sf-safe-area :fixed="false" v-if="customHeader">
      <slot name="header"> </slot>
    </sf-safe-area>
    <slot v-else name="header"></slot>
    <view style="flex: 1; display: flex; width: 100%; flex-direction: column">
      <slot></slot>
    </view>
    <sf-safe-area :fixed="false" mode="bottom">
      <slot name="footer"> </slot>
    </sf-safe-area>
  </view>
</template>
<style></style>
