
import { getList } from "../const/subApps";
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

// 获取当前应用
export const currentApp = () => {
  const currentRouter = window.location.pathname.match(/(\/\w+)/)[0];

  return filterApp('activeRule', currentRouter);
};

export const filterApp = (key, rule) => {
  const currentApp = getList().filter(app => app[key] === rule);

  return currentApp.length ? currentApp[0] : false;
};

export const isTurnChild = () => {
  if (window.__CURRENT_SUB_APP__ === location.pathname) {
    return false;
  }
  return true;
}