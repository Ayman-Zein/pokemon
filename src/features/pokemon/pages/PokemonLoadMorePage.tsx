import { usePokemonLoadMore } from "../hooks/usePokemonLoadMore";
import { PokemonGrid } from "../../../components/PokemonGrid";
import { PokemonCard } from "../../../components/PokemonCard";
import { SkeletonCard } from "../../../components/SkeletonCard";
import { LoadMoreButton } from "../../../components/LoadMoreButton";
import { ErrorState } from "../../../components/ErrorState";
import { extractIdFromUrl } from "../../../utils/formatters";

export function PokemonLoadMorePage() {
  const {
    data,
    isLoading,
    isError,
    refetch,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePokemonLoadMore();

  if (isError) {
    return (
      <ErrorState
        message="Failed to load Pokémon list. The API might be temporarily unavailable."
        onRetry={() => refetch()}
      />
    );
  }

  const allPokemon =
    data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <>
      <PokemonGrid>
        {isLoading
          ? Array.from({ length: 20 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : allPokemon.map((pokemon) => {
              const id = extractIdFromUrl(pokemon.url);
              return <PokemonCard key={id} id={id} name={pokemon.name} />;
            })}
      </PokemonGrid>

      {!isLoading && (
        <LoadMoreButton
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          hasMore={!!hasNextPage}
          loadedCount={allPokemon.length}
        />
      )}
    </>
  );
}
