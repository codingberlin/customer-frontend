import Box from '@mui/material/Box';
import {Grid} from "@mui/material";

function CustomerCard(props: any) {
    const customer = props.customer;
    return (
        <Box
            sx={{ p: 2, border: '1px dashed grey', marginBottom: '5px' }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    {customer.firstName} {customer.lastName}
                </Grid>
                <Grid item xs={12}>
                    {customer.vatId}
                </Grid>
                <Grid item xs={12}>
                    {customer.addressStreet} {customer.addressHouseNumber}
                </Grid>
                <Grid item xs={12}>
                    {customer.addressZipCode} {customer.addressCity}
                </Grid>
                <Grid item xs={12}>
                    {customer.addressCountry}
                </Grid>
                <Grid item xs={12}>
                    {customer.comment}
                </Grid>
            </Grid>
        </Box>
    );
}

export default CustomerCard;
