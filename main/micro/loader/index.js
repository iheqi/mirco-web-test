import { fetchResoure } from '../util/fetchResoure';

export const htmlLoader = async (app) => {
  const { container, entry } = app;
  const html = await parseHtml(entry);

  const ct = document.querySelector(container);
  ct.innerHTML = html;

  return app;
}

export const parseHtml = async (entry) => {
  const html = await fetchResoure(entry);
  // console.log(html);

  const div = document.createElement('div');
  div.innerHTML = html;
  return html;
}

export const parseJs = async () => {
}

