// export const isArray =

/**
 *  获取指定范围的随机数
 * @param min 最小值
 * @param max 最大值
 */
export const getRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * 生成随机RGB颜色
 * @param alpha 透明度 0-1 之间 默认1
 */
export const getRandomColor = (alpha = 1) => {
    const r = getRandom(0, 255);
    const g = getRandom(0, 255);
    const b = getRandom(0, 255);
    return alpha === 1
        ? `rgb(${r},${g},${b})`
        : `rgba(${r},${g},${b},${alpha})`;
};
