export interface pokemonList {
    name: string;
    url: string;
}

export interface pokemonData {
    count: number | null;
    next: string;
    previous: string | null;
    results: pokemonList[];
}
interface pokemonType{
    slot: number;
    type:{
        name: string;
        url: string;
    }
}

export interface individualPokemon{
    name: string;
    id: number;
    sprites: {
        front_default: string;
    }
    types: pokemonType[];
}