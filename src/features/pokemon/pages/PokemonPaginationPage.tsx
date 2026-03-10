import { useSearchParams } from "react-router-dom";
import { usePokemonList, PAGE_SIZE } from "../hooks/usePokemonList";
import { PokemonGrid } from "../../../components/PokemonGrid";
import { PokemonCard } from "../../../components/PokemonCard";
import { SkeletonCard } from "../../../components/SkeletonCard";
import { PaginationControls } from "../../../components/PaginationControls";
import { ErrorState } from "../../../components/ErrorState";
import { extractIdFromUrl } from "../../../utils/formatters";

export function PokemonPaginationPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Math.max(1, Number(searchParams.get("page")) || 1);

  const { data, isLoading, isError, refetch, isFetching } =
    usePokemonList(page);

  const totalPages = data ? Math.ceil(data.count / PAGE_SIZE) : 0;

  function handlePageChange(newPage: number) {
    setSearchParams({ page: String(newPage) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (isError) {
    return (
      <ErrorState
        message="Failed to load Pokémon list. The API might be temporarily unavailable."
        onRetry={() => refetch()}
      />
    );
  }

  return (
    <div className={isFetching && !isLoading ? "opacity-60 transition-opacity" : ""}>
      <PokemonGrid>
        {isLoading
          ? Array.from({ length: PAGE_SIZE }).map((_, i) => (
              <SkeletonCard key={i} />
            ))
          : data?.results.map((pokemon) => {
              const id = extractIdFromUrl(pokemon.url);
              return <PokemonCard key={id} id={id} name={pokemon.name} />;
            })}
      </PokemonGrid>

      {totalPages > 1 && (
        <PaginationControls
          currentPage={page}
          totalPages={totalPages}
          totalCount={data?.count ?? 0}
          pageSize={PAGE_SIZE}
          onPageChange={handlePageChange}
          isLoading={isFetching}
        />
      )}
    </div>
  );
}
