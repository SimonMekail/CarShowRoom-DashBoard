import { createContext, useContext, useState, useEffect } from "react";
import { RenderRoutes } from "../components/Navigation/RenderNavigation";
import "bootstrap-icons/font/bootstrap-icons.css";

// import axios from "axios";

const AuthContext = createContext();
export const AuthData = () => useContext(AuthContext);

export const AuthWrapper = () => {
  const [user, setUser] = useState({
    email: "",
    token: "",
    isAuthenticated: true,
  });
  // const [error, setError] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);
  const login = (email, password) => {
    // Make a call to the authentication API to check the username

    // axios
    //   .post("http://127.0.0.1:8000/api/login", { email , password } , {
    //     headers: {
    //       Accept: "application/json",
    //     },
    //   })
    //   .then((response) => {

    //     console.log(response);

    //     if (response.request.status === 200) {
    //       setUser({ email: email, token: response. , isAuthenticated: true });
    //       localStorage.setItem("user", JSON.stringify(user));
    //     } else {
    //       setError("error");
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    return new Promise((resolve, reject) => {
      if (password === "a") {
        setUser({ email: email, isAuthenticated: true });
        localStorage.setItem("user", JSON.stringify(user));

        resolve("success");
      } else {
        reject("Incorrect password");
      }
    });
  };

  const logout = () => {
    setUser({ ...user, isAuthenticated: false });
    localStorage.clear();
  };

  if (user)
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
        <>
          {/* <RenderMenu /> */}
          <RenderRoutes />
        </>
      </AuthContext.Provider>
    );
  return <div>asas</div>;
};
