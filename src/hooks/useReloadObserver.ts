export const useReloadObserver = () => {
    provide("fromPage", true);
    const lastLoad = ref(true);
    onShow(() => {
        if (lastLoad.value) {
            lastLoad.value = false;
            return;
        }

        uni.$emit("observer_status", "open");
    });

    onHide(() => {
        uni.$emit("observer_status", "close");
    });
};
