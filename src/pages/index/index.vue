<script setup lang="ts">
import more from './components/more.vue'
import { getComponentNum } from './getModule'
import { components } from '@/demo/config'
import * as obj from '@/hooks'
console.log(1, obj)
const hookNum = Object.keys(obj).length

const goDemo = () => {
  uni.navigateTo({
    url: '/demo/index'
  })
}
const go = () => {
  const url = 'https://juejin.cn/user/2342386827791687/posts?sort=popular'
  window.open(url)
}
</script>

<template>
  <sf-page>
    <view class="content">
      <more />
      <image class="logo" src="/static/snow.svg" />
      <view class="title">{{ $t('name') }}</view>
      <text>
        {{ $t('info') }}
      </text>
      <view>
        <text> {{ components.length }} </text>{{ $t('component') }}
      </view>
      <view>
        <text> {{ hookNum }} </text>{{ $t('hook') }}
      </view>
      <view class="title" @tap="goDemo">{{ $t('goDemo') }}</view>
    </view>
    <template #footer>
      <!-- 版权所有 -->
      <view
        style="display: flex; align-items: center; justify-content: center; flex-direction: column"
      >
        <view> 友情链接： <text @tap="go">稀土掘金</text> </view>
        <view>
          {{ $t('copyright') }}
        </view>
      </view>
    </template>
  </sf-page>
</template>

<style>
.content {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  box-sizing: border-box;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.title {
  font-size: 1.125rem;
  color: #51a0e5;
}
</style>
