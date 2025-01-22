// 创建id
export const useId = () => {
  return (
    'snowflake-id' +
    'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, function (c) {
      let r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  )
}
