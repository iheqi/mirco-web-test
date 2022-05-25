
const createScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    const first = document.getElementsByTagName('script')[0];
    first.parentNode.insertBefore(script, first);
  });
}

const loadApp = async (urls, name) => {
  // await Promise.all(urls.map((url) => createScript(url)));
  await createScript(urls[0]);
  await createScript(urls[1]);
  return window[name];
}

export const navList = [
  // {
  //   name: 'react15',// 唯一
  //   entry: '//localhost:9002/',
  //   loading,
  //   container: '#micro-container',
  //   activeRule: '/react15',
  //   appInfo,
  //   app: () => {},
  //   activeWhen: () => {},
  //   customProps: {},
  // },
  // {
  //   name: 'react16',
  //   entry: '//localhost:9003/',
  //   loading,
  //   container: '#micro-container',
  //   activeRule: '/react16',
  //   appInfo,
  //   app: () => {},
  //   activeWhen: () => {},
  //   customProps: {},
  // },
  // {
  //   name: 'vue2',
  //   entry: '//localhost:9004/',
  //   loading,
  //   container: '#micro-container',
  //   activeRule: '/vue2',
  //   appInfo,
  //   app: () => {},
  //   activeWhen: () => {},
  //   customProps: {},
  // },
  {
    name: 'vue3',
    app: loadApp([ // loadApp需要自己实现，自己加载js。所以single-spa和qiankun相比，少了沙箱隔离等功能
      'http://localhost:9005/static/js/chunk-vendors.js',
      'http://localhost:9005/vue3.js'
    ], 'vue3'),
    activeWhen: (location) => location.pathname.startsWith('/vue3'), 
    customProps: {},
  },
];
