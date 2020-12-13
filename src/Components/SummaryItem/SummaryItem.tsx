import React from 'react';

export interface SummaryItemProps {
  name: string;
  type?: string;
}

export const SummaryItem: React.FC<SummaryItemProps> = ({
  name,
  type = '',
}) => (
  <div>
    <span>{name}</span>
    {!!type && (
      <span>{type}</span>
    )}
  </div>
);
