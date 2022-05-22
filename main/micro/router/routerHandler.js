import { isTurnChild } from '../util/index';
import { lifeCycle } from '../lifeCycle/index';

export const turnApp = async () => {
  if (isTurnChild()) {
    lifeCycle();
  }
}