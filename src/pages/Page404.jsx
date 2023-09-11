import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 flex flex-col justify-center items-center">
      <p className="text-6xl text-white opacity-20 absolute top-5 left-5">404</p>
      <div className="text-red-500 text-6xl">⚠️</div>
      <h2 className="text-3xl text-white mt-8 font-semibold">
        Looks like you're lost
      </h2>
      <h5 className="text-gray-300 mt-2">
        The page you are looking for is not available.
      </h5>
      <Link
        to="/"
        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white text-lg px-6 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
      >
        Go to Home
      </Link>
    </section>
  );
};

export default Page404;
