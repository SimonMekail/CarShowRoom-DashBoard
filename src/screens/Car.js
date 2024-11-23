import { useState, useEffect } from "react";
import axios from "axios";

import SideBar from "../components/Navigation/SideBar";
import NavBar from "../components/Navigation/NavBar";

import CarDetails from "../components/Cars/CarDetails";
import Spinner from "../components/Spinner/Spinner";

export const Car = () => {
  const [car, setCar] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setCar(response.data[0].title);
          setIsLoading(false);
        } else {
          console.log(response.data.message);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="container-fluid min-vh-100 bg-body-secondary">
      <div className="row">
        <div className="col-2 bg-dark vh-100 sticky-top">
          <SideBar />
        </div>
        <div className="col ps-0">
          <NavBar />

          {isLoading ? (
            <Spinner />
          ) : (
            <>
              <CarDetails carDetails={car} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};