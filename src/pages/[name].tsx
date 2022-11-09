import { usePokemonStore } from '~/stores/pokemon';
import IcArrowLeft from '~/assets/ic_arrow_left.svg';
import WideLayout from '~/components/layouts/WideLayout';

const DetailPokemon = () => {
  /**
   * store
   */

  const pokemon = usePokemonStore((state) => state.pokemon);

  const { name } = useParams();

  return (
    <WideLayout>
      <div className="flex justify-between mb-2">
        <Link className="flex items-center py-2" to="/">
          <img src={IcArrowLeft} alt="back" className="mr-2" />
          <span className="text-primary font-medium">Stok Pokémons</span>
        </Link>

        <button className="btn">Update Stock</button>
      </div>

      <h1 className="mb-10 capitalize">{name}</h1>

      <div className="text-sm">Sisa stok</div>
      <h2 className="text-3xl mb-8">{pokemon?.stock} pcs</h2>

      <div className="text-xl font-bold">Riwayat Stok</div>
      <div className="text-sm">Satuan stok dalam pcs</div>
    </WideLayout>
  );
};

export default DetailPokemon;
