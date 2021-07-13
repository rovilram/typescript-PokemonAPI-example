import { PokemonData } from '../../interfaces/pokemonData';

type Props = {
  children: PokemonData;
};

export const PokemonCard = ({ children }: Props) => {
  const pokemon = children;

  let bgImg = '';

  switch (pokemon.types[0].type.name) {
    case 'normal':
      bgImg =
        'https://pokemongohub.net/wp-content/uploads/2019/05/Normal-Types.jpg';
      break;

    case 'fire':
      bgImg =
        'https://pokemongohub.net/wp-content/uploads/2019/01/Fire-Types-696x392.jpg';
      break;

    case 'water':
      bgImg =
        'https://pokemongohub.net/wp-content/uploads/2019/01/Water-Types-696x392.jpg';
      break;

    case 'grass':
      bgImg =
        'https://pokemongohub.net/wp-content/uploads/2019/01/Grass-Types-696x392.jpg';
      break;

    case 'fairy':
      bgImg =
        'https://pokemongohub.net/wp-content/uploads/2019/02/Fairy-Types-1024x576-696x392.jpg';
      break;

    case 'bug':
      bgImg =
        'https://pokemongohub.net/wp-content/uploads/2019/01/Bug-Types-696x392.jpg';
      break;

    case 'poison':
      bgImg =
        'https://pokemongohub.net/wp-content/uploads/2019/01/Poison-Types-696x392.jpg';
      break;

    case 'electric':
      bgImg =
        'https://pokemongohub.net/wp-content/uploads/2019/01/Electric-Types-696x392.jpg';
      break;

    case 'ground':
      bgImg =
        'https://pokemongohub.net/wp-content/uploads/2019/01/Ground-Types-696x392.jpg';
      break;

    case 'fighting':
      bgImg =
        'https://pokemongohub.net/wp-content/uploads/2019/01/Fighting-Types-696x392.jpg';
      break;

    case 'psychic':
      bgImg =
        'https://pokemongohub.net/wp-content/uploads/2019/01/Psychic-Types-696x392.jpg';
      break;

    case 'dark':
      bgImg =
        'https://pokemongohub.net/wp-content/uploads/2019/01/Dark-Types-696x392.jpg';
      break;

    case 'rock':
      bgImg = 'https://www.teahub.io/photos/full/148-1481989_boulder-cup.jpg';
      break;

    case 'steel':
      bgImg = 'https://i.ytimg.com/vi/IK9TxCgn7IM/maxresdefault.jpg';
      break;

    case 'ghost':
      bgImg = 'https://i.ytimg.com/vi/D3fKX9qQAOA/maxresdefault.jpg';
      break;
    case 'ice':
      bgImg = 'https://wallpapercave.com/wp/wp3105839.jpg';
      break;
    case 'dragon':
      bgImg =
        'https://noticiaspokemongo.com/wp-content/uploads/Dragon-Types-1.jpg';
      break;
    case 'flying':
      bgImg = 'https://wallpaperaccess.com/full/4186766.jpg';
      break;

    default:
      break;
  }

  return (
    <div
      className="card col-lg-3  col-md-2 col-sm-1 col-xs-1 m-5 p-5 border border-dark shadow-lg"
      style={{
        borderRadius: 20,
        backgroundImage: `url(
          ${bgImg}
        )`,
        backgroundSize: 'cover',
      }}
    >
      <h2>{pokemon.name}</h2>
      <h3>#{pokemon.id}</h3>
      <img
        className="card-img-top"
        src={
          pokemon.sprites.other['official-artwork'].front_default ||
          pokemon.sprites.front_default
        }
        alt={pokemon.name}
      />
      <div>
        {pokemon.types.map((type) => (
          <span className="badge rounded-pill bg-dark m-2 p-2">
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};
