import { useEffect, useState } from "react";

import { Toast } from "bootstrap";
import carIcon from "../../assests/car_Icon.png";

const AddCarModal = () => {

  useEffect(() => {
    const toastTrigger = document.getElementById("AddLiveToastBtn");
    const toastLiveExample = document.getElementById("AddLiveToast");

    if (toastTrigger) {
      const toastBootstrap = Toast.getOrCreateInstance(toastLiveExample);
      toastTrigger.addEventListener("click", () => {
        toastBootstrap.show();
      });
    }
  }, []);

  return (
    <>
      <div className="text-end">
        <button
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#AddCarModal"
        >
          <i className="fs-5 bi bi-plus"></i>Add Car
        </button>
      </div>

      <div
        className="modal fade"
        id="AddCarModal"
        tabIndex="-1"
        aria-labelledby="AddCarModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="AddCarModalLabel">
                <i className="fs-5 bi bi-plus"></i> Create Car
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form className="m-3 mb-5">
              <div className="row">
                <div className="col">
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Car Image"
                    // value={car_image}
                    // onChange={(e) => setCar_image(e.target.value)}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                  />
                </div>
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
                id="AddLiveToastBtn"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="AddLiveToast"
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
          <div className="toast-body">Car Added Successfully</div>
        </div>
      </div>
    </>
  );
};
export default AddCarModal;
