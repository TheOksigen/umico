import React, {useState} from "react";
import {Outlet, useNavigate} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AnaLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default AnaLayout;
