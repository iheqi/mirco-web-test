import { getList, setList } from './const/subApps';
import { setMainLifeCycle } from './const/mainLifeCycle';
import { rewriteRouter } from './router/rewriteRouter';
import { currentApp } from './util';

rewriteRouter();

export const registerMicroApps = (appList, lifeCycle) => {
  setList(appList);
  setMainLifeCycle(lifeCycle);
}

export const start = () => {
  const apps = getList();
  if (!apps.length) {
    throw new Error('子路由列表为空，请正确注册');
  }

  const app = currentApp();
  if (app) {
    const { pathname, hash } = window.location;
    const url = pathname + hash;

    window.history.pushState(url, app.name, url || app.activeRule);
  }

  // 将当前子应用做标记
  window.__CURRENT_SUB_APP__ = app.activeRule;
}