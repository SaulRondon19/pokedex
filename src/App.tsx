import InputPokemon from "./components/InputPokemon";
import { useState } from "react";
import DisplayPokemon from "./components/DisplayPokemon";
import usePokemon from "./hooks/usePokemon";
import DisplayError from "./components/DisplayError";
import SkeletonCard from "./components/SkeletonCard";

function App() {
  const [searchedPokemon, setSearchedPokemon] = useState<string>("");
  const { loading, error, individualInfo, loadMore } =
    usePokemon(searchedPokemon);

  return (
    <div className="bg-[#FF6467] font-neucha text-xl min-h-screen">
      <header className="bg-white h-16 flex flex-row items-center justify-between">
        <div className="flex flex-row ml-5">
          <p className="font-pressstart text-2xl">Pokedex!</p>
        </div>
        <InputPokemon
          searchedPokemon={searchedPokemon}
          setSearchedPokemon={setSearchedPokemon}
        />
      </header>
      <main className="flex flex-col items-center pb-10">
        {error ? (
          <div className="flex items-center justify-center mt-10">
            <DisplayError />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center">
            {individualInfo.length > 0 && (
              <DisplayPokemon individualInfo={individualInfo} />
            )}

            
            {loading && <SkeletonCard individualInfo={individualInfo} />}

            {!loading &&
              searchedPokemon.trim() === "" &&
              individualInfo.length > 0 && (
                <button
                  onClick={loadMore}
                  className="bg-white rounded-2xl w-32 mt-3 flex items-center justify-center"
                >
                  Load more
                </button>
              )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
