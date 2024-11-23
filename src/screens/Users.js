import { useState, useEffect } from "react";
import axios from "axios";

import SideBar from "../components/Navigation/SideBar";
import NavBar from "../components/Navigation/NavBar";

import UsersList from "../components/Users/UsersList";
import Spinner from "../components/Spinner/Spinner";
import Pagination from "../components/Navigation/Pagination";
import SearchBar from "../components/Search/SearchBar";
import { search } from "../components/Search/Search";
import AddUserModal from "../components/Users/AddUserModal";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [keyWord, setKeyWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const searchResult = search(keyWord, users);

  const handlePageClick = (data) => {
    let pageNumber = data.selected + 1;
    setCurrentPage(pageNumber);
  };

  // const handleDeleteUser = () => {}
  // const handleEditUser = () => {}
  // const handleAddUser = () => {};

  const itemPerPage = 10;

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const pageItems = keyWord.length
    ? searchResult.slice(indexOfFirstItem, indexOfLastItem)
    : users.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status === 200) {
          console.log(response);
          setUsers(response.data);
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
    <div className="container-fluid min-vh-100  bg-body-secondary">
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
              <AddUserModal />
              <UsersList users={pageItems} />
              {searchResult.length ? (
                <Pagination
                  itemPerPage={itemPerPage}
                  totalItems={
                    keyWord.length ? searchResult.length : users.length
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
