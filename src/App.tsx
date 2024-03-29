import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Login";
import CustomersOverview from "./CustomersOverview";

function loginOrApp() {
    const storageToken = window.sessionStorage.getItem("token")
    if (!storageToken) {
        const searchParams = new URLSearchParams(window.location.search);
        const urlToken = searchParams.get("token")
        if (!urlToken) {
            return createBrowserRouter([
                {
                    path: "*",
                    element: <Login/>
                }])
        }
        window.sessionStorage.setItem("token", urlToken);
    }

    return createBrowserRouter([
        {
            path: "*",
            element: <CustomersOverview/>
        },
    ]);
}

function App() {
    return (
        <RouterProvider router={loginOrApp()}/>
    );
}

export default App;
