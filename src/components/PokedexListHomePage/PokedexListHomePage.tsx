import { useHomePage } from "@/hooks/Home/useHomePage";
import { PokemonCard } from "./PokemonCard/PokemonCard";
import * as S from "./PokedexListHomePage.styles";
import { PokedexListHeader } from "./PokedexListHeader/PokedexListHeader";

export const PokedexListHomePage = () => {
  const { sortedPokemons } = useHomePage();

  return (
    <S.PokedexListWrapper>
      <PokedexListHeader />
      <S.PokedexListPokemonCardWrapper>
        {sortedPokemons.map((pokemonData) => (
          <PokemonCard
            key={pokemonData.id}
            pokemonId={pokemonData.id}
            pokemonNumber={pokemonData.number}
            pokemonImgUrl={pokemonData.urlImage}
            pokemonName={pokemonData.name}
            pokemonImgAlt={pokemonData.name}
          />
        ))}
      </S.PokedexListPokemonCardWrapper>
    </S.PokedexListWrapper>
  );
};
