import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getResponseData } from '../../Api/marvelApi';
import { CharacterCard, CharacterData } from '../../Components/CharacterCard/CharacterCard';
import { SummariesList } from '../../Components/SummariesList/SummariesList';

import './CharacterInfo.css';

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
    <div className="character-info">
      <CharacterCard
        id={parseInt(id)}
        name={data[0].name}
        thumbnail={data[0].thumbnail}
        description={data[0].description}
      />
      <div className="character-info__summaries">
        <SummariesList
          title="Events"
          summaries={data[0].events.items}
        />
        <SummariesList
          title="Series"
          summaries={data[0].series.items}
        />
        <SummariesList
          title="Stories"
          summaries={data[0].stories.items}
        />
      </div>
    </div>
  ) : (
    <span>Loading...</span>
  );
};
