import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { setMain } from './utils/global';

let instance = null;

function render() {
  instance = createApp(App);
  instance
    .use(router)
    .mount('#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
export async function bootstrap() {
  console.log('vue3.0 app bootstrap');
}

export async function mount(props) {
  setMain(props);
  console.log('vue3.0 app mount', props);
  // https://qiankun.umijs.org/zh/api#initglobalstatestate
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('onGlobalStateChange', state, prev);
  });
  setTimeout(() => {
    props.setGlobalState({
      a: 2,
      b: 3
    });
    // props.setGlobalState({ // state has not changed！
    //   c: 1,
    // });

  }, 2000);
  render();
}

export async function unmount(ctx) {
  instance.unmount();
  instance = null;
  const { container } = ctx
  if (container) {
    container.innerHTML = '';
  }
  console.log('vue3.0 app unmount');
}
