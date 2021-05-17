/**
 * @description 防抖函数
 * @param {Function} func 需要包装的函数
 * @param {Number} delay 延迟时间，单位ms
 * @param {Boolean} immediate 是否立即执行
 * @returns {Function}
 */
export const debounce = (
  func: Function,
  delay = 300,
  immediate = true
): Function => {
  let timeout: null | ReturnType<typeof setTimeout> = null
  let args: any
  let context: any
  let timestamp: number
  let result: Function
  const later = () => {
    // 当前的时间戳与上一个时间戳做对比
    const left = Date.now() - timestamp
    // 如果当前时间间隔小于设置的延迟时间且大于0就重置定时器
    if (left < delay && left > 0) {
      timeout = setTimeout(later, delay - left)
    } else {
      // 清除定时器，执行回调
      timeout = null
      if (!immediate) {
        console.log(this)
        result = func.apply(context, args)
        if (!timeout) {
          context = null
          args = null
        }
      }
    }
  }
  return function () {
    args = arguments
    // 获得时间戳
    timestamp = Date.now()
    // 如果定时器不存在且立即执行函数
    var callNow = immediate && !timeout
    // 如果定时器不存在就创建一个
    if (!timeout) timeout = setTimeout(later, delay)
    console.log(context)
    if (callNow) {
      // 如果需要立即执行函数的话 通过 apply 执行
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}
