<script setup lang="ts">
import { ref } from 'vue'
import { useReloadObserver } from '@/hooks/useReloadObserver'

useReloadObserver()
const status: any = ref({
  ref1: false,
  ref2: false,
  ref3: false
})
const updateStatus = (number: number) => {
  status.value[`ref${number}`] = true
}
</script>

<template>
  <view style="width: 100%; height: 100vh; display: flex; flex-direction: column">
    <observer :data="status" #default="{ key, value }">
      {{ key }}: {{ value ? '已加载' : '未加载' }}
      <view> </view>
    </observer>
    <swiper style="width: 100%; height: 100%" :current="1">
      <swiper-item>
        <view class="swiper-item">
          <sf-lazy-load @show="updateStatus(1)">
            <view style="width: 100px; border: 1px solid red">123</view>
          </sf-lazy-load>
        </view>
      </swiper-item>

      <swiper-item>
        <sf-lazy-load @show="updateStatus(2)">
          <view style="border: 2px solid red"> ref2 </view>
        </sf-lazy-load>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-blue">
          <sf-lazy-load @show="updateStatus(3)">ref3</sf-lazy-load>
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
