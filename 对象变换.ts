export function 对键映射(函数: (键: string) => boolean, 对象: object) {
    return Object.fromEntries(Object.entries(对象).map(([名称, 位置]) => [函数(名称), 位置]));
}
export function 对值映射(函数: (值: any) => boolean, 对象: object) {
    return Object.fromEntries(Object.entries(对象).map(([名称, 位置]) => [名称, 函数(位置)]));
}
export function 键值映射(
    函数: ((键值: [string, any]) => [string, any]),
    对象: object) {
    return Object.fromEntries(Object.entries(对象).map(函数))
}
export function 对键筛选(函数: (键: string) => boolean, 对象: object) {
    return Object.fromEntries(Object.entries(对象).filter(([名称]) => 函数(名称)));
}
export function 对值筛选(函数: (值: any) => boolean, 对象: object) {
    return Object.fromEntries(Object.entries(对象).filter(([, 位置]) => 函数(位置)));
}
export function 键值筛选(
    函数: (键值: [string, any]) => boolean,
    对象: object) {
    return Object.fromEntries(Object.entries(对象).filter(函数));
}
export function 键值反转(对象: object) {
    return Object.fromEntries(Object.entries(对象).map(e => e.reverse()));
}
export function 分散(分散函数: (键: string) => boolean, 对象: object, 分散键名 = '键', 分散值名 = '值') {
    const 分散键列: string[] = Object.keys(对象).filter(分散函数);
    if (!分散键列.length) return [对象]
    const 分散对象 = 对键筛选(键 => !分散函数(键), 对象);
    const 分散对象列 = 分散键列.map(分散键 => ({ ...分散对象, [分散键名]: 分散键, [分散值名]: 对象[分散键] }));
    return 分散对象列;
}