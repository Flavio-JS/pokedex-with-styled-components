import styled, { css } from "styled-components";

export const DetailsPokemonHeaderWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px 20px 16px;
    color: ${theme.colors.grayscale.white};

    button {
      all: unset;

      :hover {
        cursor: pointer;
      }
    }
  `}
`;

export const DetailsPokemonHeaderH1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

export const DetailsPokemonHeaderH2 = styled.h2`
  font-size: 12px;
  font-weight: 700;
`;
