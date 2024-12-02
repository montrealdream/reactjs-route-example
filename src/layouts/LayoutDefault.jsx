import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export const LayoutDefault = () => {
    return (
        <>
            <Header/>

            <Outlet/>
        </>
    );
}