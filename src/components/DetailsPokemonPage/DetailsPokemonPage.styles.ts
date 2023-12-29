import styled, { css } from "styled-components";
import { PokemonTypes } from "@/components/PokemonTypeBadge/PokemonTypeBadge.types";
import { theme } from "@/styles/theme";

type DetailsPokemonWrapperProps = {
  pokemonType: PokemonTypes;
};

export const DetailsPokemonWrapper = styled.div<DetailsPokemonWrapperProps>`
  ${({ pokemonType }) => css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 4px;
    width: 100vw;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);
    background-color: ${pokemonType
      ? `${theme.colors.pokemonType[pokemonType]}`
      : `${theme.colors.grayscale.medium}`};
  `}
`;
