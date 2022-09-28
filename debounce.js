// 防抖：动作绑定事件，动作发生后一定时间后触发事件，如果该动作又发生，则重新等待一定事件再触发事件。
function debounce(func, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}
