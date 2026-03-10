import { useQuery } from "@tanstack/react-query";
import { fetchPokemonDetail } from "../../../api/pokemonApi";

export function usePokemonDetails(id: number | string) {
  return useQuery({
    queryKey: ["pokemon-detail", id],
    queryFn: () => fetchPokemonDetail(id),
    staleTime: 10 * 60 * 1000,
    enabled: !!id,
  });
}
