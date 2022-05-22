import { performScriptForEval } from './performScript';
// import { SnapShotSandBox } from './snapshotSandBox';
import { ProxySandBox } from './proxySandBox';
// import { performScript, performScriptForEval } from './performScript';

export const sandbox = (app, script) => {
  const proxy = new ProxySandBox();
  if (!app.proxy) {
    app.proxy = proxy;
  }

  window.__MICRO_WEB__ = true;

  const lifeCycle = performScriptForEval(script, app.name, proxy.proxy);
  // const lifeCycle = performScript(script, app.name);

  console.log('lifeCycle', lifeCycle);
  if (checkLiftCycle(lifeCycle)) {
    app.mount = lifeCycle.mount;
    app.unmount = lifeCycle.unmount;
  }
}

function checkLiftCycle(lifeCycle) {
  return lifeCycle.mount && lifeCycle.unmount;
}