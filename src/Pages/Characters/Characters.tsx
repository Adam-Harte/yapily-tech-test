import React, { useEffect, useState } from 'react';
import { getResponseData } from '../../Api/marvelApi';
import { CharacterCardProps } from '../../Components/CharacterCard/CharacterCard';

import { CharactersList } from '../../Components/CharactersList/CharactersList';
import { Pagination } from '../../Components/Pagination/Pagination';

export const Characters: React.FC = () => {
  const [data, setData] = useState<|CharacterCardProps[]>([]);
  useEffect(() => {
    const setResponseData = async() => {
      const result = await getResponseData('/characters');

      console.log(result);

      setData(result.data.results);
    }

    setResponseData();
  }, []);

  return (
    <React.Fragment>
      <Pagination
        items={data}
        itemsPerPage={5}
      >
        {(paginatedData) => (
          <CharactersList
            characters={paginatedData}
          />
        )}
      </Pagination>
    </React.Fragment>
  );
};
