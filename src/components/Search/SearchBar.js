const SearchBar = ({ keyWord, setKeyWord, setCurrentPage }) => {
  return (
    <div className="container ">
      <div className="row justify-content-center">
        <div className="col-4 m-3">
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
              value={keyWord}
              onChange={(e) => {
                setKeyWord(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
        <div className="col-2 my-3">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
