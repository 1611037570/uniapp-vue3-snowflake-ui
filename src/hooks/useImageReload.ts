export const useImageReload = () => {
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
