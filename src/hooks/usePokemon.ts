import { useState, useEffect } from "react";
import type { individualPokemon, pokemonData } from "../models/pokemon.ts";

const usePokemon = (searchedPokemon: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [individualInfo, setIndividualInfo] = useState<individualPokemon[]>([]);
  const [debouncedSearch, setDebouncedSearch] = useState(searchedPokemon);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchedPokemon);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchedPokemon]);

  useEffect(() => {
    fetchData();
  }, [debouncedSearch]);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    const baseURL = "https://pokeapi.co/api/v2/pokemon/";

    try {
      if (debouncedSearch.trim() !== "") {
        // Búsqueda por nombre específico
        const finalURL = `${baseURL}${debouncedSearch.trim().toLowerCase()}`;
        const response = await fetch(finalURL);
        if (!response.ok) throw new Error("Pokemon not found!");
        const data = await response.json();
        setIndividualInfo([data]);
      } else {
        // Carga inicial de la lista
        const response = await fetch(baseURL);
        if (!response.ok) throw new Error("Error fetching list.");
        const listData: pokemonData = await response.json();

        const detailedPromises = listData.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        });

        const allDetailedPokemon: individualPokemon[] = await Promise.all(detailedPromises);
        setIndividualInfo(allDetailedPokemon);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, individualInfo };
};

export default usePokemon;