import React from 'react';

import { SummaryItem, SummaryItemProps } from '../SummaryItem/SummaryItem';

import './SummariesList.css';

interface SummariesListProps {
  summaries: SummaryItemProps[];
  title: string;
}

export const SummariesList: React.FC<SummariesListProps> = ({
  summaries,
  title,
}) => (
  <React.Fragment>
    <h4 className="summaries-list__title">{title}</h4>
    <ul className="summaries-list__list">
      {summaries.map((summary) => (
        <li className="summaries-list__list__item" key={summary.name}>
          <SummaryItem
            name={summary.name}
            type={summary.type || ''}
          />
        </li>
      ))}
    </ul>
  </React.Fragment>
);
