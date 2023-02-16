import PokemonRow from "./PokemonRow";
import { observer } from "mobx-react";
import store from "../store";

const PokemonTable = () => {
  return (
    <table width="100%">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {store.filteredPokemon.slice(0, 20).map((pokemon) => (
          <PokemonRow
            key={pokemon.id}
            pokemon={pokemon}
            onSelect={(pokemon) => store.setSelectedPokemon(pokemon)}
          />
        ))}
      </tbody>
    </table>
  );
};

export default observer(PokemonTable);
