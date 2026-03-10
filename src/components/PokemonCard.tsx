import { memo } from "react";
import { Link } from "react-router-dom";
import {
  capitalize,
  formatPokemonId,
  getOfficialArtwork,
} from "../utils/formatters";

interface PokemonCardProps {
  id: number;
  name: string;
}

export const PokemonCard = memo(function PokemonCard({
  id,
  name,
}: PokemonCardProps) {
  return (
    <Link
      to={`/pokemon/${id}`}
      className="group rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex flex-col items-center">
        <div className="relative mb-2 aspect-square w-full overflow-hidden rounded-lg bg-gray-50 p-2">
          <img
            src={getOfficialArtwork(id)}
            alt={name}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-110"
          />
        </div>
        <h3 className="text-sm font-semibold text-gray-800">
          {capitalize(name)}
        </h3>
        <span className="text-xs text-gray-400">{formatPokemonId(id)}</span>
      </div>
    </Link>
  );
});
