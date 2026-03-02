import type { Page } from "astro";
import { range } from "./range";

export interface PaginationPage {
  label: string;
  url: string | undefined;
}

const ellipse = -1;

export const makePaginationLink = (
  { page, num = 5 }: { page: Page<any>; num?: number },
): PaginationPage[] => {
  const moreThanOnePage = page.start != page.lastPage;
  const from = Math.max(1, page.currentPage - Math.floor(num / 2));
  const to = moreThanOnePage ? Math.min(page.lastPage - 1, from + num - 1) : 0;
  const pages = range({ start: from, end: to });
  if (pages.at(0) != 1) {
    if ((pages.at(0) ?? 1) > 2) {
      pages.unshift(1, ellipse);
    } else {
      pages.unshift(1);
    }
  }
  if (pages.at(-1) != page.lastPage) {
    if ((pages.at(-1) ?? page.lastPage) < page.lastPage) {
      pages.push(ellipse, page.lastPage);
    } else {
      pages.push(page.lastPage);
    }
  }

  return pages.map((i) => {
    const label = i == ellipse ? "..." : `${i}`;
    // 1ページめは'/'になる
    const url = i == 1 ? "/" : `./${i}`;
    return {
      label: i == ellipse ? "..." : `${i}`,
      // elilipseもしくはcurrentPageはリンクしない
      url: i != page.currentPage && i != -1 ? url : undefined,
    };
  });
};
