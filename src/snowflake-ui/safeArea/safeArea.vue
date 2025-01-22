<script setup lang="ts">
const { bottom, top }: any = uni.getSystemInfoSync().safeAreaInsets

type SafeArea = {
  fixed?: boolean
  mode?: 'top' | 'bottom'
}
const props = withDefaults(defineProps<SafeArea>(), {
  fixed: true,
  mode: 'top'
})
const useStyle = computed(() => {
  let res: any = {
    position: props.fixed ? 'fixed' : 'relative'
  }
  if (props.fixed === false) return res

  res[props.mode === 'top' ? 'top' : 'bottom'] = 0
  return res
})
</script>

<template>
  <view style="display: flex; flex-direction: column; width: 100%" :style="[useStyle]">
    <view v-if="mode === 'top'" :style="{ paddingTop: top + 'px' }"></view>
    <slot></slot>
    <view v-if="mode === 'bottom'" :style="{ paddingTop: bottom + 'px' }"></view>
  </view>
</template>
<style lang="scss" scoped></style>
