import { useHttp } from '../hooks/http.hook';

export const useMarvelService = () => {
  const _baseUrl = 'https://gateway.marvel.com:443/v1/public/';
  const _apiKey = 'apikey=1d84e832d56bee2cc469d294f4e1f0be';
  const _baseOffset = 210;
  const { loading, error, request } = useHttp();

  const getAllCharacters = async (offset = _baseOffset) => {
    const res = await request(
      `${_baseUrl}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformCharacter);
  };
  const getCharacter = async (id: number | undefined | null) => {
    const res = await request(`${_baseUrl}characters/${id}?${_apiKey}`);
    return _transformCharacter(res.data.results[0]);
  };
  const _transformCharacter = (char: CharacterApiType): CharacterType => {
    return {
      id: char.id,
      name: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items,
    };
  };

  return { loading, error, getAllCharacters, getCharacter };
};

export type CharacterType = {
  id: number | undefined;
  name: string | undefined;
  description: string | undefined;
  thumbnail: string | undefined;
  homepage: string | undefined;
  wiki: string | undefined;
  comics: [
    {
      resourceURI: string | undefined;
      name: string | undefined;
    }
  ];
};

type CharacterApiType = {
  id: undefined | number;
  name: undefined | string;
  description: undefined | string;
  thumbnail: {
    path: undefined | string;
    extension: undefined | string;
  };
  urls: [
    {
      url: undefined | string;
    },
    {
      url: undefined | string;
    }
  ];
  comics: {
    items: [
      {
        resourceURI: string | undefined;
        name: string | undefined;
      }
    ];
  };
};
