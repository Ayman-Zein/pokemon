import { useParams } from "react-router-dom";
import { usePokemonDetails } from "../hooks/usePokemonDetails";
import { ErrorState } from "../../../components/ErrorState";
import {
  capitalize,
  formatPokemonId,
  getOfficialArtwork,
  hectogramsToKg,
  decimetersToMeters,
  getTypeColor,
} from "../../../utils/formatters";

function DetailSkeleton() {
  return (
    <div className="min-h-screen bg-pink-50 px-4 py-8">
      <div className="mx-auto max-w-2xl animate-pulse">
        <div className="mb-6 h-6 w-28 rounded bg-pink-200" />
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="h-20 bg-linear-to-r from-purple-400 to-pink-400" />
          <div className="px-6 py-8">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
              <div className="h-48 w-48 rounded-full bg-gray-200" />
              <div className="flex-1 space-y-4">
                <div className="h-6 w-40 rounded bg-gray-200" />
                <div className="h-4 w-24 rounded bg-gray-200" />
                <div className="space-y-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-4 w-full rounded bg-gray-200" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PokemonDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: pokemon, isLoading, isError, refetch } = usePokemonDetails(id!);

  if (isLoading) return <DetailSkeleton />;

  if (isError || !pokemon) {
    return (
      <div className="min-h-screen bg-pink-50 px-4 py-8">
        <ErrorState
          message="Failed to load Pokémon details."
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  const maxStat = Math.max(...pokemon.stats.map((s) => s.base_stat), 255);

  return (
    <div className="min-h-screen bg-pink-50 px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <button
          onClick={() => window.history.back()}
          className="mb-6 inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
        >
          &larr; Back to List
        </button>

        <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        <div className="bg-linear-to-r from-purple-400 to-pink-400 px-6 py-6 text-center text-white">
          <h2 className="text-2xl font-bold">
            <span className="mr-1 text-yellow-300">⚡</span>
            {capitalize(pokemon.name)}
          </h2>
          <p className="text-sm text-white/80">
            {formatPokemonId(pokemon.id)}
          </p>
        </div>

        <div className="px-6 py-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            <div className="shrink-0">
              <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-gray-100 bg-gray-50 p-3">
                <img
                  src={getOfficialArtwork(pokemon.id)}
                  alt={pokemon.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="mt-4 flex justify-center gap-2">
                {pokemon.types.map((t) => (
                  <span
                    key={t.type.name}
                    className="rounded-full px-3 py-1 text-xs font-medium text-white"
                    style={{ backgroundColor: getTypeColor(t.type.name) }}
                  >
                    {capitalize(t.type.name)}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex justify-center gap-4">
                <div className="flex min-w-28 flex-col items-center rounded-xl bg-gray-50 px-5 py-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <span className="text-sm">📏</span>
                    <span className="font-medium">Height</span>
                  </div>
                  <p className="mt-1 text-lg font-bold text-gray-900">
                    {decimetersToMeters(pokemon.height)}
                  </p>
                </div>
                <div className="flex min-w-28 flex-col items-center rounded-xl bg-gray-50 px-5 py-3">
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <span className="text-sm">⚖️</span>
                    <span className="font-medium">Weight</span>
                  </div>
                  <p className="mt-1 text-lg font-bold text-gray-900">
                    {hectogramsToKg(pokemon.weight)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                Base Stats
              </h3>
              <div className="space-y-2.5">
                {pokemon.stats.map((stat) => (
                  <div key={stat.stat.name} className="flex items-center gap-3">
                    <span className="w-24 shrink-0 text-xs font-medium text-gray-500 capitalize">
                      {stat.stat.name.replace("-", " ")}
                    </span>
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-gray-100">
                      <div
                        className="h-full rounded-full bg-gray-800 transition-all duration-500"
                        style={{
                          width: `${(stat.base_stat / maxStat) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="w-8 text-right text-xs font-semibold text-gray-700">
                      {stat.base_stat}
                    </span>
                  </div>
                ))}
              </div>

              <h3 className="mt-6 mb-2 text-lg font-bold text-gray-900">
                Abilities
              </h3>
              <div className="flex flex-wrap gap-2">
                {pokemon.abilities.map((a) => (
                  <span
                    key={a.ability.name}
                    className="rounded-md border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600"
                  >
                    {capitalize(a.ability.name.replace("-", " "))}
                    {a.is_hidden && (
                      <span className="ml-1 text-gray-400">(hidden)</span>
                    )}
                  </span>
                ))}
              </div>

              <h3 className="mt-6 mb-1 text-lg font-bold text-gray-900">
                Base Experience
              </h3>
              <p className="text-lg font-bold text-green-600">
                {pokemon.base_experience} XP
              </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
