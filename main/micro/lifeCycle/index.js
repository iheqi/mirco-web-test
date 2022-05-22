import { findAppByRoute } from '../util';
import { getMainLifeCycle } from '../const/mainLifeCycle';

export const lifeCycle = () => {
  const prevApp = findAppByRoute(window.__ORIGIN_APP__);
  const nextApp = findAppByRoute(window.__CURRENT_SUB_APP__);

  console.log(prevApp, nextApp);

  if (!nextApp) {
    return
  }

  if (prevApp) {
    // 卸载上一个应用
    unmount(prevApp);
  }

  if (nextApp) {
    // 挂载新应用
    mount(nextApp);
  }
}

// 挂载
export const mount = async (app) => {
  app && app.mount && await app.mount(app);

  await runMainLifeCycle('mounted', app)
}

// 卸载
export const unmount = async (app) => {
  app && app.unmount && await app.unmount(app); // 执行子应用的unmount

  await runMainLifeCycle('destoryed', app)
}

// 执行主应用生命周期
export const runMainLifeCycle = async (type, app) => {
  const mainLife = getMainLifeCycle();

  // 因为主应用里配置的生命周期是一个数组，所以需要执行数组中的所有内容
  await Promise.all(mainLife[type].map(item => item(app)));
}