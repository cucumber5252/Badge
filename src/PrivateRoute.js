import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, isLoggedIn }) => {
  return isLoggedIn ? Component : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
