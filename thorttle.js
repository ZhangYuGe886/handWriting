// 节流：动作绑定事件，动作发生后一段时间后触发事件，在这段时间内，如果动作又发生，则无视该动作，直到事件执行完后，才能重新触发。
// 基于时间戳实现
function thorttle(func, delay) {
  let startTime = Date.now()
  return function (...args) {
    let lastTime = Date.now()
    if (lastTime - startTime > delay) {
      func.apply(this,args)
      startTime = Date.now()
    }
  }
}
