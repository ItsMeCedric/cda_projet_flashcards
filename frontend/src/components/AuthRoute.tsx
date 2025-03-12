import { Outlet, useNavigate } from "react-router";
import { useAppDispatch } from "../hooks/redux";
import { useEffect } from "react";
import { validateToken } from "../store/actions/authActions";

const AuthRoute = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(validateToken()).then(
      () => {},
      () => {
        navigate("/", { replace: true });
      }
    );
  }, []);

  return <Outlet />;
};

export default AuthRoute;
