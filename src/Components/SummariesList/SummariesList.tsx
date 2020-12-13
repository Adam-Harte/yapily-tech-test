import React from 'react';
import { SummaryItem, SummaryItemProps } from '../SummaryItem/SummaryItem';

interface SummariesListProps {
  summaries: SummaryItemProps[];
}

export const SummariesList: React.FC<SummariesListProps> = ({
  summaries,
}) => (
  <ul>
    {summaries.map((summary) => (
      <li key={summary.name}>
        <SummaryItem
          name={summary.name}
          type={summary.type || ''}
        />
      </li>
    ))}
  </ul>
);
