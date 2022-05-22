// 获取页面资源
export const fetchResoure = url => fetch(url).then(async res => res.text());
