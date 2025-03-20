import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useEffect } from "react";
import { validateToken } from "../store/actions/authActions";
import { Outlet, useNavigate } from "react-router-dom";

const AuthRoute = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user === undefined) {
      navigate("/", { replace: true });
      return;
    }
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
