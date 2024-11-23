import React from "react";

const Spinner = () => {
  return (
    <div className="bg-body-secondary text-center min-vh-100">
      <div className="spinner-border my-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
