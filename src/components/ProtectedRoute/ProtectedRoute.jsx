import { Navigate } from "react-router-dom";

export const ProtectedRoute = (props) => {
    const { children } = props; // thẻ được lồng bên trong Protected Route
    const isLogin = true;
    return isLogin ? children : <Navigate to="/"/>
}