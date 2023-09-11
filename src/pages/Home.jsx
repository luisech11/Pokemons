import { useEffect } from "react";
import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { Navigate, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion"; // Importa motion y useAnimation de framer-motion

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const controls = useAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  useEffect(() => {
    // Animación de entrada al cargar la página
    controls.start({
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
      },
    });
  }, [controls]);

  return (
    <motion.main
      className="min-h-screen grid grid-rows-[1fr_auto] bg-gray-100"
      initial={{ opacity: 0, x: -100, scale: 0.5 }}
      animate={controls}
    >
      <section className="flex justify-center items-center p-4 bg-white rounded-lg shadow-md">
        <article className="grid gap-4 p-2">
          <div>
            <img
              src="/img/banner.png"
              alt=""
              className="max-w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-center text-[#FE1936] font-fira-Code font-bold text-3xl mb-2">
              Hello trainer!
            </h2>
            <p className="text-center font-fira-Code text-lg text-gray-600">
              Welcome to the Pokedex!
            </p>
          </div>

          <form
            className="flex flex-col items-center space-y-4 mt-4"
            onSubmit={handleSubmit}
          >
            <input
              className="shadow-md p-2 focus:outline-none rounded-md"
              autoComplete="off"
              id="nameTrainer"
              type="text"
              required
              placeholder="Your name..."
            />
            <button className="bg-red-500 p-2 px-6 text-white rounded-md hover:bg-red-600 transition duration-300">
              Start!
            </button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </motion.main>
  );
};

export default Home;
