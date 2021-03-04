/**
 * 雪星异步组件
 * Copyright 2019.11 snomiao(snomiao@gmail.com)
 */

import { 瞄于 } from "./测试"

/*
singleCoroutineMap
        0123456789...
event1  =
event2   ==
event3     ===
event4        ====
                  Done

twoCoroutineMap
        0123456789...
event1  =
event2  ==
event3   ===
event4    ====
              Done

etc
*/
// if (require.main === module) (async () => {
//     return typeof Promise.resolve()
//     // return await Promise.race([false, 睡(1000)].filter())
//     const 报数2 = (async (x: number) => {
//         console.log(+new Date(), x * 2)
//         await 睡(1000)
//         return x * 2
//     })
//     // console.log(await 异步映(报数2, { 并发数: 0 })([1, 2, 3, 4, 5, 6]))
//     console.log(await 异步映(报数2, { 并发数: 1 })([1, 2, 3, 4, 5, 6]))
//     console.log(await 异步映(报数2, { 并发数: 2 })([1, 2, 3, 4, 5, 6]))
//     console.log(await 异步映(报数2, { 并发数: 3 })([1, 2, 3, 4, 5, 6]))
//     console.log(await 异步映(报数2)([1, 2, 3, 4, 5, 6]))
// })().then(console.log).catch(console.error)
type 列 = any[]
export function 睡(毫秒: number) { return new Promise(resolve => setTimeout(resolve, 毫秒)) }

function 异步映<入型, 出型>(函: (值: 入型, 序: number, 列: 入型[]) => Promise<出型>, 参数 = { 并发数: +Infinity }) {
    return async (列: 入型[]): Promise<出型[]> => {
        let 并发数 = 参数.并发数
        type Reduce出型 = Promise<(出型 | Promise<出型>)[]>
        const 返列 = []
        for (let 序 = 0; 序 < 列.length; 序++) {
            const 值 = 列[序];
            if (!并发数) await Promise.race(await 返列)
            并发数--
            // 返列[序] =await 函()
            返列[序] = 函(值, 序, 列).finally(() => 并发数++)
        }
        return Promise.all(返列)
    }
}
