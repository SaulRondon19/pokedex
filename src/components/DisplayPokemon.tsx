import type { individualPokemon } from "../models/pokemon.ts";

interface Props {
  individualInfo: individualPokemon[];
}

const DisplayPokemon = ({ individualInfo}: Props) => {
  const bgColorList: Record<string, string> = {
    grass: "bg-green-500",
    fire: "bg-red-500",
    water: "bg-blue-500",
    bug: "bg-lime-500",
    normal: "bg-gray-300",
    electric: "bg-yellow-500"
  }
  return (
    <div className={`grid justify-items-center gap-6  mx-auto mt-5 ${individualInfo.length=== 1 ?'grid-cols-1' : 'grid-cols-1  md:grid-cols-2 lg:grid-cols-3'}`}>
      {individualInfo.map((pokemon) => (
        <div
          key={pokemon.id}
          className="flex flex-col  w-56 h-52 bg-white   items-center justify-center rounded-2xl"
        >
          <img src={pokemon.sprites.front_default} alt={`Image of ${pokemon.name}`}/>
          <div className="flex flex-col items-center justify-center">
            <span className="text-gray-400 text-sm">{"#" + pokemon.id.toString().padStart(3, "00")}</span>
            <span className="first-letter:capitalize">{pokemon.name}</span>
            <span className={`${bgColorList[pokemon.types[0].type.name]} w-18 flex justify-center items-center rounded-2xl`}>{pokemon.types[0].type.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayPokemon;
