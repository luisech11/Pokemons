import BarProgresStat from "./BarProgresStat";

const StatBarList = ({ stats }) => {
  return (
    <section className="p-4 w-[90%] mx-auto bg-white border border-red-500 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-red-500 mb-4">Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats?.map((stat, index) => (
          <div
            key={stat.name}
            className="bg-blue-300 rounded-lg p-4 border border-blue-500 transform hover:scale-105 transition-transform duration-300 ease-in-out animate-pulse"
          >
            <BarProgresStat stat={stat} />
            <p className="text-center text-gray-700 mt-2">{stat.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatBarList;
