// Vite 配置
import { defineConfig } from 'vite'
// UniApp 插件
import uni from '@dcloudio/vite-plugin-uni'

// 自动导入Api
import AutoImport from 'unplugin-auto-import/vite'

// 自动导入组件
import Components from '@uni-helper/vite-plugin-uni-components'

import { snowflakeResolver } from './src/snowflake-ui'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 使用自动导入组件 必须放在uni之前
    Components({
      dts: 'src/types/components.d.ts',
      resolvers: [snowflakeResolver()],
      dirs: ['src/components']
    }),
    // 使用UniApp 插件
    uni(),
    // 使用自动导入
    AutoImport({
      imports: ['vue', 'uni-app'],
      dts: 'src/types/auto-imports.d.ts',
      dirs: ['src/hooks'] // 自动导入 hooks
    })
  ],
  resolve: {
    //设置别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
