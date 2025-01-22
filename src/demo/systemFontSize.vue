<script setup lang="ts">
import { ref } from 'vue'
import { useSystemStore } from '@/stores'
import { useReloadObserver } from '@/hooks/useReloadObserver'
const systemStore = useSystemStore()
const cb = () => {
  console.log('点击了')
  src.value = `${Date.now()}`
}
const src = ref(
  'https://jxxt-1257689580.cos.ap-chengdu.myqcloud.com/20241227/b14c8c6400facebc53b0befb046b7d58.webp'
)
useReloadObserver()
const width = ref(200)
const height = ref(200)
const radius = ref(12)
const updateLv = (num: number) => {
  if (num > 0 && systemStore.sizeLv >= 3) return
  if (num < 0 && systemStore.sizeLv <= 0) return
  systemStore.sizeLv += num
}
const lvName: any = ref({
  0: '小',
  1: '默认',
  2: '大',
  3: '超大'
})
const status = ref('加载中')
</script>

<template>
  <sf-page>
    <sf-image
      @click="cb"
      :width="width"
      :height="height"
      :src="src"
      :radius="radius"
      border="2px solid red"
    />
    <view style="display: flex">
      <view> 系统字体等级:{{ lvName[systemStore.sizeLv] }} </view>
      <view class="btn" @tap="updateLv(1)">字体等级增加</view>
      <view class="btn" @tap="updateLv(-1)">字体等级减少</view>
    </view>
  </sf-page>
</template>
<style scoped>
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
