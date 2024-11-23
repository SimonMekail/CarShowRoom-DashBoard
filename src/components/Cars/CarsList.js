import { Link } from "react-router-dom";

import test from "../../assests/test.jpg";
import DeleteCarModal from "./DeleteCarModal";
import EditCarModal from "./EditCarModal";

const CarsList = ({ cars }) => {
  const carsList = cars.map((car) => (
    <div key={car.id} className="card col-3 shadow-lg m-3 p-0">
      <img className="card-img-top w-100" src={test} alt="..." />
      <div className="card-body">
        <h5 className="card-title">Car Brand</h5>
        <p className="card-text">Car ShowRoom</p>
        <Link to={`/car/${car.id}`} className="btn btn-primary">
          Details
        </Link>
        <div className="mx-5 d-inline">
          <EditCarModal />

          <DeleteCarModal />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container ">
      <div className="row justify-content-center">{carsList}</div>
    </div>
  );
};
export default CarsList;
