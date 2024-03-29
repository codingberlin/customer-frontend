import React, {useContext, useEffect, useState} from 'react';
import {Container} from "@mui/material";
import listCustomers, {Customer} from "./client/ListCustomersClient";
import CustomerCard from "./CustomerCard";
import {UserToken} from "./App";

function ListCustomers() {
    const token = useContext(UserToken)
    const [customers, setCustomers] = useState([] as Customer[])
    useEffect(() => {
        listCustomers(token).then(setCustomers)
    }, [])

    return (
        <Container>
            {customers.map(c => <CustomerCard key={c.id} customer={c} />)}
        </Container>
    );
}

export default ListCustomers;
