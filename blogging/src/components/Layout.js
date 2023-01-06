import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
    return (
        <>
            <Header/>
            <p className="container">
                <Outlet/>
            </p>
        </>
    )
}

export default Layout;