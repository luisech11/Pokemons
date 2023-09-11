import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = ({ isLoading }) => {
  return (
    <div className={`fixed inset-0 flex justify-center items-center z-50 ${isLoading ? "block" : "hidden"}`}>
      <div className="bg-white p-4 rounded-full">
        <ClipLoader color={"#d63636"} loading={isLoading} size={50} />
      </div>
    </div>
  );
};

export default Loader;
