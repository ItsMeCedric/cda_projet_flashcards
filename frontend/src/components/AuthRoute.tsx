import { Outlet, useNavigate } from "react-router";
import { useAppDispatch } from "../hooks/redux";
import { useEffect } from "react";
import { validateToken } from "../store/actions/authActions";

const AuthRoute = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("auth route");
    dispatch(validateToken()).then(
      () => {
        console.log("valid token");
      },
      () => {
        navigate("/", { replace: true });
      }
    );
  }, []);

  return <Outlet />;
};

export default AuthRoute;
