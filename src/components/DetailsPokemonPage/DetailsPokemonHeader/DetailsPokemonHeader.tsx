import { useRouter } from "next/router";
import { Icon } from "@/components/Icon/Icon";
import * as S from "./DetailsPokemonHeader.styles";
import { DetailsPokemonHeaderTypes } from "./DetailsPokemonHeader.types";

export const DetailsPokemonHeader = ({
  name,
  number,
}: DetailsPokemonHeaderTypes) => {
  const router = useRouter();

  return (
    <S.DetailsPokemonHeaderWrapper>
      <button
        type="button"
        aria-label="voltar"
        onClick={() => router.push("/")}
      >
        <Icon iconName="ArrowLeftIcon" />
      </button>
      <S.DetailsPokemonHeaderH1>{name}</S.DetailsPokemonHeaderH1>
      <S.DetailsPokemonHeaderH2>#{number}</S.DetailsPokemonHeaderH2>
    </S.DetailsPokemonHeaderWrapper>
  );
};
