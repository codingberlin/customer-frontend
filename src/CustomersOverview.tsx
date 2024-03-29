import React from 'react';
import {Button, Container, FormControl, FormLabel} from "@mui/material";
import {useNavigate} from "react-router-dom";

function CustomersOverview() {
    const navigate = useNavigate();
    const createCustomer = () => navigate('/create-customer');
    const listCustomers = () => navigate('/list-customers');

    return (
        <Container>
            <FormControl>
                <FormLabel>Was möchten Sie tun?</FormLabel>
            <Button
                size="large"
                color="primary"
                variant="contained"
                onClick={listCustomers}
            >Kundenübersicht ansehen</Button>
            <Button
                size="large"
                color="primary"
                variant="contained"
                onClick={createCustomer}
            >Neuen Kunden anlegen</Button>
            </FormControl>
        </Container>
    );
}

export default CustomersOverview;
