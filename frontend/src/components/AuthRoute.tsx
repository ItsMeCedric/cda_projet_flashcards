import { Outlet, Navigate } from "react-router";
import { useAppSelector } from "../hooks/redux";

const AuthRoute = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (user == undefined) return <Navigate to={"/"} />;
  return <Outlet />;
};

export default AuthRoute;
