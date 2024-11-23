import DeleteUserModal from "./DeleteUserModal";
import EditUserModal from "./EditUserModal";

const UsersList = ({ users }) => {
  const userList = users.map((user) => (
    <tr key={user.id}>
      <th className="">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          className="rounded-circle"
          style={{ height: "80px", width: "80px" }}
          alt="Avatar"
        />
      </th>
      <td>
        Test
        <div className="text-muted">Test@gmail.com</div>
      </td>
      <td>Vendor</td>
      <td>created at</td>
      <td>
        <span className="badge text-bg-success">Online</span>
      </td>
      <td>
        <EditUserModal />
      </td>
      <td>
        <DeleteUserModal />
      </td>
    </tr>
  ));

  return users.length ? (
    <div className="container bg-white rounded mx-2 shadow-lg">
      <table
        className="my-4 px-5 table"
        style={{ borderCollapse: "separate", borderSpacing: " 0 15px" }}
      >
        <tbody>{userList}</tbody>
      </table>
    </div>
  ) : null;
};
export default UsersList;
