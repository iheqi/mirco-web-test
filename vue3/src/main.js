import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';


function render() {
  createApp(App)
    .use(router)
    .mount('#app');
}

if (!window.singleSpaNavigate) {
  render();
}

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      h(App, {
        props: {}
      })
    }
  },
  handleInstance(instance) {
    instance.use(router);
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;

