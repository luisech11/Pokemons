import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import StatBarList from "../components/pokemonDetail/StatBarList";
import Movents from "../components/pokemonDetail/Movents";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, [pokemonId]);

  return (
    <main className="bg-gray-100 min-h-screen">
      <div className="bg-yellow-500 py-8 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-3xl font-bold hover:underline"
          >
            &larr; Back to Pokédex
          </Link>
          <h1 className="text-4xl font-bold">Pokemon Details</h1>
          <div></div>
        </div>
      </div>
      {pokemonData && (
        <div className="container mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
          <div className="flex items-center justify-center">
            <img
              src={pokemonData.image}
              alt={pokemonData.name}
              className="w-64 h-64"
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-3xl font-bold capitalize">
              {pokemonData.name}
            </h2>
            <p className="text-xl text-gray-600"># {pokemonData.id}</p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-blue-200 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold">Types</h3>
              <div className="flex space-x-2 mt-2">
                {pokemonData.types.map((type) => (
                  <span
                    key={type}
                    className={`px-3 py-1 text-white rounded-md text-sm bg-${type.toLowerCase()} uppercase`}
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-blue-200 p-4 rounded-lg">
              <h3 className="text-2xl font-semibold">Abilities</h3>
              <ul className="mt-2 list-disc list-inside">
                {pokemonData.abilities.map((ability) => (
                  <li key={ability} className="text-gray-700">
                    {ability}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold">Base Stats</h3>
            <StatBarList stats={pokemonData.stats} />
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold">Moves</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
              {pokemonData.moves.map((move) => (
                <Movents key={move} moves={move} />
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default PokemonDetail;
