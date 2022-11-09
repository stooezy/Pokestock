import { TPokemon } from '~/api/type';
import { usePokemonStore } from '~/stores/pokemon';

type TProps = {
  items: TPokemon[];
};

const PokemonTable = ({ items }: TProps) => {
  const navigate = useNavigate();
  const setPokemon = usePokemonStore((state) => state.setPokemon);

  const handleClick = (pokemon: TPokemon) => {
    setPokemon(pokemon);
    navigate(`/${pokemon.name}`);
  };
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b-2 border-black">
          <th className="w-full text-left py-3">Name</th>
          <th className="w-full text-right py-3">Stok</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={index} className="border-b">
              <td className="py-3 text-primary cursor-pointer hover:underline font-bold capitalize">
                <button onClick={() => handleClick(item)}>{item.name}</button>
              </td>
              <td className="text-right py-3">{item.stock}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PokemonTable;
