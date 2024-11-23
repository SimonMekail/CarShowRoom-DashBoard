import { useState, useEffect } from "react";
import axios from "axios";

import SideBar from "../components/Navigation/SideBar";
import Spinner from "../components/Spinner/Spinner";
import Pagination from "../components/Navigation/Pagination";
import SearchBar from "../components/Search/SearchBar";
import NavBar from "../components/Navigation/NavBar";

import ShowRoomList from "../components/ShowRooms/ShowRoomList";
import { search } from "../components/Search/Search";
import AddShowRoomModal from "../components/ShowRooms/AddShowRoomModal";

export const ShowRooms = () => {
  const [showrooms, setShowRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [keyWord, setKeyWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const searchResult = search(keyWord, showrooms);

  const handlePageClick = (data) => {
    let pageNumber = data.selected + 1;
    setCurrentPage(pageNumber);
  };

  // const handleDeleteShowRoom = () => {}
  // const handleEditShowRoom = () => {}
  // const handleAddShowRoom = () => {};

  const itemPerPage = 9;

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const pageItems = keyWord.length
    ? searchResult.slice(indexOfFirstItem, indexOfLastItem)
    : showrooms.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    // setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setShowRooms(response.data);
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
              <AddShowRoomModal />
              <ShowRoomList ShowRooms={pageItems} />
              {searchResult.length ? (
                <Pagination
                  itemPerPage={itemPerPage}
                  totalItems={
                    keyWord.length ? searchResult.length : showrooms.length
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
