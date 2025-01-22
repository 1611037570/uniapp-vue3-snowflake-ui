<script setup lang="ts">
type VirtualListProps = {
  height: number
  list: any
  maxHeight: number
  containerStyle: any
  containerClass: any
}
const props = withDefaults(defineProps<VirtualListProps>(), {
  height: 1100,
  maxHeight: 300
})
const list = defineModel('list', {
  default: [1, 2, 3, 4]
})

const listProxy = computed(() => {
  return list.value.map((item) => {
    return {
      ...item,
      id: 1
    }
  })
})

const listHeight = computed((): number => {
  return props.height * list.value.length
})

const scroll = (e: any) => {
  const currentScrollTop = e.detail.scrollTop
  console.log('e', currentScrollTop)
}
</script>

<template>
  <view style="flex: 1">
    <scroll-view
      @scroll="scroll"
      :scroll-y="true"
      style="height: 500px; border: 1px solid red; position: relative"
    >
      <view :style="{ paddingTop: listHeight + 'px' }">1</view>
      <view style="position: absolute; top: 0; left: 0">
        <view v-for="item in list" style="">
          <slot>
            {{ item }}
          </slot>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<style lang="scss" scoped></style>
