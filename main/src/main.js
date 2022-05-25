import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// 注册、加载、启动子应用
import { leftNav } from './store';
import { registerMicroApps, start } from 'qiankun';

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

createApp(App).use(router()).mount('#micro_web_main_app');
