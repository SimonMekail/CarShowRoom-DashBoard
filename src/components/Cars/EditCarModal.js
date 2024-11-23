import { useEffect } from "react";

import { Toast } from "bootstrap";
import carIcon from "../../assests/car_Icon.png";

const EditCarModal = () => {
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
        data-bs-target="#EditCarModal"
      >
        <i className="bi bi-pencil-fill"></i>
      </button>

      <div
        className="modal fade"
        id="EditCarModal"
        tabIndex="-1"
        aria-labelledby="EditCarModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="EditCarModalLabel">
                <i className="bi bi-pencil-fill"></i>
                Edit Car Information
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
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    aria-label="First name"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    aria-label="Last name"
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
          <div className="toast-body">Car Edited Successfully</div>
        </div>
      </div>
    </>
  );
};
export default EditCarModal;
