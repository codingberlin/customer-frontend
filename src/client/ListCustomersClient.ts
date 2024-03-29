import axios from "axios";

export interface Customer {
    id: string,
    vatId: string
    firstName: string
    lastName: string
    comment: string
    addressStreet: string
    addressHouseNumber: string
    addressZipCode: string
    addressCity: string
    addressCountry: string
}
async function listCustomers(): Promise<Customer[]> {
    return (await axios.get('http://localhost:9000/sub-customers')).data
}

export default listCustomers;