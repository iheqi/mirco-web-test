import { fetchResoure } from '../util/fetchResoure';

export const htmlLoader = async (app) => {
  const { container, entry } = app;
  const [dom, allScript] = await parseHtml(entry, app);
  console.log('allScript', allScript);
  const ct = document.querySelector(container);
  ct.innerHTML = dom;

  return app;
}

export const parseHtml = async (entry, app) => {
  const html = await fetchResoure(entry);
  // console.log(html);

  const div = document.createElement('div');
  div.innerHTML = html;

  const [dom, scriptUrls, scripts] = await getResources(div, app);
  console.log(dom, scriptUrls, scripts);

  const fetchedScripts = await Promise.all(scriptUrls.map(url => fetchResoure(url)));
  const allScript = scripts.concat(fetchedScripts);

  // console.log('fetchedScripts', fetchedScripts);
  return [dom, allScript];
}

export const getResources = async (root, app) => {
  const scripts = [];
  const scriptUrls = [];
  const dom = root.outerHTML;

  function deepParse(element) {
    const children = element.children;
    const parent = element.parentNode;

    // 处理位于 link 标签中的 js 文件
    if (element.nodeName.toLowerCase() === 'script') {
      const src = element.getAttribute('src');
      if (!src) {
        // 直接在 script 标签中书写的内容
        let script = element.outerHTML;
        scripts.push(script);
      } else {
        if (src.startsWith('http')) {
          scriptUrls.push(src);
        } else {
          // fetch 时 添加 publicPath
          scriptUrls.push(`http:${app.entry}/${src}`);
        }
      }
      // console.log('parent', parent, element);
      if (parent) { // 为什么要替换掉，而且此时替换后页面还未生效。
        let comment = document.createComment('此 js 文件已被微前端替换');
        // 在 dom 结构中删除此文件引用
        // comment替换掉element？
        parent.replaceChild(comment, element);
      }
    }
    // 处理位于 link 标签中的 js 文件
    if (element.nodeName.toLowerCase() === 'link') {
      const href = element.getAttribute('href');
      if (href.endsWith('.js')) {
        if (href.startsWith('http')) {
          scriptUrls.push(href);
        } else {
          // fetch 时 添加 publicPath
          scriptUrls.push(`http:${app.entry}/${href}`);
        }
      }
    }
    for (let i = 0; i < children.length; i++) {
      deepParse(children[i]);
    }
  }
  deepParse(root);

  return [dom, scriptUrls, scripts];
}

