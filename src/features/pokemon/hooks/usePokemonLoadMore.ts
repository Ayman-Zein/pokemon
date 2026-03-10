import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../../../api/pokemonApi";

const BATCH_SIZE = 20;

export function usePokemonLoadMore() {
  return useInfiniteQuery({
    queryKey: ["pokemon-infinite"],
    queryFn: ({ pageParam = 0 }) => fetchPokemonList(BATCH_SIZE, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) return undefined;
      const url = new URL(lastPage.next);
      return Number(url.searchParams.get("offset"));
    },
    staleTime: 5 * 60 * 1000,
  });
}
