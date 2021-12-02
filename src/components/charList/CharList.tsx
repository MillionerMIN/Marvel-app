import './charList.scss';
import { Component } from 'react';
import { CharacterType, MarvelService } from '../../services/MarvelService';
import { MessageError } from '../common/error/MessageError';
import { Spinner } from '../common/spinner/Spinner';
import { runInThisContext } from 'vm';

interface ChartListPropsType {
  onCharSelected: (id: number | null | undefined) => void;
}

class CharList extends Component<ChartListPropsType> {
  state = {
    charList: [] as CharacterType[],
    loading: true,
    error: false,
    newItemLoading: false,
    offset: 210,
    charEnded: false,
    isActive: null,
  };

  marvelService = new MarvelService();

  componentDidMount = () => {
    this.onRequest();
  };

  onRequest = (offset?: number) => {
    this.onCharLoading();
    this.marvelService
      .getAllCharacters(offset)
      .then(this.onCharactersLoaded)
      .catch(this.onError);
  };

  onCharLoading = () => {
    this.setState({
      newItemLoading: true,
    });
  };

  onCharactersLoaded = (newCharList: CharacterType[]) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }
    this.setState(() => ({
      charList: [...this.state.charList, ...newCharList],
      loading: false,
      newItemLoading: false,
      offset: this.state.offset + 9,
      charEnded: ended,
    }));
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  //change className in isActive clicking
  focusOnItem = (id: number | undefined) => {
    this.setState({
      isActive: id,
    });
  };

  // This method created for optimization,
  // to avoid placing such a structure in the method render
  renderItems = (charList: CharacterType[]) => {
    const items = charList.map((item) => {
      const imgStyle =
        item.thumbnail ===
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
          ? 'char__img char__img_unset'
          : 'char__img';

      return (
        <li
          className={
            this.state.isActive === item.id
              ? 'char__item char__item_selected'
              : 'char__item'
          }
          key={item.id}
          onClick={() => this.focusOnItem(item.id)}
        >
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
    const { charList, loading, error, newItemLoading, offset, charEnded } =
      this.state;
    const items = this.renderItems(charList);
    const messageError = error ? <MessageError /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(error || loading) && items;
    const styleButton = charEnded
      ? 'button_none'
      : 'button button__main button__long';

    return (
      <div className="char__list">
        {messageError}
        {spinner}
        {content}
        <button
          className={styleButton}
          disabled={newItemLoading}
          onClick={() => this.onRequest(offset)}
        >
          <div className="inner">load more</div>
        </button>
      </div>
    );
  }
}

export default CharList;
