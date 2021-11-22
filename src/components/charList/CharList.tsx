import './charList.scss';
import { Component } from 'react';
import { CharacterType, MarvelService } from '../../services/MarvelService';
import { MessageError } from '../common/error/MessageError';
import { Spinner } from '../common/spinner/Spinner';

interface ChartListPropsType {
  onCharSelected: (id: number | null | undefined) => void;
}

class CharList extends Component<ChartListPropsType> {
  state = {
    charList: [] as CharacterType[],
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount = () => {
    this.marvelService
      .getAllCharacters()
      .then(this.onCharactersLoaded)
      .catch(this.onError);
  };

  componentWillUnmount = () => {};

  onCharactersLoaded = (charList: CharacterType[]) => {
    this.setState({
      charList,
      loading: false,
    });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  onCharSelected = (charId: number) => {
    console.log(charId);
  };

  renderItems = (charList: CharacterType[]) => {
    const items = this.state.charList.map((item) => {
      const imgStyle =
        item.thumbnail ===
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
          ? 'char__img char__img_unset'
          : 'char__img';

      return (
        <li className="char__item" key={item.id}>
          <img
            className={imgStyle}
            src={item.thumbnail}
            alt={item.name}
            onClick={() => this.props.onCharSelected(item.id)}
          />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });

    return <ul className="char__grid">{items}</ul>;
  };

  render() {
    const { charList, loading, error } = this.state;
    const items = this.renderItems(charList);
    const messageError = error ? <MessageError /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(error || loading) && items;

    return (
      <div className="char__list">
        {messageError}
        {spinner}
        {content}
        <button className="button button__main button__long">
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
