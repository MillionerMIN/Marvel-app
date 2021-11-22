import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import { Component } from 'react';
import { CharacterType, MarvelService } from '../../services/MarvelService';
import { Spinner } from '../common/spinner/Spinner';
import { MessageError } from '../common/error/MessageError';

class RandomChar extends Component {
  state = {
    char: {} as CharacterType,
    loading: true,
    error: false,
  };
  marvelService = new MarvelService();

  componentDidMount = () => {
    this.updateCharacter();
  };

  componentWillUnmount = () => {};

  onChatLoaded = (char: CharacterType) => {
    this.setState({ char, loading: false });
  };

  onCharLoading = () => {
    this.setState({ loading: true });
  };

  onError = () => {
    this.setState({ loading: false, error: true });
  };

  updateCharacter = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011005) + 1011005);
    this.onCharLoading();
    this.marvelService
      .getCharacter(id)
      .then(this.onChatLoaded)
      .catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const messageError = error ? <MessageError /> : null;
    const content = !(loading || error) ? <View props={char} /> : null;

    return (
      <div className="randomchar">
        {messageError}
        {spinner}
        {content}
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button
            className="button button__main"
            onClick={this.updateCharacter}
          >
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
  }
}

type ViewPropsType = {
  props: CharacterType;
};

const View = (props: ViewPropsType) => {
  const { name, description, thumbnail, homepage, wiki } = props.props;
  const correctDesc = description
    ? description.slice(0, 220) + '...'
    : 'Information for this character is not available.';

  const objectFitStyle =
    thumbnail ===
    'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
      ? 'randomchar__img randomchar__contain'
      : 'randomchar__img';

  return (
    <div className="randomchar__block">
      <img src={thumbnail} alt="Random character" className={objectFitStyle} />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{correctDesc}</p>
        <div className="randomchar__btns">
          <a href={homepage} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
