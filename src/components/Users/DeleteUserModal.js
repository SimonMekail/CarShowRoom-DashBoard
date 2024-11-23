import { useEffect } from "react";

import { Toast } from "bootstrap";
import carIcon from "../../assests/car_Icon.png";

const DeleteUserModal = () => {
  useEffect(() => {
    const toastTrigger = document.getElementById("deleteLiveToastBtn");
    const toastLiveExample = document.getElementById("deleteLiveToast");

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
        type="button"
        className="bg-body border-0 text-danger fs-3"
        data-bs-toggle="modal"
        data-bs-target="#DeleteUserModal"
      >
        <i className="bi bi-x"></i>
      </button>

      <div
        className="modal fade"
        id="DeleteUserModal"
        tabIndex="-1"
        aria-labelledby="DeleteUserModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="DeleteUserModalLabel">
                Confirm Delete
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are You Sure You Want To Delete This User?
            </div>
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
                className="btn btn-danger"
                data-bs-dismiss="modal"
                id="deleteLiveToastBtn"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="deleteLiveToast"
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
          <div className="toast-body">User Deleted Successfully</div>
        </div>
      </div>
    </>
  );
};
export default DeleteUserModal;
