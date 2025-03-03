import { DEFAULT_CONFIG } from '../config/default'
import { useSystemStore } from '@/stores'
type Options = {
  size: string | number
  type?: 'px' | 'rem' | 'rpx'
  followSystemSize?: boolean
}
export const convertSize = (options: Options): any => {
  let { size, type = 'px', followSystemSize } = options

  size = String(size)
  // 匹配数值和单位
  const unitMatch = size.match(/(\d+)(r?px|rem)?/)
  // 数值
  const numValue = parseFloat(unitMatch ? unitMatch[1] : size)
  // 单位
  let unitValue = unitMatch?.[2] || type
  const systemStore = useSystemStore()

  // 单位转换率
  const unitRatio: any =
    {
      rpx: DEFAULT_CONFIG.RPX_RATIO,
      rem: DEFAULT_CONFIG.ROOT_FONT_SIZE
    }[unitValue] || 1

  const baseValue = unitValue === 'rpx' ? numValue / unitRatio : numValue

  const processedSize = followSystemSize
    ? baseValue +
      ((systemStore.sizeLv - 1) * systemStore.sizeRadio) / (unitValue === 'rem' ? unitRatio : 1)
    : baseValue

  let res = {
    size: processedSize * unitRatio + `${unitValue === 'rem' ? 'px' : unitValue}`,
    value: processedSize
  }
  return res
}
