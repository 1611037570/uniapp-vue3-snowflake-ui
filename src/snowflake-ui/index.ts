export const snowflakeResolver = (): any => {
  return {
    type: 'component',
    resolve: (name: any) => {
      if (name.startsWith('Sf')) {
        const currentName = name.slice(2).charAt(0).toLowerCase() + name.slice(2).slice(1)
        return {
          name: currentName,
          from: '@/snowflake-ui/' + currentName + '/' + currentName + '.vue'
        }
      }
    }
  }
}
