import React from 'react';

import './CharacterCard.css';

export interface CharacterData {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface CharacterCardProps extends CharacterData {
  children?: JSX.Element;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  description,
  thumbnail: {
    path,
    extension,
  },
  children = null,
}) => (
  <div className="character-card">
    <h3 className="character-card__title">{name}</h3>
    <img className="character-card__img" src={`${path}.${extension}`} alt={name} />
    {!!description && (
      <p className="character-card__desc">{description}</p>
    )}
    {children}
  </div>
);
