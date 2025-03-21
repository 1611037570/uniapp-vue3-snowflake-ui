<script setup lang="ts">
import type { SnowflakeImage } from './types'
import { DEFAULT_CONFIG, DEFAULT_MODEL, DEFAULT_PROPS } from './config/default'
import { convertSize } from './utils/index'
import { useId } from '@/hooks'

import { useSystemStore } from '@/stores'
const systemStore = useSystemStore()
const { proxy }: any = getCurrentInstance()
defineOptions({
  name: 'snowflake-image'
})

/** emits事件 */
const emit = defineEmits(['click', 'load', 'error'])

/** props数据 */
const props = withDefaults(defineProps<SnowflakeImage>(), {
  pixType: DEFAULT_PROPS.PIX_TYPE,
  mode: DEFAULT_PROPS.MODE,
  transition: DEFAULT_PROPS.TRANSITION,
  radius: DEFAULT_PROPS.RADIUS,
  ratio: DEFAULT_PROPS.RATIO,
  border: DEFAULT_PROPS.BORDER,
  lazy: DEFAULT_PROPS.LAZY,
  containerClass: DEFAULT_PROPS.CONTAINER_CLASS,
  containerStyle: DEFAULT_PROPS.CONTAINER_STYLE,
  imageClass: DEFAULT_PROPS.IMAGE_CLASS,
  imageStyle: DEFAULT_PROPS.IMAGE_STYLE,
  followSystemSize: DEFAULT_PROPS.FOLLOW_SYSTEM_SIZE
})
/** 双向绑定数据 */
// 图片资源地址
const src = defineModel('src', {
  default: DEFAULT_MODEL.SRC
})
// 图片正方形大小
const size = defineModel<number | string>('size', {
  default: DEFAULT_MODEL.SIZE
})
// 图片宽度
const width = defineModel<number | string>('width', {
  default: DEFAULT_MODEL.WIDTH
})
// 图片高度
const height = defineModel<number | string>('height', {
  default: DEFAULT_MODEL.HEIGHT
})
/** 内部数据 */
// 图片是否来自页面
const fromPage: boolean | null = inject('fromPage', null)
// 图片id
const snowflakeID: string = useId()
// 图片是否显示
const show = ref<boolean>(!props.lazy)

// 图片监听
const observer = ref<any>()
// 图片状态
const status = ref<string>('load')

const imageConfig: Record<string, any> = ref({
  // 过渡状态
  transition: false,
  // 当前src
  src: '',
  // 旧的src 用于判断是否需要重新加载
  oldSrc: ''
})

const statusConfig: Record<string, any> = {
  error: {
    style: { backgroundImage: `url("${DEFAULT_CONFIG.ERROR_IMG}")` },
    class: 'snowflake-image-error'
  },
  load: {
    style: {},
    class: 'snowflake-image-loading'
  },
  success: {
    style: {},
    class: ''
  }
}
/** 计算属性 */
// 图片状态类名
const useStatusStyle = computed(() => statusConfig[status.value].style)
// 图片状态样式
const useStatusClass = computed(() => statusConfig[status.value].class)

// 过渡类名
const useTransition = computed(() => {
  return imageConfig.value.transition ? 'snowflake-image-transition' : ''
})

// 图片所使用的宽度
const useWidth = computed(() => {
  return useConvertSize(size.value || width.value)
})
// 图片所使用的高度
const useHeight = computed(() => {
  return useConvertSize(size.value || height.value)
})

const currentImageStyle = computed(() => {
  return {
    width: useWidth.value.size,
    height: useHeight.value.size,
    borderRadius: useConvertSize(props.radius).size
  }
})
// 容器样式
const useContainerStyle = computed(() => {
  return {
    ...currentImageStyle.value,
    border: status.value === 'success' ? '' : props.border
  }
})
// 图片样式
const useImageStyle = computed(() => {
  return {
    ...currentImageStyle.value,
    border: props.border,
    display: status.value === 'success' ? 'block' : 'none'
  }
})
/** 内部方法 */
// 转换尺寸
const useConvertSize = (size: number | string) => {
  return convertSize({
    size,
    type: props.pixType,
    followSystemSize: props.followSystemSize
  })
}
const cropSrc = () => {
  const convertType = (src: string) => {
    if (src.indexOf('.myqcloud.com')) {
      return 'tx'
    }
    if (src.indexOf('.aliyuncs.com')) {
      return 'ali'
    }
    return false
  }
  const type = convertType(src.value)
  if (!type) return src.value

  const w = useWidth.value.value * props.ratio
  const h = useHeight.value.value * props.ratio

  const path = src.value.split('?')[0]
  if (path === imageConfig.value.oldSrc) {
    return imageConfig.value.oldSrc
  }
  imageConfig.value.oldSrc = path
  return type === 'tx'
    ? `${path}?imageMogr2/crop/${w}x${h}/gravity/center`
    : `${path}?x-oss-process=image/resize,w_${w},h_${h}`
}
// 点击事件
const handleClick = (event: any) => {
  if (status.value === 'error') {
    console.log('error')
    return
  }
  emit('click', event)
}
// 错误事件
const handleError = () => {
  status.value = 'error'
  emit('error')
}
// 加载事件
const handleLoad = () => {
  status.value = 'success'
  emit('load')
  // 未使用过渡动画无需操作
  if (!props.transition) return
  // 开启过渡
  setTimeout(() => {
    imageConfig.value.transition = true
  }, 50)
}
// 懒加载
const openLazyLoad = () => {
  setTimeout(() => {
    const options = {
      thresholds: DEFAULT_CONFIG.THRESHOLDS
    }
    // #ifdef MP-WEIXIN
    observer.value = proxy.createIntersectionObserver(options)
    // #endif
    // #ifndef MP-WEIXIN
    observer.value = uni.createIntersectionObserver(this, options)
    // #endif

    observer.value
      .relativeToViewport(DEFAULT_CONFIG.MARGINS)
      .observe('#' + snowflakeID, (res: any) => {
        if (res.intersectionRatio > 0) {
          openImage()
          closeEmit()
          closeObserver()
        }
      })
  }, 0)
}
// n-vue图片懒加载
const nVueLazyLoad = () => {
  // 非懒加载无需操作
  if (!props.lazy) return
  if (show.value) return
  openImage()
}
// 卸载监听器
const closeObserver = () => {
  observer.value && observer.value.disconnect()
}
// 开启监听器事件
const openEmit = () => {
  if (!fromPage) return
  uni.$on('observer_status', (type) => {
    if (show.value) return
    if (type === 'open') {
      openLazyLoad()
    } else if (type === 'close') {
      closeObserver()
    }
  })
}
// 卸载监听器事件
const closeEmit = () => {
  if (!fromPage) return
  uni.$off('observer_status')
}
// 开启图片
const openImage = () => {
  if (!src.value) {
    handleError()
    return
  }
  if (src.value.startsWith('http')) {
    imageConfig.value.src = cropSrc()
  } else if (!DEFAULT_CONFIG.AUTO_PATH) {
    imageConfig.value.src = src.value
  } else if (src.value.startsWith('.') || src.value.startsWith('@')) {
    imageConfig.value.src = DEFAULT_CONFIG.AUTO_PATH_URL + src.value
  } else {
    imageConfig.value.src = systemStore.imgServerUrl + src.value
  }

  show.value = true
}
// 关闭图片
const closeImage = () => {
  show.value = false
}

/** 监听 */
watch(
  src,
  () => {
    // 未显示无需操作
    if (!show.value) return
    // 重置状态
    status.value = 'load'
    // 关闭图片显示
    closeImage()
    // 开启图片显示
    setTimeout(() => {
      openImage()
    }, 1)
  },
  { immediate: true }
)

onMounted(() => {
  if (props.lazy) {
    // #ifndef APP-NVUE
    // 非nvue平台开启懒加载
    openEmit()
    openLazyLoad()
    // #endif
  } else {
    openImage()
  }
})
onBeforeUnmount(() => {
  closeEmit()
  closeObserver()
})

defineExpose({
  id: snowflakeID,
  width: useWidth.value.value,
  height: useHeight.value.value
})
</script>

<template>
  <view
    class="snowflake-image-container"
    :id="snowflakeID"
    :key="snowflakeID"
    :style="[containerStyle, useContainerStyle, useStatusStyle]"
    :class="[containerClass, useStatusClass]"
    @tap.stop="handleClick"
    @appear="nVueLazyLoad"
  >
    <image
      class="snowflake-image"
      v-if="show"
      :mode="mode"
      :style="[useImageStyle]"
      :class="[useTransition, imageClass]"
      :src="imageConfig.src"
      @load="handleLoad"
      @error="handleError"
    />
  </view>
</template>

<style scoped>
@import './style.css';
</style>
