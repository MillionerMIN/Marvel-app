import './charList.scss';
import { Component } from 'react';
import { CharacterType, MarvelService } from '../../services/MarvelService';
import { MessageError } from '../common/error/MessageError';
import { Spinner } from '../common/spinner/Spinner';

class CharList extends Component {
  state = {
    characters: [] as CharacterType[],
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  onCharactersLoaded = (characters: CharacterType[]) => {
    this.setState({
      characters,
      loading: false,
    });
  };

  componentDidMount = () => {
    this.marvelService.getAllCharacters().then(this.onCharactersLoaded);
    console.log('####: charList mount');
  };

  componentWillUnmount = () => {
    console.log('####: charList unmount');
  };

  render() {
    console.log('####: charList render');
    const { characters, loading, error } = this.state;
    const messageError = error ? <MessageError /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content =
      !(error || loading) &&
      characters.map((item) => (
        <li className="char__item" key={item.name}>
          <img src={item.thumbnail} alt="abyss" />
          <div className="char__name">{item.name}</div>
        </li>
      ));

    return (
      <div className="char__list">
        <ul className="char__grid">
          {messageError}
          {spinner}
          {content}
        </ul>
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
