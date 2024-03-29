import React, {useEffect, useState} from 'react';
import {Container } from "@mui/material";
import listCustomers, {Customer} from "./client/ListCustomersClient";
import CustomerCard from "./CustomerCard";


function ListCustomers() {
    const [customers, setCustomers] = useState([] as Customer[])
    useEffect(() => {
        listCustomers().then(setCustomers)
    })

    return (
        <Container>
            {customers.map(c => <CustomerCard key={c.id} customer={c} />)}
        </Container>
    );
}

export default ListCustomers;
