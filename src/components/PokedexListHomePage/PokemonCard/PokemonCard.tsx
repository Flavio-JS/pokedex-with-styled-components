import { useRouter } from "next/router";
import { KeyboardEvent } from "react";
import { PokemonCardDataTypes } from "./PokemonCard.types";
import * as S from "./PokemonCard.styles";

export const PokemonCard = ({
  pokemonId,
  pokemonNumber,
  pokemonImgUrl,
  pokemonImgAlt,
  pokemonName,
}: PokemonCardDataTypes) => {
  const router = useRouter();

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      void router.push(`/pokemon/${pokemonId}`);
    }
  };

  return (
    <S.PokemonCardWrapper
      onClick={() => router.push(`/pokemon/${pokemonId}`)}
      onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => handleKeyDown(e)}
      role="button"
      tabIndex={0}
    >
      <S.PokemonNumberWrapper>#{pokemonNumber}</S.PokemonNumberWrapper>
      <S.PokemonImageWrapper>
        <S.PokemonImage
          alt={pokemonImgAlt}
          width={72}
          height={72}
          src={pokemonImgUrl}
        />
      </S.PokemonImageWrapper>

      <S.PokemonNameWrapper>{pokemonName}</S.PokemonNameWrapper>
    </S.PokemonCardWrapper>
  );
};
