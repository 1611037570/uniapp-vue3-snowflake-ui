<script setup lang="ts">
export type SnowflakeImage = {
  src?: string
  size?: string | number
  width?: string | number
  height?: string | number
  radius?: string | number
  position?: Array<'tl' | 'tr' | 'bl' | 'br'>
}
const emit = defineEmits(['load', 'error', 'show'])
const useSize = computed(() => {
  const toCssLength = (val?: string | number) => (typeof val === 'string' ? val : `${val}px`)
  const width = toCssLength(props.size || props.width)
  const height = toCssLength(props.size || props.height)
  const borderRadius = toCssLength(props.radius)

  return {
    width,
    height,
    borderRadius
  }
})

const props = withDefaults(defineProps<SnowflakeImage>(), {
  src: '',
  position: () => ['tl', 'tr', 'bl', 'br']
})
type Status = 'loading' | 'show'
const status = ref<Status>('loading')
const onShow = (e: Event) => {
  console.log('e', e)
}
const onError = (e: Event) => {
  console.log('e', e)
}
</script>

<template>
  <div :style="[useSize]">
    <template></template>
    <!-- 插槽区 -->
    <slot v-for="item in position" :name="item"></slot>
    <slot name="tr"></slot>
    <slot name="bl"></slot>
    <slot name="bl"></slot>
    <img
      v-if="status === 'show'"
      style="width: 100%; height: 100%"
      @load="onShow"
      @error="onError"
      :src="src"
    />
  </div>
</template>
<style lang="scss" scoped></style>
