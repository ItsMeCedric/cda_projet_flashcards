import { Outlet, Navigate } from "react-router";
import { useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import axiosInstance from "../utils/axios";

const AuthRoute = () => {
  let { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    axiosInstance.get("/auth/loggedIn").then((res) => {
      if (res.status === 200) {
        axiosInstance.get(`/users/${res.data.id}`).then((u) => {
          user = u.data;
        });
      }
    });
  }, []);

  if (user == undefined) return <Navigate to={"/"} />;
  return <Outlet />;
};

export default AuthRoute;
