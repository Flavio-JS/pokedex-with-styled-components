import styled from "styled-components";
import { theme } from "@/styles/theme";

export const PokedexListHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 12px 12px 24px 12px;
  background-color: ${theme.colors.identity.primary};
  width: 100%;
`;

export const PokedexListHeaderFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PokedexListHeaderSortWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${theme.colors.grayscale.white};
`;
