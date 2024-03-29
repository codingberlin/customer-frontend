import axios from "axios";

async function createCustomer(
    vatId: string,
    firstName: string,
    lastName: string,
    comment: string,
    addressStreet: string,
    addressHouseNumber: string,
    addressZipCode: string,
    addressCity: string,
    addressCountry: string,
) {
    await axios.post('http://localhost:9000/sub-customers', {
        vatId,
        firstName,
        lastName,
        comment,
        addressStreet,
        addressHouseNumber,
        addressZipCode,
        addressCity,
        addressCountry,
    })
}

export default createCustomer;