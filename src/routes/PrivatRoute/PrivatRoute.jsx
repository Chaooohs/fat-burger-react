import { Navigate, Outlet } from "react-router-dom";

export default function PrivatRoute() {

  if (localStorage.getItem('login')) {
    return <Outlet />
  } else {
    return <Navigate to="/admin" />;
  }
}