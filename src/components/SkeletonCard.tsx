import type { individualPokemon } from "../models/pokemon.ts";

interface Props {
  individualInfo: individualPokemon[];
}


const SkeletonCard = ({individualInfo}:Props) => {
  return (
    <div className={`grid justify-items-center gap-6  mx-auto mt-5 ${individualInfo.length=== 1 ?'grid-cols-1' : 'grid-cols-1  md:grid-cols-2 lg:grid-cols-3'}`}>
      {Array(12)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col  w-56 h-52 bg-gray-300 items-center justify-center rounded-2xl animate-pulse"
          >
            <div className="flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mb-1"></div>
                <div className="w-12 h-5 bg-gray-200 mb-1"></div>
                <div className="w-12 h-5 bg-gray-200 mb-1"></div>
                <div className="w-18 h-5 bg-gray-200 mb-1"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkeletonCard;
