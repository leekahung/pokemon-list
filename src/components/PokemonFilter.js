import styled from "@emotion/styled";
import { observer } from "mobx-react";
import store from "../store";

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  return (
    <Input
      value={store.filter}
      onChange={(event) => store.setFilter(event.target.value)}
    />
  );
};

export default observer(PokemonFilter);
