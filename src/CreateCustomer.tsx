import React, {useState} from 'react';
import {Button, Container, FormLabel, Grid, TextareaAutosize, TextField} from "@mui/material";
import isValidVatId from "./VatIdValidatorClient";

function CreateCustomer() {

    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState(false);
    const [addressStreet, setAddressStreet] = useState('');
    const [addressHouseNumber, setAddressHouseNumber] = useState('');
    const [addressZipCode, setAddressZipCode] = useState('');
    const [addressCity, setAddressCity] = useState('');
    const [addressCountry, setAddressCountry] = useState('');
    const [taxId, setTaxId] = useState('');
    const [taxIdError, setTaxIdError] = useState(false);
    const [comment, setComment] = useState('');

    function onChangeFirstName(e: React.ChangeEvent<HTMLInputElement>) {
        setFirstName(e.target.value);
        setFirstNameError(e.target.value == "")
    }

    function onChangeLastName(e: React.ChangeEvent<HTMLInputElement>) {
        setLastName(e.target.value);
        setLastNameError(e.target.value == "")
    }
    async function onChangeTaxId(e: React.ChangeEvent<HTMLInputElement>) {
        setTaxIdError(false)
        setTaxId(e.target.value);
        setTaxIdError(!await isValidVatId(e.target.value))
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormLabel>Neuen Kunden anlegen</FormLabel>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Vorname" value={firstName} onChange={onChangeFirstName} error={firstNameError}
                               helperText={firstNameError ? 'Bitte Vornamen angeben' : null} fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Nachname" value={lastName} onChange={onChangeLastName} error={lastNameError}
                               helperText={lastNameError ? 'Bitte Nachnamen angeben' : null} fullWidth/>
                </Grid>
                <Grid item xs={5}>
                    <TextField label="Straße" value={addressStreet} onChange={(e) => setAddressStreet(e.target.value)} fullWidth />
                </Grid>
                <Grid item xs={2}>
                    <TextField label="Hausnummer" value={addressHouseNumber} onChange={(e) => setAddressHouseNumber(e.target.value)} fullWidth />
                </Grid>
                <Grid item xs={5} />
                <Grid item xs={3}>
                    <TextField label="Postleitzahl" value={addressZipCode} onChange={(e) => setAddressZipCode(e.target.value)} fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <TextField label="Stadt" value={addressCity} onChange={(e) => setAddressCity(e.target.value)} fullWidth />
                </Grid>
                <Grid item xs={5} />
                <Grid item xs={5}>
                    <TextField label="Land" value={addressCountry} onChange={(e) => setAddressCountry(e.target.value)} fullWidth />
                </Grid>
                <Grid item xs={7} />
                    <Grid item xs={12}>
                        <TextField label="Umsatzsteuer-ID" value={taxId} onChange={onChangeTaxId} error={taxIdError}
                                   helperText={taxIdError ? 'Bitte eine gültige Umsatzstreuer-ÍD angeben' : null} fullWidth />
                    </Grid>
                <Grid item xs={12}>
                    <TextField label="Kommentar" value={comment} onChange={(e) => setComment(e.target.value)} fullWidth multiline inputProps={{maxLength :100}}/>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        size="large"
                            color="primary"
                            variant="contained"
                        >Neuen Kunden anlegen</Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export default CreateCustomer;
