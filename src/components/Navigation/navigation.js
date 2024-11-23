import { Home } from "../../screens/Home";
import { Login } from "../../screens/Login";
import { Cars } from "../../screens/Cars";
import { Car } from "../../screens/Car";
import { Users } from "../../screens/Users";
import { User } from "../../screens/User";
import { Transaction } from "../../screens/Transaction";
import { ShowRoom } from "../../screens/ShowRoom";
import { ShowRooms } from "../../screens/ShowRooms";

export const nav = [
  {
    path: "/login",
    name: "Login",
    element: <Login />,
    isMenu: false,
    isPrivate: false,
  },
  {
    path: "/",
    name: "Home",
    element: <Home />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/users",
    name: "Users",
    element: <Users />,
    isMenu: true,
    isPrivate: false,
  },

  {
    path: "/user/:id",
    name: "UserDetails",
    element: <User />,
    isMenu: true,
    isPrivate: false,
  },

  {
    path: "/cars",
    name: "Cars",
    element: <Cars />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/car/:id",
    name: "CarDetails",
    element: <Car />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/transactions",
    name: "Transactions",
    element: <Transaction />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/showrooms",
    name: "ShowRooms",
    element: <ShowRooms />,
    isMenu: true,
    isPrivate: false,
  },
  {
    path: "/showroom/:id",
    name: "ShowRoom",
    element: <ShowRoom />,
    isMenu: true,
    isPrivate: false,
  },
];
