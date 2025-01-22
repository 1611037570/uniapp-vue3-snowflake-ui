<script setup lang="ts">
defineProps({
  data: {}
})
</script>

<template>
  <view style="padding: 12px; background: pink; position: fixed; top: 44px; right: 0; z-index: 1">
    <slot
      :key="key"
      :value="value"
      :index="index"
      :data="{ value, key, index }"
      v-for="(value, key, index) in data"
    >
      <view> {{ key }}：{{ value }} </view>
    </slot>
  </view>
</template>
<style lang="scss" scoped></style>
