import styled, { css } from "styled-components";

export const SortButtonWrapper = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
    padding: 8px;
    border-radius: 50%;
    border: none;
    width: 32px;
    height: 32px;
    background-color: ${theme.colors.grayscale.white};

    &:hover {
      cursor: pointer;
    }
  `}
`;
