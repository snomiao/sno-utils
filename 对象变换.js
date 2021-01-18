"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function 对象对键映射(函数, 对象) {
    return Object.fromEntries(Object.entries(对象).map(([名称, 位置]) => [函数(名称), 位置]));
}
exports.对象对键映射 = 对象对键映射;
function 对象对值映射(函数, 对象) {
    return Object.fromEntries(Object.entries(对象).map(([名称, 位置]) => [名称, 函数(位置)]));
}
exports.对象对值映射 = 对象对值映射;
function 对象键值映射(函数, 对象) {
    return Object.fromEntries(Object.entries(对象).map(函数));
}
exports.对象键值映射 = 对象键值映射;
function 对象对键筛选(函数, 对象) {
    return Object.fromEntries(Object.entries(对象).filter(([名称]) => 函数(名称)));
}
exports.对象对键筛选 = 对象对键筛选;
function 对象对值筛选(函数, 对象) {
    return Object.fromEntries(Object.entries(对象).filter(([, 位置]) => 函数(位置)));
}
exports.对象对值筛选 = 对象对值筛选;
function 对象键值筛选(函数, 对象) {
    return Object.fromEntries(Object.entries(对象).filter(函数));
}
exports.对象键值筛选 = 对象键值筛选;
function 对象键值反转(对象) {
    return Object.fromEntries(Object.entries(对象).map(e => e.reverse()));
}
exports.对象键值反转 = 对象键值反转;
function 对象分散(分散函数, 对象, 分散键名 = '键', 分散值名 = '值') {
    const 分散键列 = Object.keys(对象).filter(分散函数);
    if (!分散键列.length)
        return [对象];
    const 分散对象 = 对象对键筛选(键 => !分散函数(键), 对象);
    const 分散对象列 = 分散键列.map(分散键 => ({ ...分散对象, [分散键名]: 分散键, [分散值名]: 对象[分散键] }));
    return 分散对象列;
}
exports.对象分散 = 对象分散;
