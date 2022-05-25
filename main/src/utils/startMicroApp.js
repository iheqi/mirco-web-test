import { leftNav } from '../store';
// import { leftNav, headerState, footerState } from '../store';

import { registerApp } from '../utils/singleSpa';
// import { registerMicroApps, start, creatStore } from '../../micro';


export const starMicroApp = () => {
  registerApp(leftNav.navList,
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
}
