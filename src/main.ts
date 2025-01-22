import { createSSRApp } from 'vue'
import App from './App.vue'
// 状态管理
import store from './stores'

// 国际化
import i18n from './locale'
export function createApp() {
  const app = createSSRApp(App)
  app.use(i18n)
  app.use(store)
  // https://juejin.cn/post/7339905802070769690#heading-18
  return {
    app
  }
}
