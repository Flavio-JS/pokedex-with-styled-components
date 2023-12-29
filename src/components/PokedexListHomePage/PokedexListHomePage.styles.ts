import styled, { css } from "styled-components";

export const PokedexListWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4px;
    background-color: ${theme.colors.identity.primary};
    height: 100vh;
    width: 100vw;
    overflow-y: hidden;
  `}
`;

export const PokedexListPokemonCardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: calc(100vh - 84px);
    gap: 10px;
    padding: 10px;
    background-color: ${theme.colors.grayscale.white};
    justify-content: space-between;
    align-content: flex-start;
    border-radius: 8px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 12px;
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 6px;
    }
  `}
`;
