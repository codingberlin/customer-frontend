import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Login";
import CustomersOverview from "./CustomersOverview";
import CreateCustomer from "./CreateCustomer";
import ListCustomers from "./ListCustomers";

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
            path: "/list-customers",
            element: <ListCustomers/>
        },
        {
            path: "/create-customer",
            element: <CreateCustomer/>
        },
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
