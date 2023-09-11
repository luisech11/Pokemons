const BarProgresStat = ({ stat }) => {
  const getPercentBarProgress = (statValue) => {
    const MAX_STAT_VALUE = 255;
    const percent = (100 * statValue) / MAX_STAT_VALUE;
    return `${percent}%`;
  };

  return (
    <article className="bg-gray-900 text-white rounded-lg p-4 mb-4">
      <section className="flex justify-between px-2">
        <h5 className="text-lg font-semibold">{stat.name}</h5>
        <span className="text-lg font-bold">{stat.value}/255</span>
      </section>
      <div className="h-8 bg-slate-700 rounded-md overflow-hidden mt-2">
        <div
          style={{ width: getPercentBarProgress(stat.value) }}
          className="h-full bg-gradient-to-r from-yellow-500 to-orange-500"
        ></div>
      </div>
    </article>
  );
};

export default BarProgresStat;
