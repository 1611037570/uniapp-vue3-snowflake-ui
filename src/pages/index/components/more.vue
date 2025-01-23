<script setup lang="ts">
import i18n from '@/locale/index'

const language = ref(uni.getLocale())
const changeLanguage = () => {
  language.value = language.value === 'zh-Hans' ? 'en' : 'zh-Hans'
  uni.setLocale(language.value)
  i18n.global.locale = language.value
}

const theme = ref('light')
const changTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  // uni.setStorageSync('darkMode', darkMode.value)
  // uni.setTheme({
  //   darkMode: darkMode.value
  // })
}
</script>

<template>
  <view style="position: absolute; top: 12px; right: 12px; display: flex">
    <view style="padding: 4px" @tap="changTheme">
      {{ theme === 'light' ? '夜间' : '白天' }}
    </view>
    <view style="padding: 4px" @tap="changeLanguage">
      {{ language === 'zh-Hans' ? 'English' : '中文' }}
    </view>
  </view>
</template>
<style lang="scss" scoped></style>
