import Cards from "../components/Cards/Cards";
import BarChart from "../components/Charts/BarChart";
import LineChart from "../components/Charts/LineChart";
import SideBar from "../components/Navigation/SideBar";
import NavBar from "../components/Navigation/NavBar";
import RecentActivity from "../components/Recent Activity/RecentActivity";

export const Home = () => {
  return (
    <div className="container-fluid min-vh-100 bg-body-secondary">
      <div className="row">
        <div className="col-2 bg-dark vh-100 sticky-top">
          <SideBar />
        </div>

        <div className="col ps-0 ">
          <NavBar />
          <Cards />
          <div className="row justify-content-center my-3">
            <BarChart />
            <LineChart />
          </div>
          <div className="row justify-content-center my-4">
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};
