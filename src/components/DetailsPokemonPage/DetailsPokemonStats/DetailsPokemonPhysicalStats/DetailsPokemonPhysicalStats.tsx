import { Icon } from "@/components/Icon/Icon";
import * as S from "./DetailsPokemonPhysicalStats.styles";
import { DetailsPokemonPhysicalStatsTypes } from "./DetailsPokemonPhysicalStats.types";

export const DetailsPokemonPhysicalStats = ({
  abilities,
  height,
  weight,
}: DetailsPokemonPhysicalStatsTypes) => {
  return (
    <S.DetailsPokemonPhysicalStatsWrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            fontSize: "10px",
          }}
        >
          <Icon iconName="WeightIcon" />
          {weight / 10} kg
        </div>
        <span style={{ fontSize: "8px", color: "#666" }}>Weight</span>
      </div>

      <div
        style={{
          borderLeft: "1px solid #E0E0E0",
          height: "64px",
          width: "1px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            fontSize: "10px",
          }}
        >
          <Icon iconName="RulerIcon" />
          {height / 10} m
        </div>
        <span
          style={{
            fontSize: "8px",
            color: "#666",
          }}
        >
          Height
        </span>
      </div>

      <div
        style={{
          borderLeft: "1px solid #E0E0E0",
          height: "64px",
          width: "1px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "10px",
          }}
        >
          {abilities.map((abilitie, i) => (
            <span key={`${abilitie + i}`}>{abilitie}</span>
          ))}
        </div>
        <span
          style={{
            fontSize: "8px",
            color: "#666",
          }}
        >
          Moves
        </span>
      </div>
    </S.DetailsPokemonPhysicalStatsWrapper>
  );
};
