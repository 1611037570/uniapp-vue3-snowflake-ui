<script setup lang="ts">
const show = ref(false)
onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 500)
})
</script>

<template>
  <view class="snowflake-loading" style="width: 200px; height: 200px">
    <view
      :style="{
        display: show ? 'block' : 'none'
      }"
    >
      <slot></slot>
    </view>
  </view>
</template>
<style scoped>
@keyframes loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
.snowflake-loading {
  background: linear-gradient(90deg, #f0f2f5 25%, #e6e8eb 37%, #f0f2f5 63%);
  background-size: 400% 100%;
  animation: loading 1.4s ease infinite;
}
</style>
