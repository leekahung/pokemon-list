import PokemonRow from "./PokemonRow";
import useStore from "../store";

const PokemonTable = () => {
  const pokemon = useStore((state) => state.pokemon);
  const filter = useStore((state) => state.filter);
  const setSelectedPokemon = useStore((state) => state.setSelectedPokemon);

  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemon
          .filter(({ name: { english } }) =>
            english.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(0, 20)
          .map((pokemon) => (
            <PokemonRow
              key={pokemon.id}
              pokemon={pokemon}
              onSelect={(pokemon) => setSelectedPokemon(pokemon)}
            />
          ))}
      </tbody>
    </table>
  );
};

export default PokemonTable;
