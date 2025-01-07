// 默认双向绑定数据
export const DEFAULT_MODEL = {
    // 正方形宽高 开启后图片为正方形 WIDTH HEIGHT 失效
    SIZE: 0,
    // 自定义宽度
    WIDTH: "100px",
    // 自定义高度
    HEIGHT: "100px",
};

// 默认配置数据
export const DEFAULT_CONFIG = {
    // 图片懒加载阈值（这样写是避免移动端兼容问题）
    THRESHOLDS: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    // 图片懒加载距离
    MARGINS: {
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
    },
};
