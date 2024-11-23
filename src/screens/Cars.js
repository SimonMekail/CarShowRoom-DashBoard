import { useState, useEffect } from "react";
import axios from "axios";

import SideBar from "../components/Navigation/SideBar";
import CarsList from "../components/Cars/CarsList";
import Spinner from "../components/Spinner/Spinner";
import Pagination from "../components/Navigation/Pagination";
import SearchBar from "../components/Search/SearchBar";
import NavBar from "../components/Navigation/NavBar";

import { search } from "../components/Search/Search";
import AddCarModal from "../components/Cars/AddCarModal";

export const Cars = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [keyWord, setKeyWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const searchResult = search(keyWord, cars);

  const handlePageClick = (data) => {
    let pageNumber = data.selected + 1;
    setCurrentPage(pageNumber);
  };

  // const handleDeleteCar = () => {}
  // const handleEditCar = () => {}
  // const handleAddCar = () => {};

  const itemPerPage = 9;

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const pageItems = keyWord.length
    ? searchResult.slice(indexOfFirstItem, indexOfLastItem)
    : cars.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    // setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setCars(response.data);
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
              <SearchBar
                keyWord={keyWord}
                setKeyWord={setKeyWord}
                setCurrentPage={setCurrentPage}
              />
              <AddCarModal />
              <CarsList cars={pageItems} />
              {searchResult.length ? (
                <Pagination
                  itemPerPage={itemPerPage}
                  totalItems={
                    keyWord.length ? searchResult.length : cars.length
                  }
                  handlePageClick={handlePageClick}
                />
              ) : (
                <p>no result</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
