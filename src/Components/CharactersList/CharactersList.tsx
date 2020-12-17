import React from 'react';
import { Link } from 'react-router-dom';

import { CharacterCard, CharacterData } from '../CharacterCard/CharacterCard';

import './CharactersList.css';

interface CharactersListProps {
  characters: CharacterData[];
}

export const CharactersList: React.FC<CharactersListProps> = ({
  characters,
}) => (
  <ul className="characters-list__list">
    {characters.map((character) => (
      <li key={character.id}>
        <CharacterCard
          id={character.id}
          name={character.name}
          thumbnail={character.thumbnail}
          description={character.description}
        >
          <Link
            to={{ pathname: `character/${character.id}` }}
          >
            Discover more
          </Link>
        </CharacterCard>
      </li>
    ))}
  </ul>
)