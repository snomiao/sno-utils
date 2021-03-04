import { 求于 } from "./函式";
import { 续函 } from "./函续"
import { 列值种数表, 表键值映, 表值列, 列映, 数列和 } from "./表列"
import { 表值映, 表列翻转, 表列 } from "./表列";

export function 列熵(列: any[]) {
    const n = 列.length
    return 求于(列, 续函(
        列值种数表, 表键值映(值 => 值),
        表值列, 列映(i => i / n),
        列映(p => - p * Math.log2(p)), 数列和))
}
export function 表列熵表(表列: 表列) { return 表值映(列熵)(表列翻转(表列)); }