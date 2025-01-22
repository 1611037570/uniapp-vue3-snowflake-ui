import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSystemStore = defineStore(
  'system',
  () => {
    // 系统字体等级
    const sizeLv = ref(1)
    // 系统字体倍率
    const sizeRadio = ref(2)
    // 图片远端服务器
    const imgServerUrl = ref('')
    // 跟随系统字体等级变化
    const followSystemFontSize = (size: string | number) => {
      return Number(size)
    }
    return {
      sizeLv,
      sizeRadio,
      imgServerUrl,
      followSystemFontSize
    }
  },
  {
    persist: true
  }
)
