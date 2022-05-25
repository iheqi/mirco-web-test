import React from 'react'
import ReactDOM from 'react-dom'
import BasicMap from './src/router/index.jsx';
import "./index.scss"
import { setMain } from './src/utils/global'

const render = () => {
  ReactDOM.render((
    <BasicMap />
  ), document.getElementById('app-react'))
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('react15 bootstrap')
}

export async function mount(app) {
  window.a = 1; // test snapshot
  setMain(app) // 记录主应用传过来的方法
  console.log('react15 mount');
  render();
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container);
}
