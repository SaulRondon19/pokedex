import React from "react";

interface Props {
  searchedPokemon: string;
  setSearchedPokemon: React.Dispatch<React.SetStateAction<string>>;
}

const InputPokemon = ({ searchedPokemon, setSearchedPokemon }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mr-7">
        <input
          type="text"
          placeholder="Search pokemon: "
          value={searchedPokemon}
          onChange={(e) => setSearchedPokemon(e.target.value)}
          className="border border-black rounded-2xl pl-2 bg-gray-200 mr-1"
        />
        
      </form>
    </div>
  );
};

export default InputPokemon;