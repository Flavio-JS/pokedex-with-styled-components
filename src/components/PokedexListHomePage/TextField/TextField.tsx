import { Icon } from "@/components/Icon/Icon";
import { useTextField } from "@/hooks/TextField/useTextField";
import { ChangeEvent } from "react";
import * as S from "./TextField.styles";

export const TextField = () => {
  const { searchTerm, handleInputChange, handleClick } = useTextField();

  return (
    <S.TextFieldWrapper>
      <Icon iconName="SearchIcon" />
      <S.TextFieldInput
        type="text"
        name="text"
        value={searchTerm}
        placeholder="Search"
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e)}
      />

      <button
        type="button"
        onClick={() => handleClick()}
        aria-label="Remover filtro"
      >
        <Icon iconName="XIcon" />
      </button>
    </S.TextFieldWrapper>
  );
};
