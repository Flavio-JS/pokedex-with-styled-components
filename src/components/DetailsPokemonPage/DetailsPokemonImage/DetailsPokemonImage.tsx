import { useRouter } from "next/router";
import { Icon } from "@/components/Icon/Icon";
import * as S from "./DetailsPokemonImage.styles";
import { DetailsPokemonImageTypes } from "./DetailsPokemonImage.types";

export const DetailsPokemonImage = ({
  id,
  imgUrl,
  name,
}: DetailsPokemonImageTypes) => {
  const router = useRouter();

  const handlePreviousPokemonClick = (pokemonId: number) => {
    if (pokemonId === 1) return void router.push(`/pokemon/1010`);

    return void router.push(`/pokemon/${pokemonId - 1}`);
  };

  const handleNextPokemonClick = (pokemonId: number) => {
    if (pokemonId === 1010) return void router.push(`/pokemon/1`);

    return void router.push(`/pokemon/${pokemonId + 1}`);
  };
  return (
    <S.DetailsPokemonImageWrapper>
      <S.DetailsPokemonImagePreviousAndNextButton
        type="button"
        aria-label="Pokemon anterior"
        onClick={() => handlePreviousPokemonClick(id)}
      >
        <Icon iconName="ChevronLeftIcon" />
      </S.DetailsPokemonImagePreviousAndNextButton>

      <S.DetailsPokemonImage
        alt={name}
        width={180}
        height={180}
        src={imgUrl}
        priority
      />

      <S.DetailsPokemonImagePreviousAndNextButton
        type="button"
        aria-label="Próximo pokemon"
        onClick={() => handleNextPokemonClick(id)}
      >
        <Icon iconName="ChevronRightIcon" />
      </S.DetailsPokemonImagePreviousAndNextButton>
    </S.DetailsPokemonImageWrapper>
  );
};
