/**
 * 表列实用函数
 * author: YiDong Zhuo(snomiao@gmail.com)
 */
import { 求于 } from "./函式";
import { 依次 } from "./函式";
import { 深等断言 } from "./测试";

if (require.main === module) (async () => {
    深等断言('列交')(
        列交([[1, 2, 3], [2, 3, 4]]),
        [2, 3])
    深等断言('表列键交')(
        表列键交([{ a: 1, b: 2 }, { b: 3, c: 4 }]),
        ['b'])
    深等断言('列列翻转')(
        列列翻转([[1, 2], [3, 4]]),
        [[1, 3], [2, 4]])
    深等断言('列列翻转2次')(
        依次(列列翻转, 列列翻转)([[1, 2], [3, 4]]),
        [[1, 2], [3, 4]])
    深等断言('列值种数表')(
        列值种数表([1, 2, 3, 3, 3, 2, '']),
        { 1: 1, 2: 2, 3: 3, '': 1 })
    深等断言('表键映')(
        表键映((k): string => `${k.toString()}${k.toString()}`)({ a: 1, b: 2 }),
        { aa: 1, bb: 2 })
})().then(console.log).catch(console.error)

export interface 表 { [k: string]: an }
export interface 表表 { [k: string]: }
export type 数列 = number[];
export type 列 = any[];
export type 列列 = any[][];
export type 表列 = 表[];
export type 键 = string | number | symbol;
export type 对列 = Iterable<readonly [键, any]>;
export function 表压平(结构: object): object {
    return 求于(结构, 依次(表对列, 列映(([键, 值]) => {
        if (typeof 值 === 'object' && 值.toString() === '[object Object]') {
            return Object.entries(表压平(值))
                .map(([子键, 值]) => [键 + '.' + 子键, 值])
        }
        return [[键, 值]]
    }), 列列平压, 对列表))
}

export function 列交(列列: 列[]) { return 列列.reduce((甲, 乙) => 甲.filter(值 => 乙.includes(值))) }
export function 列值种数表(列: 列) { return 列.reduce((表, 值) => { 表[值] = 表[值] || 0; 表[值]++; return 表 }, {}) }
export function 列列平压(列列: 列列) { return 列列.flat() }
export function 列列翻转(列列: any[][]) { return 列列[0]?.map((_, 序) => 列列.map(列 => 列[序])) }
export function 列反(列: 列) { return 列.reverse() }
export function 列含值否(列: 列) { return (值: any) => 列.includes(值) }
export function 列不含值否(列: 列) { return (值: any) => !列.includes(值) }
export function 列差(前: 列, 后: 列) { return 列筛(值 => !后.includes(值))(前) }
export function 列归(函: (前: any, 后: any) => any, 初值?: any) { return (列: 列) => 列.reduce(函, 初值) }
export function 列并(列列: 列[]) { return [...列列平压(列列)] }
export function 列序映(函: (值: any, 序: number) => any) { return (列: 列) => 列.map((值, 序) => 函(值, 序)) }
export function 列映(函: (值: any) => any) { return (列: 列) => 列.map(值 => 函(值)) }
export function 列筛(函: (键: 键) => boolean = (e) => !!e) { return (列: 列) => 列.filter(函) }
export function 对列表(对列: 对列) { return Object.fromEntries(对列) }
export function 数列生成(数量: number, 偏移 = 0) { return [...Array(数量).keys()].map(值 => 值 + 偏移) }
export function 数列和(数列: 数列) { return 数列.reduce((前, 后) => 前 + 后) }
export function 数列积(数列: 数列) { return 数列.reduce((前, 后) => 前 * 后) }
export function 表值列(表: 表) { return Object.values(表) }
export function 表值映(函: (值: any) => any) { return (表: 表) => 对列表(表对列(表).map(([名称, 位置]) => [名称, 函(位置)])) }
export function 表值筛(函: (值: any) => boolean) { return (表: 表) => 对列表(表对列(表).filter(([, 位置]) => 函(位置))) }
export function 表列填充翻转(表列: 表列) { return 对列表(表列键交(表列).map(键 => [键, 表列.map(表 => 表[键])])) }
export function 表列提取(表列: 表列, 字段列表: string | string[]) { return 对列表(表对列(表列).filter(([k]) => 字段列表.includes(k))) }
export function 表列翻转(表列: 表列) { return 对列表(表列键交(表列).map(键 => [键, 表列.map(表 => 表[键]).filter(e => e !== undefined)])) }
export function 表列键交(表列: 表列) { return 求于(表列, 依次(列映(表键列), 列交)) }
export function 表对列(表: 表) { return Object.entries(表) }
export function 表投影(表: 表, 字段列表: string | string[]) { return 对列表(表对列(表).filter(([k]) => 字段列表.includes(k))) }
export function 表键值反转(表: 表) { return 求于(表, 表键值映(([键, 值]) => [值, 键])) }
export function 表键值映(函: ((键值: [string, any]) => [string, any])) { return (表: 表) => 对列表(表对列(表).map(函)) }
export function 表键值筛(函: (键值: [string, any]) => boolean) { return (表: 表) => 对列表(表对列(表).filter(函)) }
export function 表键列(表: 表) { return Object.keys(表) }
export function 表键映(函: (键: 键) => any) { return (表: 表) => 对列表(表对列(表).map(([名称, 位置]) => [函(名称), 位置])) }
export function 表键筛(函: (键: 键) => boolean) { return (表: 表) => 对列表(表对列(表).filter(([名称]) => 函(名称))) }
// export function 表按键拆解(拆解函数: (键: 键) => boolean, 拆解键名 = '键', 拆解值名 = '值') {
//     return (表: 表) => {
//         const 拆解键列: string[] = Object.keys(表).filter(拆解函数);
//         if (!拆解键列.length) return [表]
//         const 拆解对象 = 表键筛(键 => !拆解函数(键), 表);
//         const 拆解对象列 = 拆解键列.map(拆解键 => ({ ...拆解对象, [拆解键名]: 拆解键, [拆解值名]: 表[拆解键] }));
//         return 拆解对象列;
//     }
// }