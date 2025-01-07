/* eslint-disable no-unused-vars */
export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $size: (size: string) => string
  }
}
