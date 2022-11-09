import FInput from '~/components/inputs/FInput';
import Default from '~/components/layouts/Default';
import IcSearch from '~/assets/ic_search.svg';
import { getPokemonList } from '~/api/apis';
import { usePokemonStore } from '~/stores/pokemon';
import PokemonTable from '~/components/PokemonTable';

function App() {
  /**
   * store
   */
  const pokemons = usePokemonStore((state) => state.pokemons);
  const setPokemons = usePokemonStore((state) => state.setPokemons);

  /**
   * api
   */
  const { loading } = useRequest(getPokemonList, {
    onSuccess: ({ results }) => {
      console.log(pokemons);
      if (pokemons.length == 0) {
        setPokemons(results.map((v) => ({ ...v, stock: 0 })));
      }
    },
  });

  /**
   * search
   */
  const [keyword, setKeyword] = useState('');
  const filteredPokemons = useMemo(() => {
    if (!keyword) return pokemons;
    return pokemons.filter((pokemon) => pokemon.name.includes(keyword));
  }, [keyword, pokemons]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <Default>
      <h1 className="mb-10">Stok Pokémon</h1>
      <FInput type="text" name="search" placeholder="Cari Pokemon" value={keyword} onChange={handleSearch}>
        <img src={IcSearch} alt="Your SVG" className="pl-2" />
      </FInput>
      {loading ? <div>loading...</div> : <PokemonTable items={filteredPokemons}></PokemonTable>}
    </Default>
  );
}

export default App;
