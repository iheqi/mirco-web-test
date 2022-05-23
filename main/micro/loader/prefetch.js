import { parseHtml } from ".";
import { getList } from "../const/subApps";
export const prefetch = async () => {
  const list = getList().filter(item => !window.location.pathname.startsWith(item.activeRule));

  Promise.all(list.map(async app => {
    await parseHtml(app.entry, app);
  }));
}