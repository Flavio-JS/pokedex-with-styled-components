import Image from "next/image";
import styled from "styled-components";

export const DetailsPokemonImageWrapper = styled.div`
  display: flex;
  min-height: 144px;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 16px 0 16px;
`;

export const DetailsPokemonImage = styled(Image)`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
`;

export const DetailsPokemonImagePreviousAndNextButton = styled.button`
  all: unset;
  margin-bottom: 20px;

  :hover {
    cursor: pointer;
  }
`;
