// 执行应用的 js 内容 new Function 篇
export const performScript = (script, appName, global) => {
  window.proxy = global;
  const scriptText =
    `return (window => {
      ${script}
      return window[${appName}]
    })(window.proxy)`;
  return new Function(scriptText)();

  // const performer = new Function(scriptText);
  // return performer.call(global, global);
}

// 执行应用中的 js 内容 eval篇
export const performScriptForEval = (script, appName, global) => {
  // window.proxy = global;

  // const scriptText =
  //   `(window => {
  //     ${script}
  //     return window[${appName}]
  //   })(window.proxy)`;
  // return eval(scriptText);
  const scriptText = `
    (() => () => {
      try {
        ${script}
        return window['${appName}']
      } catch (err) {
        console.error('runScript error:' + err);
      }
    })()
  `
  return (() => eval(scriptText))().call(global, global);
}
