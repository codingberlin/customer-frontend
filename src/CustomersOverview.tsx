import React from 'react';
import {Button, Container, FormControl, FormLabel, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";

function CustomersOverview() {
    const navigate = useNavigate();
    const createCustomer = () => navigate('/create-customer');
    const listCustomers = () => navigate('/list-customers');

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    Was möchten Sie tun?
                </Grid>
                <Grid item xs={6}>
                    <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        onClick={listCustomers}
                        fullWidth
                    >Kundenübersicht ansehen</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button
                        size="large"
                        color="primary"
                        variant="contained"
                        onClick={createCustomer}
                        fullWidth
                    >Neuen Kunden anlegen</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CustomersOverview;
