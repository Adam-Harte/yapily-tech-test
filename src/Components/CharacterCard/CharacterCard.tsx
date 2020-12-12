import React from 'react';

interface CharacterCardProps {
  id: number;
  name: string;
  description: string;
  imgSrc: string;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  id,
  name,
  description,
  imgSrc,
}) => (
  <div>
    <h3>{name}</h3>
    <img src={imgSrc} alt={name} />
    <p>{description}</p>
    <button
      type="button"
      onClick={() => console.log(id)}
    >
      Discover more
    </button>
  </div>
);
