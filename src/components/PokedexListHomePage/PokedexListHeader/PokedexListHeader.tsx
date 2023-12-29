import { SortButton } from "../SortButton/SortButton";
import { TextField } from "../TextField/TextField";
import * as S from "./PokedexListHeader.styles";

export const PokedexListHeader = () => {
  return (
    <S.PokedexListHeaderWrapper>
      <S.PokedexListHeaderFilterWrapper>
        <TextField />
        <S.PokedexListHeaderSortWrapper>
          Order by: <SortButton />
        </S.PokedexListHeaderSortWrapper>
      </S.PokedexListHeaderFilterWrapper>
    </S.PokedexListHeaderWrapper>
  );
};
