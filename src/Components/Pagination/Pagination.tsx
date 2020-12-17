import React from 'react';

import { usePagination } from '../../Hooks/usePagination';

import './Pagination.css';

interface PaginationProps {
  children(items: any[]): JSX.Element;
  items: any[];
  itemsPerPage?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  children,
  items,
  itemsPerPage = 10,
}) => {
  const { next, prev, getCurrentPageItems, currentPage, lastPage } = usePagination(items, itemsPerPage);

  return (
    <React.Fragment>
      {children(getCurrentPageItems())}
      <div className="pagination">
        <button
          className="pagination__button__prev"
          type="button"
          disabled={currentPage === 1}
          onClick={prev}
        >
          {'<'}
        </button>
        <span>{currentPage}</span>
        <button
          className="pagination__button__next"
          type="button"
          disabled={currentPage === lastPage}
          onClick={next}
        >
          {'>'}
        </button>
      </div>
    </React.Fragment>
  )
}