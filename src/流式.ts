import stream from 'stream';
import parallel from 'parallel-stream';
export const 空写流母 = () => 写流母(() => null)
export const 并映流母 = (变换函数: (入表: any) => Promise<any> | any, 选项 = { concurrency: 16 }): stream.Duplex =>
    new parallel.transform(async (入表: any, encode: any, callback: (arg0: any, arg1: any) => any) =>
        callback(null, await 变换函数(入表)), { objectMode: true, ...选项 })
export const 并写流母 = (写入函数: (入表: any) => Promise<void | any>, 选项 = { concurrency: 16 }): stream.Writable =>
    new parallel.writable(async (入表: any, encode: any, callback: (arg0: any, arg1: any) => any) =>
        callback(null, await 写入函数(入表)), { objectMode: true, ...选项 })
export const 映流母 = (变换函数: (入表: any) => Promise<any> | any) =>
    new stream.Transform({ objectMode: true, transform: async (入表, encode, callback) => callback(null, await 变换函数(入表)) })
export const 筛流母 = (过滤函数: (入表: any) => Promise<boolean> | boolean) =>
    new stream.Transform({ objectMode: true, transform: async (入表, encode, callback) => await 过滤函数(入表) && callback(null, 入表) })
export const 写流母 = (写入函数: (入表: any) => Promise<void | any>) =>
    new stream.Writable({ objectMode: true, write: async (入表, encode, callback) => (await 写入函数(入表), callback(null)) })
export const 列拆流母 = () =>
    new stream.Transform({ objectMode: true, transform: async (入列, encode, callback) => 入列.map((元素: any) => callback(null, 元素)) })

