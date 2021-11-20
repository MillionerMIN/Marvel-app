export class MarvelService {
  _baseUrl = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=1d84e832d56bee2cc469d294f4e1f0be';
  getResource = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      return new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllCharacters = async () => {
    const res = await this.getResource(
      `${this._baseUrl}characters?limit=9&offset=210&${this._apiKey}`
    );
    return res.data.results.map(this._transformCharacter);
  };
  getCharacter = async (id: number) => {
    const res = await this.getResource(
      `${this._baseUrl}characters/${id}?${this._apiKey}`
    );
    return this._transformCharacter(res.data.results[0]);
  };
  _transformCharacter = (char: CharacterApiType): CharacterType => {
    return {
      name: char.name,
      description: char.description,
      thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
    };
  };
}

export type CharacterType = {
  name: string | undefined
  description: string | undefined
  thumbnail: string | undefined
  homepage: string | undefined
  wiki: string | undefined
};

type CharacterApiType = {
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
};
