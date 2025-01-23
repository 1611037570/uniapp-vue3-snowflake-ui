# uniapp-vue3-snowflake-ui

一个基于 UniApp 使用 Vue3 Setup 和 TypeScript 开发的雪花组件库

## 平台兼容性

| H5  | 微信小程序 | 安卓 | IOS |
| --- | ---------- | ---- | --- |
| √   | √          | √    | √   |

# 体验 h5 版本

```bash
pnpm i
pnpm run dev:h5
```

# snowflake开发和维护

## 组件开发

统一存存放于src/snowflake-ui

文件夹和组件以小驼峰命名，会被自动注册

参考

```bash
snowflake-ui
————lazyLoad
————————lazyLoad.vue # 自动注册
————————lazyLoad.ts # 不会注册
————————lazy-load.ts # 不会注册
```

## 组件预览

统一存放于src/demo
