import { Link, Route, Routes } from "react-router-dom";
import { AuthData } from "../../auth/AuthWrapper";
import { nav } from "./navigation";

export const RenderRoutes = () => {
  const { user } = AuthData();

  return (
    <Routes>
      {nav.map((route, index) => {
        if (route.isPrivate && user.isAuthenticated) {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        } else if (!route.isPrivate) {
          return (
            <Route key={index} path={route.path} element={route.element} />
          );
        } else return false;
      })}
    </Routes>
  );
};

export const RenderMenu = () => {
  const { user, logout } = AuthData();

  const MenuItem = ({ r }) => {
    return (
      <div className="">
        <Link to={r.path}>{r.name}</Link>
      </div>
    );
  };
  return (
    <div className="">
      {nav.map((r, i) => {
        if (!r.isPrivate && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else if (user.isAuthenticated && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else return false;
      })}

      {user.isAuthenticated ? (
        <div className="">
          <Link to={"#"} onClick={logout}>
            Log out
          </Link>
        </div>
      ) : (
        <div className="">
          <Link to={"login"}>Log in</Link>
        </div>
      )}
    </div>
  );
};
