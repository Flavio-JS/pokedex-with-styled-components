import { useHomePage } from "@/hooks/Home/useHomePage";
import { Icon } from "../../Icon/Icon";
import * as S from "./SortButton.styles";
import { useSortButton } from "../../../hooks/SortButton/useSortButton";

export const SortButton = () => {
  const { handleClick } = useSortButton();
  const { sortByNumberOrName } = useHomePage();

  return (
    <S.SortButtonWrapper
      type="button"
      onClick={() => handleClick()}
      aria-label={
        sortByNumberOrName === "number"
          ? "Ordenar pelo Número"
          : "Ordenar pelo Nome"
      }
    >
      <Icon
        iconName={
          sortByNumberOrName === "number"
            ? "SortByNumberIcon"
            : "SortByNameIcon"
        }
      />
    </S.SortButtonWrapper>
  );
};
