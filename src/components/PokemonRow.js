import Button from "@mui/material/Button";
import PokemonType from "../pokemonType";
import PropTypes from "prop-types";

const PokemonRow = ({ pokemon, onSelect }) => (
  <>
    <tr>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
      <td>
        <Button variant="contained" onClick={() => onSelect(pokemon)}>
          Select
        </Button>
      </td>
    </tr>
  </>
);

PokemonRow.propTypes = {
  pokemon: PokemonType,
};

export default PokemonRow;
