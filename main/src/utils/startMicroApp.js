import { leftNav } from '../store';

import { registerMicroApps, start, initGlobalState } from 'qiankun';

initGlobalState({
  a: 1,
  b: 2
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