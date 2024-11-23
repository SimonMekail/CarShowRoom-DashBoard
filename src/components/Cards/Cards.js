import usersIcon from "../../assests/users.png";
import carsIcon from "../../assests/cars.png";
import storesIcon from "../../assests/stores.png";
import ordersIcon from "../../assests/orders.png";

const Cards = () => {
  return (
    <div className="row justify-content-center px-2">
      <div className="card shadow-lg rounded-4 col m-3">
        <div className="row g-0">
          <div className="col pt-3">
            <img src={usersIcon} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <p className="card-title fs-5">1122</p>
              <p className="card-text text-muted">Total Users</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-lg rounded-4 col m-3">
        <div className="row g-0">
          <div className="col pt-3">
            <img src={carsIcon} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <p className="card-title fs-5">232</p>
              <p className="card-text text-muted">Total Cars</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-lg rounded-4 col m-3">
        <div className="row g-0">
          <div className="col pt-3">
            <img src={storesIcon} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <p className="card-title fs-5">120</p>
              <p className="card-text text-muted">Total Stores</p>
            </div>
          </div>
        </div>
      </div>
      <div className="card shadow-lg rounded-4 col m-3">
        <div className="row g-0">
          <div className="col pt-3">
            <img src={ordersIcon} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body ">
              <p className="card-title fs-5">1205</p>
              <p className="card-text text-muted">Transactions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
