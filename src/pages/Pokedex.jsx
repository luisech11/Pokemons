import { useEffect, useState } from "react";
import ErrorMessage from "../components/Error/ErrorMessage";
import Loader from "../components/loader/Loader";
import PokemonList from "../components/pokedex/PokemonList";
import usePokedex from "../hooks/usePokedex";
import { paginateData } from "../utils/pagination";
import Paginations from "../components/pokedex/Paginations";
import { motion } from "framer-motion";

const Pokedex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    name,
    pokemonName,
    setPokemonType,
    pokemonType,
    handleChange,
    setPokemonName,
    pokemonsByName,
    isError,
    isLoading,
    types,
  } = usePokedex();

  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginateData(
    pokemonsByName,
    currentPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [pokemonType]);

  return (
    <main className="bg-gray-100 min-h-screen">
      {isLoading && <Loader isLoading={isLoading} />}
      {isError && <ErrorMessage />}
      {!isError && (
        <>
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-4 p-4 px-8 font-inter max-w-[1024px] mx-auto"
          >
            <h1 className="text-red-500 font-fira-Code font-bold text-center text-3xl uppercase">
              Welcome {name}
            </h1>
            <p className="text-center font-fira-Code text-lg">
              Here you can find your favorite Pokémon
            </p>
            <form className="grid gap-4 justify-center sm:flex sm:gap-4 font-fira-Code">
              <motion.input
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="shadow-md p-2 focus:outline-none sm:w-[300px]"
                value={pokemonName}
                onChange={handleChange(setPokemonName)}
                type="text"
                placeholder="Search Pokémon ..."
              />
              <motion.select
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="shadow-sm p-2 focus:outline-none rounded-md sm:w-[200px]"
                value={pokemonType}
                onChange={handleChange(setPokemonType)}
              >
                <option value="">All Pokémon</option>
                {types.map((type) => (
                  <option className="capitalize" key={type.url} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </motion.select>
            </form>
          </motion.section>
          <Paginations
            lastPage={lastPage}
            pagesInCurrentBlock={pagesInCurrentBlock}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
          <PokemonList pokemons={itemsInCurrentPage} />
        </>
      )}
    </main>
  );
};

export default Pokedex;
