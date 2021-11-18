/**
 * Copyright 2019-2021 snomiao(snomiao@gmail.com)
 */
export type 表 = { [k: string]: 值 };
export type 表表 = { [k: string]: 表 };
export type 数列 = number[];
export type 列 = any[];
export type 列列 = any[][];
export type 表列 = 表[];
export type 键 = string | number | symbol;
export type 值 = any;
export type 对列 = Iterable<readonly [键, any]>;
export type 函 = () => any;
export type 映函 = (值: 值, 序?: number, 列?: 列) => any;
export type 筛函 = (值: 值, 序?: number, 列?: 列) => boolean;
export type 归函 = (原: 值, 值: 值, 序?: number, 列?: 列) => any;
