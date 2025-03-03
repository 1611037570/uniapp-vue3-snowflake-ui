export type SnowflakeImage = {
  src?: string
  size?: string | number
  width?: string | number
  height?: string | number
  pixType?: 'rem' | 'rpx' | 'px' | undefined
  mode?: string
  lazy?: boolean
  ratio?: number
  transition?: boolean
  radius?: string | number
  border?: string
  containerStyle?: any
  containerClass?: string | string[]
  imageStyle?: any
  imageClass?: string | string[]
  followSystemSize?: boolean
}
