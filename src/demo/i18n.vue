<script setup lang="ts">
import i18n from '@/locale/index'

const current = ref(uni.getLocale())
const languages = [
  {
    value: 'zh-Hans',
    name: '中文',
    checked: 'true'
  },
  {
    value: 'en',
    name: '英文'
  }
]
const radioChange = (evt: any) => {
  current.value = evt.detail.value
  // 下面2句缺一不可！！！
  uni.setLocale(evt.detail.value)
  i18n.global.locale = evt.detail.value
}
</script>

<template>
  <sf-page>
    <view class="">切换语言</view>
    <radio-group @change="radioChange" class="radio-group">
      <label v-for="item in languages" :key="item.value">
        <radio :value="item.value" :checked="item.value === current" />
        {{ item.name }}
      </label>
    </radio-group>
  </sf-page>
</template>
<style scoped></style>
