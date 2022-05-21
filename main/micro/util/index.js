export const patchRouter = (event, ListerName) => {
  return function () {
    // 创建一个自定义事件
    const e = new Event(ListerName);
    // 让event来代替本函数执行
    event.apply(this, arguments);
    // 通过dispatchEvent来触发自定义事件
    window.dispatchEvent(e);
  };
};