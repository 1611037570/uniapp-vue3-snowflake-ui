import type { ComponentResolver } from '@uni-helper/vite-plugin-uni-components'
import { GLOBAL_CONFIG } from '../config/globalConfig'
// + GLOBAL_CONFIG.COMPONENT_PREFIX
export const snowflakeResolver = (): ComponentResolver => {
  return {
    type: 'component',
    resolve: (name: string) => {
      function capitalize(str: string) {
        return str[0].toUpperCase() + str.slice(1)
      }
      const currentName = GLOBAL_CONFIG.COMPONENT_PREFIX

      if (name.startsWith(capitalize(currentName))) {
        const currentName = name.slice(2).charAt(0).toLowerCase() + name.slice(2).slice(1)
        return {
          name: currentName,
          from: '@/snowflake-ui/' + currentName + '/' + currentName + '.vue'
        }
      }
    }
  }
}
