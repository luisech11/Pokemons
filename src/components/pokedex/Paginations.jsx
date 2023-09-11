import React from "react";

const Paginations = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
}) => {
  const FIRST_PAGE = 1;

  const handleLastPage = () => {
    setCurrentPage(lastPage);
  };

  const handleNextPage = () => {
    setCurrentPage((prevState) => {
      const nextPage = prevState + 1;
      if (nextPage <= lastPage) return nextPage;
      return prevState;
    });
  };

  const handlePreviusPage = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage - 1;
      if (newPage >= FIRST_PAGE) return newPage;
      return prevPage;
    });
  };

  const handleFirstPage = () => {
    setCurrentPage(FIRST_PAGE);
  };

  return (
    <ul className="cursor-pointer flex justify-center py-8 items-center font-fira-code">
      {currentPage >= 2 && (
        <li className="flex" onClick={handleFirstPage}>
          <i className="text-3xl sm:text-5xl bx bx-chevrons-left"></i>
        </li>
      )}
      {currentPage >= 2 && (
        <li className="flex" onClick={handlePreviusPage}>
          <i className="text-3xl sm:text-5xl bx bx-chevron-left"></i>
        </li>
      )}

      {pagesInCurrentBlock.map((page) => (
        <li
          className={`text-xl sm:text-2xl p-2 px-4 sm:px-5 rounded-sm ${
            currentPage === page ? "text-white bg-red-500" : ""
          }`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}
      <li className="flex" onClick={handleNextPage}>
        <i className="text-3xl sm:text-5xl bx bx-chevron-right"></i>
      </li>
      <li className="flex" onClick={handleLastPage}>
        <i className="text-3xl sm:text-5xl bx bx-chevrons-right"></i>
      </li>
    </ul>
  );
};

export default Paginations;
