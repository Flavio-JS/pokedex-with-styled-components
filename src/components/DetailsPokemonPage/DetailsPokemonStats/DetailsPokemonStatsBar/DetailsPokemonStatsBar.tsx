import { DetailsPokemonStatsBarTypes } from "./DetailPokemonStatsBar.types";
import * as S from "./DetailsPokemonStatsBar.styles";

export const DetailsPokemonStatsBar = ({
  stats,
  types,
}: DetailsPokemonStatsBarTypes) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        width: "100%",
      }}
    >
      <S.DetailsPokemonStatsBarTitle pokemonType={types[0]}>
        Base Stats
      </S.DetailsPokemonStatsBarTitle>
      <S.DetailsPokemonStatsBarWrapper>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <S.DetailsPokemonStatsBarTitle pokemonType={types[0]}>
            HP
          </S.DetailsPokemonStatsBarTitle>
          <S.DetailsPokemonStatsBarTitle pokemonType={types[0]}>
            ATK
          </S.DetailsPokemonStatsBarTitle>
          <S.DetailsPokemonStatsBarTitle pokemonType={types[0]}>
            DEF
          </S.DetailsPokemonStatsBarTitle>
          <S.DetailsPokemonStatsBarTitle pokemonType={types[0]}>
            SATK
          </S.DetailsPokemonStatsBarTitle>
          <S.DetailsPokemonStatsBarTitle pokemonType={types[0]}>
            SDEF
          </S.DetailsPokemonStatsBarTitle>
          <S.DetailsPokemonStatsBarTitle pokemonType={types[0]}>
            SPD
          </S.DetailsPokemonStatsBarTitle>
        </div>
        <div
          style={{
            borderLeft: "1px solid #E0E0E0",
            height: "96px",
            width: "1px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: "10px" }}>{stats.hp}</span>
          <span style={{ fontSize: "10px" }}>{stats.atk}</span>
          <span style={{ fontSize: "10px" }}>{stats.def}</span>
          <span style={{ fontSize: "10px" }}>{stats.satk}</span>
          <span style={{ fontSize: "10px" }}>{stats.sdef}</span>
          <span style={{ fontSize: "10px" }}>{stats.spd}</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <div style={{ display: "flex" }}>
            <S.DetailsPokemonStatsBarRow
              pokemonType={types[0]}
              style={{ minWidth: `${(stats.hp * 100) / 255}%` }}
            />
            <S.DetailsPokemonStatsBarRowFull pokemonType={types[0]} />
          </div>

          <div style={{ display: "flex" }}>
            <S.DetailsPokemonStatsBarRow
              pokemonType={types[0]}
              style={{ minWidth: `${(stats.atk * 100) / 255}%` }}
            />
            <S.DetailsPokemonStatsBarRowFull pokemonType={types[0]} />
          </div>

          <div style={{ display: "flex" }}>
            <S.DetailsPokemonStatsBarRow
              pokemonType={types[0]}
              style={{ minWidth: `${(stats.def * 100) / 255}%` }}
            />
            <S.DetailsPokemonStatsBarRowFull pokemonType={types[0]} />
          </div>

          <div style={{ display: "flex" }}>
            <S.DetailsPokemonStatsBarRow
              pokemonType={types[0]}
              style={{ minWidth: `${(stats.satk * 100) / 255}%` }}
            />
            <S.DetailsPokemonStatsBarRowFull pokemonType={types[0]} />
          </div>

          <div style={{ display: "flex" }}>
            <S.DetailsPokemonStatsBarRow
              pokemonType={types[0]}
              style={{ minWidth: `${(stats.sdef * 100) / 255}%` }}
            />
            <S.DetailsPokemonStatsBarRowFull pokemonType={types[0]} />
          </div>

          <div style={{ display: "flex" }}>
            <S.DetailsPokemonStatsBarRow
              pokemonType={types[0]}
              style={{ minWidth: `${(stats.spd * 100) / 255}%` }}
            />
            <S.DetailsPokemonStatsBarRowFull pokemonType={types[0]} />
          </div>
        </div>
      </S.DetailsPokemonStatsBarWrapper>
    </div>
  );
};
