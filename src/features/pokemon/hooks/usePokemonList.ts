import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchPokemonList } from "../../../api/pokemonApi";

const PAGE_SIZE = 20;

export function usePokemonList(page: number) {
  const offset = (page - 1) * PAGE_SIZE;

  return useQuery({
    queryKey: ["pokemon-list", page],
    queryFn: () => fetchPokemonList(PAGE_SIZE, offset),
    placeholderData: keepPreviousData,
    staleTime: 5 * 60 * 1000,
  });
}

export { PAGE_SIZE };
