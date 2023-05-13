import React from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
// import Country from '../pages/Country'
import AnaLayout from "../layouts/AnaLayout";
import Warranty from "../pages/Warranty";
import Shipinng from "../pages/Shipinng";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AnaLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="questions-answers" element={<Warranty />} />
            <Route path="shipping-payment" element={<Shipinng />} />
        </Route>
    )
);

// {/* <Route path='country/:zirt' element={<Country />} /> */}
