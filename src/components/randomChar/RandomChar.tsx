import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import { Component } from 'react';
import { CharacterType, MarvelService } from '../../services/MarvelService';

class RandomChar extends Component {
  constructor(props: any) {
    super(props);
    this.updateCharacter();
  }
  state = {
    char: {} as CharacterType,
    loading: true,
    error: false,
  };
  marvelService = new MarvelService();

  onChatLoaded = (char: any) => {
    this.setState({ char });
  };

  updateCharacter = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011005) + 1011005);
    this.marvelService.getCharacter(id).then(this.onChatLoaded);
  };
  render() {
    const { char, loading, error } = this.state;

    return (
      <div className="randomchar">
        <View props={char} />
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button className="button button__main">
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
    ? description.slice(0, 250) + '...'
    : 'Information for this character is not available';

  return (
    <div className="randomchar__block">
      <img src={thumbnail} alt="Random character" className="randomchar__img" />
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
