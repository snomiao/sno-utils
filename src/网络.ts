import fetch from 'node-fetch'
export const 文本抓取 = async (url, opt) => (await fetch(url, opt)).text()
export const JSON抓取 = async (url, opt) => (await fetch(url, opt)).json()
