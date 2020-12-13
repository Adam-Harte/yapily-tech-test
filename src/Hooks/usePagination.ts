import { useState } from 'react';

export const usePagination = (items: any[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = Math.ceil(items.length / itemsPerPage);

  const getCurrentPageItems = (): any[] => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return items.slice(start, end);
  }

  const next = (): void => {
    setCurrentPage((prev) => Math.min(prev + 1, lastPage));
  }

  const prev = (): void => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  }

  return { next, prev, getCurrentPageItems, currentPage, lastPage }
};
