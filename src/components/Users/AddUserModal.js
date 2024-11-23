import { useEffect, useState } from "react";

import { Toast } from "bootstrap";
import carIcon from "../../assests/car_Icon.png";

const AddUserModal = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirm_password, setConfirm_password] = useState("");

  useEffect(() => {
    const toastTrigger = document.getElementById("liveToastBtn");
    const toastLiveExample = document.getElementById("liveToast");

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
          data-bs-target="#AddUserModal"
        >
          <i className="fs-5 bi bi-plus"></i>Add User
        </button>
      </div>

      <div
        className="modal fade"
        id="AddUserModal"
        tabIndex="-1"
        aria-labelledby="AddUserModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="AddUserModalLabel">
                <i className="fs-5 bi bi-plus mx-2"></i> Create User
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-1">
                  <label htmlFor="firstName" className="col-form-label">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={first_name}
                    onChange={(e) => setFirst_name(e.target.value)}
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="lastName" className="col-form-label">
                    Last Name:
                  </label>
                  <input
                    className="form-control"
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="email" className="col-form-label">
                    Email:
                  </label>
                  <input
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-1">
                  <label htmlFor="password" className="col-form-label">
                    Password:
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </form>
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
                className="btn btn-primary"
                data-bs-dismiss="modal"
                id="liveToastBtn"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div
          id="liveToast"
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
          <div className="toast-body">User Added Successfully</div>
        </div>
      </div>
    </>
  );
};
export default AddUserModal;
