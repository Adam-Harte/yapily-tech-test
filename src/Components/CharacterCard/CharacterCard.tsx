import React from 'react';
import { Link } from 'react-router-dom';

export interface CharacterCardProps {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  id,
  name,
  description,
  thumbnail: {
    path,
    extension,
  },
}) => (
  <div>
    <h3>{name}</h3>
    <img src={`${path}.${extension}`} alt={name} />
    {!!description && (
      <p>{description}</p>
    )}
    <Link
      to={{ pathname: `character/${id}` }}
    >
      Discover more
    </Link>
  </div>
);
