
export function 求于<入型, 出型>(值: 入型, 函: (入: 入型) => 出型): 出型 { return 函(值) }
export type 函段<入, 出> = (入: 入) => 出;
export function 依次<入, 出>(f1: 函段<入, 出>): 函段<入, 出>
export function 依次<入, T1, 出>(f1: 函段<入, T1>, f2: 函段<T1, 出>): 函段<入, 出>
export function 依次<入, T1, T2, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, T18>, f19: 函段<T18, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, T18>, f19: 函段<T18, T19>, f20: 函段<T19, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, T18>, f19: 函段<T18, T19>, f20: 函段<T19, T20>, f21: 函段<T20, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, T18>, f19: 函段<T18, T19>, f20: 函段<T19, T20>, f21: 函段<T20, T21>, f22: 函段<T21, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, T18>, f19: 函段<T18, T19>, f20: 函段<T19, T20>, f21: 函段<T20, T21>, f22: 函段<T21, T22>, f23: 函段<T22, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, T18>, f19: 函段<T18, T19>, f20: 函段<T19, T20>, f21: 函段<T20, T21>, f22: 函段<T21, T22>, f23: 函段<T22, T23>, f24: 函段<T23, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, T18>, f19: 函段<T18, T19>, f20: 函段<T19, T20>, f21: 函段<T20, T21>, f22: 函段<T21, T22>, f23: 函段<T22, T23>, f24: 函段<T23, T24>, f25: 函段<T24, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, T18>, f19: 函段<T18, T19>, f20: 函段<T19, T20>, f21: 函段<T20, T21>, f22: 函段<T21, T22>, f23: 函段<T22, T23>, f24: 函段<T23, T24>, f25: 函段<T24, T25>, f26: 函段<T25, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, T18>, f19: 函段<T18, T19>, f20: 函段<T19, T20>, f21: 函段<T20, T21>, f22: 函段<T21, T22>, f23: 函段<T22, T23>, f24: 函段<T23, T24>, f25: 函段<T24, T25>, f26: 函段<T25, T26>, f27: 函段<T26, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, T18>, f19: 函段<T18, T19>, f20: 函段<T19, T20>, f21: 函段<T20, T21>, f22: 函段<T21, T22>, f23: 函段<T22, T23>, f24: 函段<T23, T24>, f25: 函段<T24, T25>, f26: 函段<T25, T26>, f27: 函段<T26, T27>, f28: 函段<T27, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, T18>, f19: 函段<T18, T19>, f20: 函段<T19, T20>, f21: 函段<T20, T21>, f22: 函段<T21, T22>, f23: 函段<T22, T23>, f24: 函段<T23, T24>, f25: 函段<T24, T25>, f26: 函段<T25, T26>, f27: 函段<T26, T27>, f28: 函段<T27, T28>, f29: 函段<T28, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, T18>, f19: 函段<T18, T19>, f20: 函段<T19, T20>, f21: 函段<T20, T21>, f22: 函段<T21, T22>, f23: 函段<T22, T23>, f24: 函段<T23, T24>, f25: 函段<T24, T25>, f26: 函段<T25, T26>, f27: 函段<T26, T27>, f28: 函段<T27, T28>, f29: 函段<T28, T29>, f30: 函段<T29, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, T18>, f19: 函段<T18, T19>, f20: 函段<T19, T20>, f21: 函段<T20, T21>, f22: 函段<T21, T22>, f23: 函段<T22, T23>, f24: 函段<T23, T24>, f25: 函段<T24, T25>, f26: 函段<T25, T26>, f27: 函段<T26, T27>, f28: 函段<T27, T28>, f29: 函段<T28, T29>, f30: 函段<T29, T30>, f31: 函段<T30, 出>): 函段<入, 出>
export function 依次<入, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16, T17, T18, T19, T20, T21, T22, T23, T24, T25, T26, T27, T28, T29, T30, T31, 出>(f1: 函段<入, T1>, f2: 函段<T1, T2>, f3: 函段<T2, T3>, f4: 函段<T3, T4>, f5: 函段<T4, T5>, f6: 函段<T5, T6>, f7: 函段<T6, T7>, f8: 函段<T7, T8>, f9: 函段<T8, T9>, f10: 函段<T9, T10>, f11: 函段<T10, T11>, f12: 函段<T11, T12>, f13: 函段<T12, T13>, f14: 函段<T13, T14>, f15: 函段<T14, T15>, f16: 函段<T15, T16>, f17: 函段<T16, T17>, f18: 函段<T17, T18>, f19: 函段<T18, T19>, f20: 函段<T19, T20>, f21: 函段<T20, T21>, f22: 函段<T21, T22>, f23: 函段<T22, T23>, f24: 函段<T23, T24>, f25: 函段<T24, T25>, f26: 函段<T25, T26>, f27: 函段<T26, T27>, f28: 函段<T27, T28>, f29: 函段<T28, T29>, f30: 函段<T29, T30>, f31: 函段<T30, T31>, f32: 函段<T31, 出>): 函段<入, 出>
export function 依次<入, 出>(...函段: 函段<any, any>[]): 函段<入, 出> {
    return _依次(...函段)
}

export function _依次<T, R>(...函续: 函段<any, any>[]): 函段<T, R> {
    return (入: T) => 函续.reduce((值, 函) => 函(值), 入 as any)
}
export function 续函<入, 出>(...函段: 函段<any, any>[]): 函段<入, 出> {
    return _依次(...函段)
}