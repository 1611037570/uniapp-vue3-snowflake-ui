import { DEFAULT_CONFIG } from "../config/default";
import { useSystemStore } from "@/stores";

export const convertSize = (
    options: any
): {
    size: string;
    value: number;
} => {
    let { size, type, followSystemSize } = options;

    const useSysSize = (size: any) => {
        const systemStore = useSystemStore();

        size = parseInt(size);
        if (!followSystemSize) return size;
        return size + (systemStore.sizeLv - 1) * systemStore.sizeRadio;
    };
    size = String(size);
    // 百分比 未开发无法使用
    if (size.includes("%")) {
        return {
            size: size,
            value: 0,
        };
    }
    // rpx
    else if (size.includes("rpx")) {
        size = parseInt(size.slice(0, -3)) / DEFAULT_CONFIG.RPX_RATIO;
        size = useSysSize(size);
        return {
            size: size * DEFAULT_CONFIG.RPX_RATIO + "rpx",
            value: size,
        };
    }
    // px
    else if (size.includes("px")) {
        size = useSysSize(size);
        return {
            size: size + "px",
            value: size,
        };
    }
    // rem
    else if (size.includes("rem")) {
        size = parseInt(size.slice(0, -3)) / DEFAULT_CONFIG.ROOT_FONT_SIZE;
        size = useSysSize(size);
        return {
            size: size + "px",
            value: size,
        };
    }
    // 纯数字
    else {
        size = useSysSize(size);
        return {
            size:
                type === "rpx"
                    ? `${DEFAULT_CONFIG.RPX_RATIO * size}rpx`
                    : `${size}px`,
            value: size,
        };
    }
};
