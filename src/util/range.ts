export interface RangeProps {
  /** metadata */
  /** 範囲の開始する値(省略した場合は0からになる) */
  start?: number;
  /** 範囲の終了する値(指定した値は含まない) */
  end: number;
}

/**
 * 指定した範囲の数値配列を生成する。
 * endの方が小さい値の場合、空の配列を返す。
 * またstartとendが同じ数値の場合も、空の配列を返す。
 * * @param start - 開始する数値(inclusive)
 * @param end - 終了する数値(exclusive)
 * * @example
 * ```ts
 * const numbers = range(1, 4);
 * console.log(numbers); // [1, 2, 3]
 * ```
 * * @returns `start` から `end - 1` までの数値が入った配列
 */
export const range = ({ start = 0, end }: RangeProps): Array<number> => {
  if (start == end) return [start];
  if (start < end) {
    return Array.from({ length: end - start }, (_, i) => i + start);
  } else {
    return [];
  }
};
