import { createI18n } from "vue-i18n";

import zhHans from "./zh-Hans.json";
import en from "./en.json";

const messages = {
    "zh-Hans": zhHans,
    en: en,
};

const i18n = createI18n({
    locale: uni.getLocale(), // 获取已设置的语言
    messages,
});

export default i18n;
