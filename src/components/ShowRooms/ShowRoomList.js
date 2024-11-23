import { Link } from "react-router-dom";

import test from "../../assests/test2.jpg";
import DeleteShowRoomModal from "./DeleteShowRoomModal";
import EditShowRoomModal from "./EditShowRoomModal";

const ShowRoomList = ({ ShowRooms }) => {
  const showRoomList = ShowRooms.map((showRoom) => (
    <div key={showRoom.id} className="card col-3 shadow-lg m-3 p-0">
      <img className="card-img-top w-100" src={test} alt="..." />
      <div className="card-body">
        <h5 className="card-title">ShowRoom Name</h5>
        <p className="card-text">Location</p>
        <Link to={`/showRoom/${showRoom.id}`} className="btn btn-primary">
          Details
        </Link>
        <div className="mx-5 d-inline">
          <EditShowRoomModal />
          <DeleteShowRoomModal />
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container ">
      <div className="row justify-content-center">{showRoomList}</div>
    </div>
  );
};
export default ShowRoomList;
