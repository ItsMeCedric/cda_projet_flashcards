import { Outlet, Navigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import { validateToken } from "../store/actions/authActions";

const AuthRoute = () => {
  const dispatch = useAppDispatch();
  let { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    dispatch(validateToken());
  }, []);

  if (user == undefined) return <Navigate to={"/"} />;
  return <Outlet />;
};

export default AuthRoute;
