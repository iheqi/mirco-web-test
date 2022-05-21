import { setList } from './const/subApps';
import { rewriteRouter } from './router/rewriteRouter';

rewriteRouter();

export const registerMicroApps = (appList) => {
  setList(appList);
}