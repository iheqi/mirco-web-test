import { performScriptForEval } from './performScript';
import { SnapShotSandBox } from './snapshotSandBox';
// import { performScript, performScriptForEval } from './performScript';

export const sandbox = (app, script) => {
  const proxy = new SnapShotSandBox();
  if (!app.proxy) {
    app.proxy = proxy;
  }

  window.__MICRO_WEB__ = true;

  const lifeCycle = performScriptForEval(script, app.name, app.proxy.proxy);
  // const lifeCycle = performScript(script, app.name);

  // console.log('lifeCycle', app, lifeCycle);
  if (checkLiftCycle(lifeCycle)) {
    app.mount = lifeCycle.mount;
    app.unmount = lifeCycle.unmount;
  }
}

function checkLiftCycle(lifeCycle) {
  return lifeCycle.mount && lifeCycle.unmount;
}