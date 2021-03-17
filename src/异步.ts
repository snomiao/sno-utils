/**
 * 雪星异步组件
 * Copyright 2019.11 snomiao(snomiao@gmail.com)
 */


// if (require.main === module) {
//     let i = 0
//     await 睡(1000)
//     console.log(i++)
//     await 睡(1000)
//     console.log(i++)
//     await 睡(1000)
//     console.log(i++)
//     await 睡(1000)
// }
export function 睡(毫秒: number) { return new Promise(resolve => setTimeout(resolve, 毫秒)) }


export { }
