import { defineAsyncComponent } from 'vue'
const IS_EAGER = true

export const getComponentNum = () => {
  const components = IS_EAGER
    ? import.meta.glob('../../snowflake-ui/**/types.ts', { eager: true })
    : import.meta.glob('../../snowflake-ui/**/types.ts')

  return Object.keys(components).length
}

export const getModule = (name: string) => {
  if (!name) {
    return
  }

  const modules = IS_EAGER
    ? import.meta.glob('../../snowflake-ui/**/types.ts', { eager: true })
    : import.meta.glob('../../snowflake-ui/**/types.ts')
  console.log('modules', modules)

  for (const key in modules) {
    const currentName = key.slice(2, -4).toLocaleLowerCase()
    if (currentName !== name) {
      continue
    }
    const module: any = modules[key]
    return IS_EAGER ? module.default : defineAsyncComponent(module)
  }
}
