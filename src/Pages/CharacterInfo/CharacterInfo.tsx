import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getResponseData } from '../../Api/marvelApi';
import { CharacterCard, CharacterData } from '../../Components/CharacterCard/CharacterCard';
import { SummariesList } from '../../Components/SummariesList/SummariesList';

interface CharacterInfoProps extends CharacterData {
  events: {
    items: [];
  };
  series: {
    items: any[];
  };
  stories: {
    items: any[];
  };
}

export const CharacterInfo: React.FC = () => {
  const [data, setData] = useState<CharacterInfoProps[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const setResponseData = async() => {
      const result = await getResponseData(`/characters/${id}`);

      console.log(result.data.results);

      setData(result.data.results);
    }

    setResponseData();
  }, [id]);

  return data.length ? (
    <div>
      <CharacterCard
        id={parseInt(id)}
        name={data[0].name}
        thumbnail={data[0].thumbnail}
        description={data[0].description}
      />
      <SummariesList
        summaries={data[0].events.items}
      />
      <SummariesList
        summaries={data[0].series.items}
      />
      <SummariesList
        summaries={data[0].stories.items}
      />
    </div>
  ) : (
    <span>Loading...</span>
  );
};
