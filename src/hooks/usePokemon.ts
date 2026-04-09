import { useState, useEffect } from "react";
import type { individualPokemon, pokemonData } from "../models/pokemon.ts";

const usePokemon = (searchedPokemon: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [individualInfo, setIndividualInfo] = useState<individualPokemon[]>([]);
  const [debouncedSearch, setDebouncedSearch] = useState(searchedPokemon);
  const [nextURL, setNextURL] = useState("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
  const loadMore = () =>{
    fetchData(true);
  }
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchedPokemon);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchedPokemon]);

  useEffect(() => {
    fetchData(false);
  }, [debouncedSearch]);

  const fetchData = async (isAcumulating = false) => {
    setLoading(true);
    setError("");
    //const baseURL = "https://pokeapi.co/api/v2/pokemon/";

    try {
      if (debouncedSearch.trim() !== "") {
        isAcumulating = false;
        // Búsqueda por nombre específico
        const finalURL = `https://pokeapi.co/api/v2/pokemon/${debouncedSearch.trim().toLowerCase()}`;
        const response = await fetch(finalURL);
        if (!response.ok) throw new Error("Pokemon not found!");
        const data = await response.json();
        setIndividualInfo([data]);
      } else {
        const urlToUse = isAcumulating ? nextURL : "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
        // Carga inicial de la lista
        const response = await fetch(urlToUse);
        if (!response.ok) throw new Error("Error fetching list.");
        const listData: pokemonData = await response.json();
        setNextURL(listData.next)
        const detailedPromises = listData.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        });
        const allDetailedPokemon: individualPokemon[] = await Promise.all(detailedPromises);
        if(isAcumulating){
          setIndividualInfo(prev => [...prev, ...allDetailedPokemon]);
        }else{
          setIndividualInfo(allDetailedPokemon);
        }
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, individualInfo, loadMore };
};

export default usePokemon;