import React from 'react';

import { CharacterCard, CharacterCardProps } from '../CharacterCard/CharacterCard';

interface CharactersListProps {
  characters: CharacterCardProps[];
}

export const CharactersList: React.FC<CharactersListProps> = ({
  characters,
}) => (
  <ul>
    {characters.map((character) => (
      <li key={character.id}>
        <CharacterCard
          id={character.id}
          name={character.name}
          thumbnail={character.thumbnail}
          description={character.description}
        />
      </li>
    ))}
  </ul>
)