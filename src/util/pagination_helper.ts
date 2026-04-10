import type { Page } from "astro";
import { range } from "./range";
import { getLinkUrl } from "./contents";

export interface PaginationPage {
  label: string;
  url: string | undefined;
  isActive: boolean;
}

// 省略記号扱いする値（マジックナンバー）
const ELLIPSE = -1;
const ELLIPSE_STRING = "...";


// 注意：Page<any>のデータが現在ページが最初のページならfirst: undefined, それ以外ならfirst: baseUrlであることを前提とした処理になっている

export const makePaginationLink = (
  { page, num = 5 }: { page: Page<any>; num?: number },
): PaginationPage[] => {
  // 最初と最後のページは特別扱いするので範囲に含まない
  const startPage = 2;
  const lastPage = page.lastPage - 1;

  // ページネーションが存在しない場合（1ページで住む場合）空の配列を返す
  if (page.total <= page.size) return [];

  // 配列の最初と最後のページを計算する（最初と最後は除く）
  let from = Math.max(startPage, page.currentPage - Math.floor(num / 2));
  let to = Math.min(lastPage, from + num - 1);
  // 要素数がnumに満たない場合、開始位置をずらす
  if (to - from < num) {
    from = Math.max(startPage, to - num + 1);
  }
  // 表示範囲のページ番号の配列を作成
  const pages = range({ start: from, end: to });
  // 先頭がstartを含まない場合1, ...を追加する
  if (pages.at(0) != 1) {
    if ((pages.at(0) ?? 1) > startPage) {
      pages.unshift(1, ELLIPSE);
    } else {
      pages.unshift(1);
    }
  }
  if (pages.at(-1) != page.lastPage) {
    if ((pages.at(-1) ?? page.lastPage) < lastPage) {
      pages.push(ELLIPSE, page.lastPage);
    } else {
      pages.push(page.lastPage);
    }
  }

  return pages.map((i) => {
    const label = i == ELLIPSE ? ELLIPSE_STRING : `${i}`;
    // baseをcurrent もしくは firstにする（自身がfirstのURLならfistがundefinedなため）
    const baseUrl = page.url.first ? page.url.first : page.url.current;
    // 1ページめは'/'になる
    const url = i == 1 ? baseUrl : `${baseUrl}${i}`;
    return {
      label: label,
      // elilipseもしくはcurrentPageはリンクしない
      url: i != page.currentPage && i != ELLIPSE ? getLinkUrl(url) : undefined,
      isActive: i == page.currentPage,
    };
  });
};
