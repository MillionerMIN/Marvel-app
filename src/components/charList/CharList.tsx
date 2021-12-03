import './charList.scss';
import { useEffect, useState } from 'react';
import { CharacterType, MarvelService } from '../../services/MarvelService';
import { MessageError } from '../common/error/MessageError';
import { Spinner } from '../common/spinner/Spinner';

interface ChartListPropsType {
  onCharSelected: (id: number | undefined | null) => void;
}

const CharList = (props: ChartListPropsType) => {
  const { onCharSelected } = props;
  const [charList, setCharList] = useState<CharacterType[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [newItemLoading, setNewItemLoading] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(210);
  const [charEnded, setCharEnded] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<number | undefined | null>(null);

  const marvelService = new MarvelService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = (offset?: number) => {
    onCharLoading();
    marvelService
      .getAllCharacters(offset)
      .then(onCharactersLoaded)
      .catch(onError);
  };

  const onCharLoading = () => {
    setNewItemLoading(true);
  };

  const onCharactersLoaded = (newCharList: CharacterType[]) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }
    setCharList((charList) => [...charList, ...newCharList]);
    setLoading(false);
    setNewItemLoading(false);
    setOffset((offset) => offset + 9);
    setCharEnded(ended);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  //change className in isActive clicking
  const focusOnItem = (id: number | undefined) => {
    setIsActive(id);
  };

  // This method created for optimization,
  // to avoid placing such a structure in the method render
  const renderItems = (charList: CharacterType[]) => {
    const items = charList.map((item) => {
      const imgStyle =
        item.thumbnail ===
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
          ? 'char__img char__img_unset'
          : 'char__img';

      return (
        <li
          className={
            isActive === item.id
              ? 'char__item char__item_selected'
              : 'char__item'
          }
          key={item.id}
          onClick={() => {
            onCharSelected(item.id);
            focusOnItem(item.id);
          }}
        >
          <img className={imgStyle} src={item.thumbnail} alt={item.name} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });

    return <ul className="char__grid">{items}</ul>;
  };

  const items = renderItems(charList);
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
        onClick={() => onRequest(offset)}
      >
        <div className="inner">load more</div>
      </button>
    </div>
  );
};

export default CharList;
