import axios from "axios";
import type { PokemonDetail, PokemonListResponse } from "../types/pokemon";

const LOCAL_ENDPOINT = import.meta.env.VITE_LOCAL_ENDPOINT;
const API_URL = import.meta.env.VITE_API_URL ?? "https://pokeapi.co/api/v2";

// const BASE_URL = LOCAL_ENDPOINT ?? API_URL;
const BASE_URL = API_URL ?? LOCAL_ENDPOINT;

const api = axios.create({
  baseURL: BASE_URL,
});

export async function fetchPokemonList(
  limit: number,
  offset: number,
): Promise<PokemonListResponse> {
  const { data } = await api.get<PokemonListResponse>("/pokemon", {
    params: { limit, offset },
  });
  return data;
}

export async function fetchPokemonDetail(
  id: number | string,
): Promise<PokemonDetail> {
  const { data } = await api.get<PokemonDetail>(`/pokemon/${id}`);
  return data;
}
