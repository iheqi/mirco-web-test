import { performScriptForEval } from './performScript';
// import { performScript, performScriptForEval } from './performScript';

export const sandbox = (app, script) => {
  window.__MICRO_WEB__ = true;

  const lifeCycle = performScriptForEval(script, app.name);
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