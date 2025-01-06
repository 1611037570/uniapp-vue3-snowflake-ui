import { createSSRApp } from "vue";
import App from "./App.vue";
// 状态管理
import store from "./stores";
// 国际化
import i18n from "./locale";
export function createApp() {
    const app = createSSRApp(App);
    app.use(store);
    app.use(i18n);
    return {
        app,
    };
}