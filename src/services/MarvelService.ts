export class MarvelService {
  _baseUrl = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=1d84e832d56bee2cc469d294f4e1f0be';
  _baseOffset = 210;
  getResource = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      return new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async (offset = this._baseOffset) => {
    const res = await this.getResource(
      `${this._baseUrl}characters?limit=9&offset=${offset}&${this._apiKey}`
    );
    return res.data.results.map(this._transformCharacter);
  };
  getCharacter = async (id: number | undefined | null) => {
    const res = await this.getResource(
      `${this._baseUrl}characters/${id}?${this._apiKey}`
    );
    return this._transformCharacter(res.data.results[0]);
  };
  _transformCharacter = (char: CharacterApiType): CharacterType => {
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
}

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
