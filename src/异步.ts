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
if (require.main === module) (async () => {
    return typeof Promise.resolve()
    // return await Promise.race([false, 睡(1000)].filter())

    const 报数2 = (async (x: number) => {
        console.log(+new Date(), x * 2)
        await 睡(1000)
        return x * 2
    })
    // console.log(await 异步映(报数2, { 并发数: 0 })([1, 2, 3, 4, 5, 6]))
    console.log(await 异步映(报数2, { 并发数: 1 })([1, 2, 3, 4, 5, 6]))
    console.log(await 异步映(报数2, { 并发数: 2 })([1, 2, 3, 4, 5, 6]))
    console.log(await 异步映(报数2, { 并发数: 3 })([1, 2, 3, 4, 5, 6]))
    console.log(await 异步映(报数2)([1, 2, 3, 4, 5, 6]))
})().then(console.log).catch(console.error)
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
        // for (const 列 in 列) {
        //     if (Object.prototype.hasOwnProperty.call(object, key)) {
        //         const element = object[key];

        //     }
        // }


        // const re = await 列.reduce(async (前: Reduce出型, 后: 入型, 序): Reduce出型 => {
        //     瞄于('并发数')(并发数)
        //     if (!并发数) await Promise.race(await 前).then(())
        //     并发数--
        //     const 返值 = await 函(后, 序, 列).finally(() => 并发数++)
        //     return [...(await 前), 返值]
        //     // const 函Promise = 函(后, 序, 列).finally(() => 并发数++)
        //     // if (瞄于('并发数')(并发数)) {
        //     //     const 返值 = Promise.resolve(函Promise)
        //     //     return [...(await 前), 返值]
        //     // } else {
        //     // }
        // }, Promise.resolve([]))
        // return await Promise.all(re)
    }
}
// exports.异步映射 = async function (func, array, 协程数 = 1) {
//     if (typeof (func) !== "function") throw new Error("param func is not a function")
//     // console.debug(协程数)
//     var results = Array(array.length)
//     var running = 0
//     for (let index = 0; index < array.length; index++) {
//         while (running >= 协程数)
//             await sleep(1)
//         running++;
//         var promise = func(array[index])
//         if (!promise) throw new Error("param func is not a promise")
//         promise.then(result => {
//             results[index] = result
//             running--;
//         })
//     }
//     while (running != 0)
//         await sleep(1)
//     return results
// }
// exports.生成并发控制器 = (最高并发) => {
//     var 并发控制器 = function (fn) {
//         return (...args) => {
//             return new Promise(resolve => {
//                 (async () => {
//                     while (并发控制器.当前并发 >= 并发控制器.最高并发)
//                         await sleep(0)
//                     并发控制器.当前并发++
//                     fn(...args).then(ret => (resolve(ret), 并发控制器.当前并发--))
//                 })()
//             })
//         }
//     }
//     并发控制器.当前并发 = 0
//     并发控制器.最高并发 = 最高并发
//     return 并发控制器
// }

// exports.限制并发2 = (fn, 最高并发) => {
//     var 当前并发 = 0
//     return (...args) => {
//         return new Promise(resolve => {
//             (async () => {
//                 while (当前并发 >= 最高并发)
//                     await sleep(1)
//                 当前并发++
//                 fn(...args).then((ret) => (resolve(ret), 当前并发--))
//             })()
//         })
//     }
// }
// exports.限制并发 = (fn, 最高并发) => {
//     var 当前并发 = 0
//     return async (...参数) => {
//         while (当前并发 >= 最高并发)
//             await sleep(1)
//         当前并发++
//         let ret = await fn(...参数)
//         当前并发--
//         return ret
//     }
// }

// if (module.parent) return; /////////////////////////////////////////////////

// var test异步映射 = async () => {
//     var arr = [1, 2, 3, 4]
//     var fun = async seconds => {
//         console.log(+new Date() / 1000, seconds, "start");
//         await sleep(seconds * 1000);
//         console.log(+new Date() / 1000, seconds, "end");
//         // console.log(seconds * 1000);
//         return seconds * 1000;
//     }
//     var 协程数 = 2
//     var result = await this.异步映射(fun, arr, 协程数)
//     console.log(result)
//     console.log("done")
// }
// var test并发控制器 = async () => {
//     var flow = []
//     var showFlow = async (ms, tag) => {
//         var len = flow.length
//         flow[len] = "X"
//         console.log(+new Date() + "ms", flow.join(""), "\t#" + tag, ms, "start")
//         await sleep(ms);
//         console.log(+new Date() + "ms", flow.join(""), "\t#" + tag, ms, "end")
//         flow[len] = " "
//         return ms;
//     }
//     var tstart = +new Date()
//     var 协程数 = 2
//     var 并发控制器 = this.生成并发控制器(协程数)
//     var 限制了并发的函数fn1 = 并发控制器(showFlow)
//     var 限制了并发的函数fn2 = 并发控制器(showFlow)
//     var result = await Promise.all([
//         限制了并发的函数fn1(42, "0"),
//         限制了并发的函数fn2(12, "1"),
//         限制了并发的函数fn1(15, "2"),
//         限制了并发的函数fn1(43, "3"),
//         限制了并发的函数fn2(21, "4"),
//         限制了并发的函数fn1(13, "5"),
//         限制了并发的函数fn2(46, "6")
//     ])
//     console.log(result)
//     console.log("done with ", +new Date() - tstart, "ms")
// }
// var test限制并发 = async () => {
//     var flow = []
//     var showFlow = async (ms, tag) => {
//         var len = flow.length
//         flow[len] = "X"
//         console.log(+new Date() + "ms", flow.join(""), "\t#" + tag, ms, "start")
//         await sleep(ms);
//         console.log(+new Date() + "ms", flow.join(""), "\t#" + tag, ms, "end")
//         flow[len] = " "
//         return ms;
//     }
//     var tstart = +new Date()
//     var 协程数 = 2
//     var 限制了并发的函数fn1 = this.限制并发(showFlow, 协程数)
//     var result = await Promise.all([
//         限制了并发的函数fn1(42, "0"),
//         限制了并发的函数fn1(15, "2"),
//         限制了并发的函数fn1(43, "3"),
//         限制了并发的函数fn1(13, "5"),
//     ])
//     console.log(result)
//     console.log("done with ", +new Date() - tstart, "ms")
// }

// test限制并发();
// test并发控制器();
// test异步映射();
