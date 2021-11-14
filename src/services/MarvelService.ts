export class MarvelService {
  _baseUrl = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=1d84e832d56bee2cc469d294f4e1f0be';
  getResource = async (url: string) => {
    const res = await fetch(url);

    if (!res.ok) {
      return new Error(`Could not fetch ${url}, status: ${res.status}`)
    }

    return await res.json()
  }

  getAllCharacters = () => {
    return this.getResource(`${this._baseUrl}characters?limit=9&offset=210&${this._apiKey}`)
  }
  getCharacter = (id: number) => {
    return this.getResource(`${this._baseUrl}characters/${id}?${this._apiKey}`)
  }

}