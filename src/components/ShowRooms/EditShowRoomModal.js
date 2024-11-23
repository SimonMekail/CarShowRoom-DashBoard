import { useEffect, useState } from "react";

import { Toast } from "bootstrap";
import carIcon from "../../assests/car_Icon.png";

const EditShowRoomModal = () => {
  const [car_showroom_image, setCar_showroom_image] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const toastTrigger = document.getElementById("editLiveToastBtn");
    const toastLiveExample = document.getElementById("editLiveToast");

    if (toastTrigger) {
      const toastBootstrap = Toast.getOrCreateInstance(toastLiveExample);
      toastTrigger.addEventListener("click", () => {
        toastBootstrap.show();
      });
    }
  }, []);

  return (
    <>
      <button
        className="bg-body border-0 fs-4 text-primary mx-2"
        data-bs-toggle="modal"
        data-bs-target="#EditShowRoomModal"
      >
        <i className="bi bi-pencil-fill"></i>
      </button>

      <div
        className="modal fade"
        id="EditShowRoomModal"
        tabIndex="-1"
        aria-labelledby="EditShowRoomModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="EditShowRoomModalLabel">
                Edit ShowRoom Information
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="m-3 mb-5">
              <div className="mb-1">
                <label htmlFor="Image" className="col-form-label">
                  Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  value={car_showroom_image}
                  onChange={(e) => setCar_showroom_image(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="country" className="col-form-label">
                  Country:
                </label>
                <input
                  className="form-control"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="name" className="col-form-label">
                  Name:
                </label>
                <input
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="description" className="col-form-label">
                  Description:
                </label>
                <input
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </form>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                id="editLiveToastBtn"
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="editLiveToast"
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <img src={carIcon} className="rounded me-2" alt="..." />
            <strong className="me-auto">Notifaction</strong>
            <small>Now</small>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">ShowRoom Edited Successfully</div>
        </div>
      </div>
    </>
  );
};
export default EditShowRoomModal;
