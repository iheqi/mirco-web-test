// 执行应用的 js 内容 new Function 篇
export const performScript = (script, appName) => {

  const scriptText =
    `try {
      ${script}
      return window['${appName}']
    } catch (err) {
      console.error('runScript error:' + err);
    }`;
  return new Function(scriptText).call(window, window);

  // const performer = new Function(scriptText);
  // return performer.call(global, global);
}

// 执行应用中的 js 内容 eval篇
export const performScriptForEval = (script, appName) => {
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
  return (() => eval(scriptText))().call(window, window);
}
