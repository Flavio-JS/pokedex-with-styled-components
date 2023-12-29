import styled, { css } from "styled-components";
import Image from "next/image";

export const PokemonCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 108px;
  width: 104px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.2);

  &:hover {
    cursor: pointer;
  }
`;

export const PokemonNumberWrapper = styled.div`
  display: flex;
  justify-content: end;
  height: 12px;
  width: 100%;
  padding: 4px 8px 0 8px;
  font-size: 8px;
`;

export const PokemonImageWrapper = styled.div`
  position: relative;
`;

export const PokemonImage = styled(Image)`
  position: absolute;
  transform: translate(-50%, -30%);
  top: 50%;
  left: 50%;
`;

export const PokemonNameWrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: 24px 8px 4px 8px;
    background-color: ${theme.colors.grayscale.background};
    font-size: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `}
`;
