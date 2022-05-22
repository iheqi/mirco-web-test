import { isTurnChild } from '../util/index'

export const turnApp = () => {
  if (isTurnChild()) {
    console.log('路由切换了');
  }
}