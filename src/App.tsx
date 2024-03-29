import React, {createContext, useEffect, useState} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./Login";
import CustomersOverview from "./CustomersOverview";
import CreateCustomer from "./CreateCustomer";
import ListCustomers from "./ListCustomers";

export const UserToken = createContext('')
const router = createBrowserRouter([
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
])
function loginOrApp(token: string) {
    if (token) {
        return
    }
    return createBrowserRouter([
        {
            path: "*",
            element: <Login/>
        },
    ]);
}
function App() {
    const [token, setToken] = useState('')
    if (!token) {
        const searchParams = new URLSearchParams(window.location.search);
        const urlToken = searchParams.get("token")
        if (urlToken) {
            setToken(urlToken);
        }
    }

    if (!token) {
        return (<Login />)
    }

    return (
        <UserToken.Provider value={token}>
            <RouterProvider router={router}/>
        </UserToken.Provider>
    );
}


export default App;
