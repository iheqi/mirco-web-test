import { leftNav } from '../store';
// import { leftNav, headerState, footerState } from '../store';

import { registerMicroApps, start, creatStore } from 'test-micro-web';
// import { registerMicroApps, start, creatStore } from '../../micro';

const store = creatStore();
const storeData = store.getStore();

window.store = store;
store.subscribe((newValue, oldValue) => {
  console.log(newValue, oldValue);
});

store.update({
  ...storeData,
  a: 1
});

export const starMicroApp = () => {
  registerMicroApps(leftNav.navList,
    // 主应用生命周期
    {
      beforeLoad: [
        () => {
          console.log('开始加载 -- ');
        },
      ],
      mounted: [
        () => {
          console.log('加载完成 -- ');
        },
      ],
      destoryed: [
        () => {
          console.log('卸载完成 -- ');
        },
      ],
    });
  start();
}

// export const starMicroApp = () => {
//   // 注册子应用
//   registerMicroApps(
//     leftNav.navList,
//     // 生命周期
//     {
//       beforeLoad: [
//         app => {
//           app.loading.openLoading()
//           // 每次改动，都将头部和底部显示出来，不需要头部和底部的页面需要子应用自己处理
//           headerState.changeHeader(true)
//           footerState.changeFooter(true)
//           console.log('开始加载 -- ', app.name);
//         },
//       ],
//       mounted: [
//         app => {
//           console.log('加载完成 -- ', app.name);
//           setTimeout(() => {
//             app.loading.closeLoading()
//           }, 200)
//         },
//       ],
//       destoryed: [
//         app => {
//           console.log('卸载完成 -- ', app.name);
//         },
//       ],
//     },
//     {

//     }
//   );

//   // 如果当前是跟路由，且没有子应用，默认进入到 vue3
//   if (window.location.pathname === '/') {
//     window.history.pushState(null, null, '/vue3#/index');
//   }

//   // 启动
//   start();
// };
