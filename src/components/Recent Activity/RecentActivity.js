const RecentActivity = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-8 bg-white rounded mx-1 shadow-lg">
        <p className="text-center my-3">Recent Transactions</p>

        <table className=" table">
          <tbody>
            <tr>
              <td>
                Test
                <div className="text-muted">Test@gmail.com</div>
              </td>
              <td>Vendor</td>
              <td>created at</td>
            </tr>
            <tr>
              <td>
                Test
                <div className="text-muted">Test@gmail.com</div>
              </td>
              <td>Vendor</td>
              <td>created at</td>
            </tr>
            <tr>
              <td>
                Test
                <div className="text-muted">Test@gmail.com</div>
              </td>
              <td>Vendor</td>
              <td>created at</td>
            </tr>
            <tr>
              <td>
                Test
                <div className="text-muted">Test@gmail.com</div>
              </td>
              <td>Vendor</td>
              <td>created at</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-3 bg-white rounded mx-2 shadow-lg">
        <p className="text-center my-3">Recent Users</p>
        <table className="table">
          <tbody>
            <tr>
              <th className="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  style={{ height: "80px", width: "80px" }}
                  alt="Avatar"
                />
              </th>
              <td>Test</td>
            </tr>
            <tr>
              <th className="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  style={{ height: "80px", width: "80px" }}
                  alt="Avatar"
                />
              </th>
              <td>Test</td>
            </tr>
            <tr>
              <th className="">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  style={{ height: "80px", width: "80px" }}
                  alt="Avatar"
                />
              </th>
              <td>Test</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default RecentActivity;
