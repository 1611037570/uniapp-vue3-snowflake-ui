import { errorImgBase64 } from "./error-img";
export const DEFAULT_PROPS = {
    // 懒加载（开启后图片会在进入可视区域后才会加载）
    LAZY: true,
    // 裁切比例（用于腾讯云、阿里云图片倍率）
    RATIO: 2,
    // 像素单位（用于size、width、height未传入单位的默认单位）
    PIX_TYPE: "px",
    // image组件原生属性
    MODE: "aspectFill",
    // 动画过渡（开启后图片加载成功后会有一个过度动画效果）
    TRANSITION: true,
    // 圆角
    RADIUS: 0,
    // 边框
    BORDER: "1px solid #eee",
    // snowflake-image容器绑定的样式
    CONTAINER_STYLE: {},
    // snowflake-image容器绑定的类名
    CONTAINER_CLASS: "",
    // image组件绑定的样式
    IMAGE_STYLE: {},
    // image组件绑定的类名
    IMAGE_CLASS: "",
    // 跟随系统大小（开启后图片会跟随系统大小变化，可以理解为默认尺寸和老年人尺寸）
    FOLLOW_SYSTEM_SIZE: true,
};
// 默认双向绑定数据
export const DEFAULT_MODEL = {
    // 图片地址
    SRC: "",
    // 正方形宽高 开启后图片为正方形 WIDTH HEIGHT 失效
    SIZE: 0,
    // 自定义宽度
    WIDTH: 100,
    // 自定义高度
    HEIGHT: 100,
};
// 默认配置数据
export const DEFAULT_CONFIG = {
    // 图片懒加载阈值（这样写是避免移动端兼容问题）
    THRESHOLDS: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    // 图片懒加载距离
    MARGINS: {
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
    },
    // 根字体大小（用于rem单位）
    ROOT_FONT_SIZE: 16,
    // rpx与px的比例（用于rpx单位）
    RPX_RATIO: 2,
    // 错误时的图片
    ERROR_IMG: errorImgBase64,
    // 自动拼接路径(开启后会自动判断拼接本地路径还是服务器路径，如果和你项目路径不一致，请关闭或自行修改)
    AUTO_PATH: true,
    // 自动拼接路径的路径
    AUTO_PATH_URL: "@/images/",
};
