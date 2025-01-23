<script setup lang="ts">
import i18n from '@/locale/index'

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
const current = ref(uni.getLocale())

const changeLanguage = () => {
  const language = current.value === 'zh-Hans' ? 'en' : 'zh-Hans'
  current.value = language
  // 下面2句缺一不可！！！
  uni.setLocale(language)
  i18n.global.locale = language
}
</script>

<template>
  <sf-page>
    <view class="content">
      <view style="position: absolute; top: 0; right: 0" @tap="changeLanguage"
        >
        {{ current === 'zh-Hans' ? '中文' : 'English' }}
      </view>
      <image class="logo" src="/static/snow.svg" />
      <view class="title">{{ $t('name') }}</view>
      <text>
        {{ $t('info') }}
      </text>
      <view
        ><text> {{ components.length }} </text>个组件
      </view>
      <view
        ><text> {{ hookNum }} </text>个hook
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
