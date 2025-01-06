import { onShow, onHide } from "@dcloudio/uni-app";
import { provide, ref } from "vue";

export const useImgReloadV3 = () => {
    provide("imgFromPage", true);
    const lastLoad = ref(true);
    onShow(() => {
        if (lastLoad.value) {
            lastLoad.value = false;
            return;
        }

        uni.$emit("image_observer_status", "open");
    });

    onHide(() => {
        uni.$emit("image_observer_status", "close");
    });
};
// mixins写法 没测试理论可用 为了兼容v2写法所提供的
export const useImgReloadV2 = () => {
    return {
        provide() {
            return {
                imgFromPage: true,
            };
        },
        data() {
            return {
                lastLoad: true,
            };
        },
        onShow() {
            if (this.lastLoad) {
                this.lastLoad = false;
                return;
            }
            uni.$emit("image_observer_status", "open");
        },
        onHide() {
            uni.$emit("image_observer_status", "close");
        },
    };
};
