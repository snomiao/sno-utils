/**
 * imports...
 * author: YiDong Zhuo(snomiao@gmail.com)
 */
// export import mdwa = require('./函式');
// // export import m = require('./测试');
// // export import m = require('./统计');
// // export import m = require('./表列');

export * from './函式';
export * from './函续';
export * from './测试';
export * from './文件';
export * from './统计';
export * from './表列';
export * from './异步';
export * from './统计';

if (require.main === module) (async () => {
    console.log('你好, 世界');
})().then(console.log).catch(console.error)