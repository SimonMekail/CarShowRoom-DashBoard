import React from "react";
import { NavLink, Link } from "react-router-dom";

// import carIcon from "../../assests/car_Icon.png";
import "../../App.css";

const SideBar = () => {
  return (
    <>
      <NavLink
        to="/login"
        className="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        {/* <img src={carIcon} className="" alt="icon" /> */}

        <span className="fs-5 d-none m-2 d-sm-inline">Menu</span>
        {/* <i className="fs-1 bi bi-people-fill"></i> */}
      </NavLink>
      <ul
        className="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
        id="menu"
      >
        <li className="nav-item my-1">
          <NavLink to="/" className="sideBarHover nav-link text-info">
            <i className="fs-4 bi-house"></i>
            <span className="ms-3 d-none d-sm-inline">Home</span>
          </NavLink>
        </li>

        <li className="nav-item my-1">
          <NavLink
            to="/users"
            className="sideBarHover nav-link align-middle text-info"
          >
            <i className="fs-4 bi bi-people-fill"></i>
            <span className="ms-3 d-none d-sm-inline">Users</span>
          </NavLink>
        </li>
        <li className="nav-item my-1">
          <NavLink
            to="/cars"
            className="sideBarHover nav-link align-middle  text-info"
          >
            <i className="fs-4 bi-car-front-fill"></i>
            <span className="ms-3 d-none d-sm-inline">Cars</span>
          </NavLink>
        </li>
        <li className="nav-item my-1">
          <NavLink
            to="/showrooms"
            className="sideBarHover nav-link align-middle  text-info"
          >
            <i className="fs-4 bi bi-shop-window"></i>
            <span className="ms-3 d-none d-sm-inline">ShowRooms</span>
          </NavLink>
        </li>

        <li className="nav-item my-1">
          <NavLink
            to="/transactions"
            className="sideBarHover nav-link align-middle  text-info"
          >
            <i className="fs-4 bi bi-coin"></i>
            <span className="ms-3 d-none d-sm-inline">Transactions</span>
          </NavLink>
        </li>
        <div className="position-absolute bottom-0 start-0">
          <li className="nav-item  px-3">
            <Link
              to="/"
              className="sideBarHover nav-link align-middle text-info"
            >
              <i className="fs-4 bi bi-box-arrow-left"></i>
              <span className="ms-3 d-none d-sm-inline">Logout</span>
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
};

export default SideBar;
