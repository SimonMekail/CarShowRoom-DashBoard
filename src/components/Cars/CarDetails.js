import test from "../../assests/test.jpg";
import CarDetailsChart from "../Charts/CarDetailsChart";
import HorizontalBarChart from "../Charts/horizontalBarChart";
// import PieChart from "../Charts/pieChart";

const CarDetails = ({ carDetails }) => {
  return (
    <div className="container ">
      <div className="row fs-5 justify-content-center text-center mx-2 my-5 ">
        <div className="col">
          <i className="bi bi-speedometer mx-2"></i> Engine : 100
        </div>
        <div className="col">
          <i className="bi bi-battery-full mx-2"></i>Battery : 100
        </div>
        <div className="col">
          <i class="bi bi-currency-dollar mx-2"></i>Price : 1000
        </div>
        <div className="col">
          <i className="bi bi-fuel-pump mx-2"></i>Fuel Tank : 100
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-8 my-2">
          <img src={test} className="img-fluid rounded" alt="..." />
        </div>
      </div>

      <div className="row justify-content-center text-center m-2">
        <CarDetailsChart />
        <HorizontalBarChart />
        {/* <PieChart /> */}
      </div>
      {/* {carDetails} */}
    </div>
  );
};
export default CarDetails;
