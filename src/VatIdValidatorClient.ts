import axios from "axios";

async function isValidVatId(vatId: string) {
    const result = await axios.post('http://localhost:9000/validate/vat-id', {
        vatId
    })
    return result.data.isValid;
}

export default isValidVatId;