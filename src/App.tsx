import './App.css';
import { PokemonList } from './components/PokemonList/PokemonList';

function App() {
  return (
    <div className="App">
      <img
        src="https://ianars.github.io/Pok-dex/images/pokedeex.png"
        alt="pokedex logo"
      />

      <PokemonList />
    </div>
  );
}

export default App;
