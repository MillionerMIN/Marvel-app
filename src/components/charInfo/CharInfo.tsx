import './charInfo.scss';
import { useEffect, useState } from 'react';
import { CharacterType, useMarvelService } from '../../services/MarvelService';
import { MessageError } from '../common/error/MessageError';
import { Spinner } from '../common/spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';

type CharInfoPropsType = {
  charId: number | null | undefined;
};

const CharInfo = (props: CharInfoPropsType) => {
  const { charId } = props;
  const [char, setChar] = useState<CharacterType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const marvelService = useMarvelService();

  useEffect(() => {
    if (!charId) {
      return;
    }
    onCharLoading();
    marvelService.getCharacter(charId).then(onChatLoaded).catch(onError);
  }, [charId]);

  const onChatLoaded = (char: CharacterType) => {
    setChar(char);
    setLoading(false);
  };

  const onCharLoading = () => {
    setLoading(false);
  };

  const onError = () => {
    setLoading(false);
    setError(true);
  };

  const messageError = error ? <MessageError /> : null;
  const spinner = loading ? <Spinner /> : null;
  const skeleton = char || error || loading ? null : <Skeleton />;
  const content = !(error || loading || !char) && <View char={char} />;

  return (
    <div className="char__info">
      {messageError}
      {spinner}
      {skeleton}
      {content}
    </div>
  );
};

type ViewPropsType = {
  char: CharacterType;
};

const View = ({ char }: ViewPropsType) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;

  const correctDesc = description
    ? description
    : 'Information for this character is not available.';
  const imgStyle =
    thumbnail ===
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
      ? 'char__image char__image_unset'
      : 'char__image';
  const correctComics = comics.length
    ? comics.slice(0, 9).map((item, i) => {
        return (
          <li key={i} className="char__comics-item">
            {item.name}
          </li>
        );
      })
    : 'There is no comics with this character.';

  return (
    <>
      <div className="char__basics">
        <img className={imgStyle} src={thumbnail} alt={name} />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{correctDesc}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">{correctComics}</ul>
    </>
  );
};

export default CharInfo;
