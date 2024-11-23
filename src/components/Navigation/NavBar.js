import React from "react";

// import carIcon from "../../assests/car_Icon (2).png";

import "../../App.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-white rounded-3 m-2 ms-3 shadow-sm">
        <div className="container-fluid">
          <span className="navbar-brand">DashBoard</span>
          {/* <img src={carIcon} className="" alt="icon" /> */}

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
