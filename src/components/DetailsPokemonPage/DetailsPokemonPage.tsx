import { usePokemonById } from "@/hooks/api/usePokemon";
import { useRouter } from "next/router";
import * as S from "./DetailsPokemonPage.styles";
import { DetailsPokemonHeader } from "./DetailsPokemonHeader/DetailsPokemonHeader";
import { DetailsPokemonImage } from "./DetailsPokemonImage/DetailsPokemonImage";
import { DetailsPokemonStats } from "./DetailsPokemonStats/DetailsPokemonStats";

export const DetailsPokemonPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: pokemonData, isError, isLoading } = usePokemonById(Number(id));

  if (isError)
    return (
      <S.DetailsPokemonWrapper pokemonType="type">
        <DetailsPokemonHeader name="Error" number="000" />
        <DetailsPokemonImage
          id={0}
          imgUrl="/pokemonSilhouette.png"
          name="Error"
        />
        <DetailsPokemonStats
          abilities={["Error"]}
          height={0}
          stats={{
            hp: 0,
            atk: 0,
            def: 0,
            satk: 0,
            sdef: 0,
            spd: 0,
          }}
          types={["type"]}
          weight={0}
        />
      </S.DetailsPokemonWrapper>
    );

  if (isLoading)
    return (
      <S.DetailsPokemonWrapper pokemonType="type">
        <DetailsPokemonHeader name="Loading..." number="000" />
        <DetailsPokemonImage
          id={0}
          imgUrl="/pokemonSilhouette.png"
          name="Loading..."
        />
        <DetailsPokemonStats
          abilities={["Loading..."]}
          height={0}
          stats={{
            hp: 0,
            atk: 0,
            def: 0,
            satk: 0,
            sdef: 0,
            spd: 0,
          }}
          types={["type"]}
          weight={0}
        />
      </S.DetailsPokemonWrapper>
    );

  return (
    <>
      {pokemonData && (
        <S.DetailsPokemonWrapper pokemonType={pokemonData.types[0]}>
          <DetailsPokemonHeader
            name={pokemonData.name}
            number={pokemonData.number}
          />
          <DetailsPokemonImage
            id={pokemonData.id}
            imgUrl={pokemonData.imgUrl}
            name={pokemonData.name}
          />
          <DetailsPokemonStats
            abilities={pokemonData.abilities}
            height={pokemonData.height}
            stats={pokemonData.stats}
            types={pokemonData.types}
            weight={pokemonData.weight}
          />
        </S.DetailsPokemonWrapper>
      )}
    </>
  );
};
